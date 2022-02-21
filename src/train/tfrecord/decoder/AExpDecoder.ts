import {Transform, TransformCallback} from "stream";
import Long from "long";
import * as tfrecord from "tfrecord";
import {maskedCrc32c} from "tfrecord/lib/crc32c";
import {AugmentedExperience} from "../../play/experience";
import {footerBytes, headerBytes, lengthBytes} from "../helpers";

/**
 * Deserializes TFRecord Example segments into AugmentedExperience objects.
 *
 * This is intended to pipe directly from a `.tfrecord` file in binary mode.
 */
export class AExpDecoder extends Transform {
    /**
     * Event for when a chunk has been read from input and stored in
     * {@link nextChunk}. If {@link nextChunk} is still null after this event is
     * emitted, then there is no more data to read.
     */
    private static readonly chunkRead = Symbol("chunkRead");
    /**
     * Event for when the {@link nextChunk} has been consumed and set to null.
     */
    private static readonly chunkConsumed = Symbol("chunkConsumed");

    /** Internal buffer for reading data. */
    private dataBuffer: Buffer | null = null;
    /**
     * The next chunk to be read. When set or reset, the respective events
     * {@link chunkRead} and {@link chunkConsumed} should be emitted.
     */
    private nextChunk: Buffer | null = null;
    /** Manages the async record reader loop. */
    private recordLoopPromise: Promise<void>;
    /** Promise that resolves once {@link _flush} has been called. */
    private readonly flushPromise = new Promise<void>(
        res => (this.flushResolve = res),
    );
    /** Callback for resolving the flush promise. */
    private flushResolve!: () => void;

    // Adapted from tfrecord/src/record_reader.ts and reader.ts.
    /**
     * Main metadata buffer that wraps serialized TFRecord Examples. Reused for
     * each {@link readRecord} call to save on allocations.
     */
    private readonly metadata = new ArrayBuffer(headerBytes);
    /** Buffer for reading 8byte length and 4byte crc32c header. */
    private readonly lengthAndCrcBuffer = new Uint8Array(
        this.metadata,
        0,
        headerBytes,
    );
    /** View for extracting 8byte length and 4byte crc32c header. */
    private readonly lengthAndCrc = new DataView(this.metadata, 0, headerBytes);
    /** Points to length for crc32c computations. */
    private readonly lengthBuffer = Buffer.from(this.metadata, 0, lengthBytes);
    /** Buffer for reading Example record and crc32c footer. */
    private recordAndCrcBuffer = new Uint8Array(1);
    /** View for extracting Example record and crc32c footer. */
    private recordAndCrcView = new DataView(
        this.recordAndCrcBuffer.buffer,
        0,
        1,
    );

    /**
     * Creates an AExpDecoder stream.
     *
     * @param writableHighWaterMark High water mark on the write side.
     * @param readableHighWaterMark High water mark on the read side.
     */
    public constructor(
        writableHighWaterMark?: number,
        readableHighWaterMark?: number,
    ) {
        super({
            decodeStrings: true,
            writableHighWaterMark,
            readableObjectMode: true,
            readableHighWaterMark,
        });

        this.recordLoopPromise = this.recordLoop();
    }

    public override _transform(
        chunk: Buffer,
        encoding: BufferEncoding,
        callback: TransformCallback,
    ): void {
        if (!this.nextChunk) {
            // Register chunk.
            this.nextChunk = chunk;
            this.emit(AExpDecoder.chunkRead);
            callback();
        } else {
            // Wait for the next chunk to be consumed.
            // Note: Order is still guaranteed here due to once() call order.
            this.once(AExpDecoder.chunkConsumed, () =>
                this._transform(chunk, encoding, callback),
            );
        }
    }

    public override _flush(callback: (err?: Error | null) => void): void {
        // Wait for the remaining chunks to be consumed then try again.
        if (this.listenerCount(AExpDecoder.chunkConsumed) > 0) {
            this.once(AExpDecoder.chunkConsumed, () => this._flush(callback));
            return;
        }

        // Signal no more data.
        this.flushResolve();

        // Wait for the record reader loop to finish.
        this.recordLoopPromise = this.recordLoopPromise
            .then(() => callback())
            .catch(callback);
    }

    /** Executes the record reader loop. */
    private async recordLoop(): Promise<void> {
        let recordData: Buffer | null;
        while ((recordData = await this.readRecord())) {
            const example = tfrecord.Example.decode(recordData);
            this.push(AExpDecoder.exampleToAExp(example));
        }
        this.push(null);
    }

    /**
     * Extracts a serialized Example from input.
     *
     * @returns A Buffer containing the serialized Example, or null if no more
     * data to read.
     * @throws Error if invalid format.
     */
    private async readRecord(): Promise<Buffer | null> {
        // Read header.
        let bytesRead = await this.consume(
            this.lengthAndCrcBuffer,
            headerBytes,
        );
        // Eof.
        if (bytesRead === 0) {
            return null;
        }
        if (bytesRead !== this.lengthAndCrcBuffer.length) {
            throw new Error(
                "Incomplete read. Expected a " +
                    `${this.lengthAndCrcBuffer.length}-byte header but got ` +
                    `${bytesRead} bytes`,
            );
        }

        // Parse header.
        const length = this.lengthAndCrc.getUint32(0, true /*littleEndian*/);
        const lengthHigh = this.lengthAndCrc.getUint32(
            4,
            true /*littleEndian*/,
        );
        const lengthCrc = this.lengthAndCrc.getUint32(
            lengthBytes,
            true /*littleEndian*/,
        );

        // TODO: Support 64bit length via Long pkg.
        if (lengthHigh) {
            throw new Error("4gb+ tfrecords not supported");
        }

        let expectedCrc = maskedCrc32c(this.lengthBuffer);
        if (lengthCrc !== expectedCrc) {
            throw new Error(
                "Incorrect record length CRC32C header. Expected " +
                    `${expectedCrc.toString(16)} but got ` +
                    lengthCrc.toString(16),
            );
        }

        // Get a buffer for record + crc32c footer.
        const readLength = length + footerBytes;
        if (this.recordAndCrcBuffer.length < readLength) {
            // Grow record+crc buffer.
            let newLength = this.recordAndCrcBuffer.length;
            while (newLength < readLength) {
                newLength *= 2;
            }

            // Alloc new record+crc buffer.
            this.recordAndCrcBuffer = new Uint8Array(newLength);
            this.recordAndCrcView = new DataView(
                this.recordAndCrcBuffer.buffer,
                0,
                newLength,
            );
        }

        // Read record + footer.
        bytesRead = await this.consume(this.recordAndCrcBuffer, readLength);
        if (bytesRead !== readLength) {
            throw new Error(
                `Incomplete read. Expected ${readLength} bytes after header ` +
                    `but got ${bytesRead} bytes`,
            );
        }

        // Extract view of record data.
        const recordData = Buffer.from(
            this.recordAndCrcBuffer.buffer,
            0,
            length,
        );

        // Parse crc.
        const recordCrc = this.recordAndCrcView.getUint32(
            length,
            true /*littleEndian*/,
        );
        expectedCrc = maskedCrc32c(recordData);
        if (recordCrc !== maskedCrc32c(recordData)) {
            throw new Error(
                "Incorrect record CRC32C footer. Expected " +
                    `${expectedCrc.toString(16)} but got ` +
                    recordCrc.toString(16),
            );
        }

        return recordData;
    }

    /**
     * Consumes data from the internal chunk buffer.
     *
     * @param buffer Buffer to store the data in. Must be at least as long as
     * `length`.
     * @param length Maximum number of bytes to consume.
     * @returns The total amount of bytes consumed. If this is less than the
     * provided `length`, then there's no more data to consume.
     */
    private async consume(buffer: Uint8Array, length: number): Promise<number> {
        // Read enough data.
        const prevLength = this.dataBuffer?.length ?? 0;
        const bytesRead = await this.bufferChunks(length);
        const totalBuffer = prevLength + bytesRead;

        if (!this.dataBuffer) {
            return 0;
        }

        // Consume data and write to argument buffer.
        const bytesConsumed = Math.min(totalBuffer, length);
        this.dataBuffer.copy(buffer, 0, 0, bytesConsumed);

        // Remove the consumed bytes out of the data buffer.
        if (totalBuffer - length === 0) {
            this.dataBuffer = null;
        } else {
            // Splice out the requested length.
            const newBuf = Buffer.allocUnsafe(totalBuffer - length);
            this.dataBuffer.copy(newBuf, 0, length);
            this.dataBuffer = newBuf;
        }

        return bytesConsumed;
    }

    /**
     * Reads data from input and adds them to {@link dataBuffer} until its
     * length exceeds the given length.
     *
     * @param length Minimum amount of bytes to consume.
     * @returns The total number of bytes read. If this is less than the given
     * `length`, then there is no more data to read.
     */
    private async bufferChunks(length: number): Promise<number> {
        const chunks: Buffer[] = [];
        let bytesRead = 0;

        while ((this.dataBuffer?.length ?? 0) + bytesRead < length) {
            // Add the next chunk to the data buffer.
            const chunk = await this.readChunk();
            // No more data.
            if (!chunk) {
                break;
            }
            chunks.push(chunk);
            bytesRead += chunk.length;
        }

        // Add the chunks to the data buffer.
        if (chunks.length > 0) {
            if (!this.dataBuffer) {
                this.dataBuffer = Buffer.concat(chunks, bytesRead);
            } else {
                this.dataBuffer = Buffer.concat(
                    [this.dataBuffer, ...chunks],
                    this.dataBuffer.length + bytesRead,
                );
            }
        }

        return bytesRead;
    }

    /**
     * Gets the next chunk read from input.
     *
     * @returns The next chunk as a Buffer, or null if no more can be consumed.
     */
    private async readChunk(): Promise<Buffer | null> {
        // Wait for the next chunk to be read from input.
        if (!this.nextChunk) {
            await Promise.race([
                this.flushPromise,
                new Promise(res => this.once(AExpDecoder.chunkRead, res)),
            ]);
        }

        // Consume chunk.
        const chunk = this.nextChunk;
        this.nextChunk = null;
        this.emit(AExpDecoder.chunkConsumed);
        return chunk;
    }

    /**
     * Converts a tfrecord Example into an {@link AugmentedExperience}.
     *
     * @param example Example to decode.
     * @returns An AugmentedExperience.
     * @throws Error if the Example is invalid for decoding.
     */
    private static exampleToAExp(
        example: tfrecord.Example,
    ): AugmentedExperience {
        const featureMap = example.features?.feature;
        if (!featureMap) {
            throw new Error("AExp Example has no features");
        }
        return {
            action: AExpDecoder.getUint32(featureMap, "action"),
            advantage: AExpDecoder.getFloat(featureMap, "advantage"),
            probs: AExpDecoder.getFloats(featureMap, "probs"),
            returns: AExpDecoder.getFloat(featureMap, "returns"),
            state: AExpDecoder.getFloats(featureMap, "state"),
            value: AExpDecoder.getFloat(featureMap, "value"),
        };
    }

    private static getUint32(
        featureMap: {[k: string]: tfrecord.protos.IFeature},
        key: string,
    ): number {
        const value = featureMap[key]?.int64List?.value;
        if (!value) {
            throw new Error(`AExp Example must have int64List '${key}'`);
        }
        if (value.length !== 1) {
            throw new Error(`int64List '${key}' must have one value`);
        }

        const [v] = value;
        if (Long.isLong(v)) {
            return v.getLowBitsUnsigned();
        }
        return v as number;
    }

    private static getFloat(
        featureMap: {[k: string]: tfrecord.protos.IFeature},
        key: string,
    ): number {
        const value = featureMap[key]?.floatList?.value;
        if (!value) {
            throw new Error(`AExp Example must have floatList '${key}'`);
        }
        if (value.length !== 1) {
            throw new Error(`floatList '${key}' must have one value`);
        }

        return value[0];
    }

    private static getFloats(
        featureMap: {[k: string]: tfrecord.protos.IFeature},
        key: string,
    ): Float32Array {
        const value = featureMap[key]?.floatList?.value;
        if (!value) {
            throw new Error(`AExp Example must have floatList '${key}'`);
        }
        return new Float32Array(value);
    }
}
