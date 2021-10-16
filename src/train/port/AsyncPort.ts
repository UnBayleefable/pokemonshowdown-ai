import { deserialize } from "v8";
import { TransferListItem } from "worker_threads";
import { PortProtocol, PortResultError, RawPortResultError } from
    "./PortProtocol";

/**
 * Interface for objects that work like `worker_threads` ports. This works for
 * the MessagePort and Worker types from that module.
 *
 * @template TProtocol Message-passing protocol that this port implements.
 * @template TTypes Protocol message types.
 */
export interface ProtocolPort
<
    TProtocol extends PortProtocol<TTypes>, TTypes extends string
>
{
    postMessage(msg: TMessage<TProtocol, TTypes>,
        transferList?: readonly TransferListItem[]): void;
}

/** Function type for {@link AsyncPort.postMessage} callbacks. */
export type AsyncPortCallback
<
    TProtocol extends PortProtocol<TTypes>,
    TTypes extends string
> =
    (result: TResult<TProtocol, TTypes>) => void;

/**
 * Helper type for extracting the message type from a {@link PortProtocol} type.
 */
export type TMessage
<
    TProtocol extends PortProtocol<TTypes>,
    TTypes extends string,
    T extends TTypes = TTypes
> =
    TProtocol[T]["message"];

/**
 * Helper for extracting the result type from a {@link PortProtocol} type. Also
 * includes an error type.
 */
export type TResult
<
    TProtocol extends PortProtocol<TTypes>,
    TTypes extends string,
    T extends TTypes = TTypes
> =
    TProtocol[T]["result"] | PortResultError;

/**
 * Helper for extracting the result type from a {@link PortProtocol} type. Also
 * includes a serialized error result type.
 */
type TRawResult
<
    TProtocol extends PortProtocol<TTypes>,
    TTypes extends string,
    T extends TTypes = TTypes
> =
    TProtocol[T]["result"] | RawPortResultError;

/**
 * Wraps a `worker_threads` MessagePort or Worker to enforce a typed
 * message-passing protocol.
 *
 * @template TPort Port object to wrap that supports a message-passing function.
 * @template TProtocol Defines all the request types that can be made to the
 * wrapped port.
 * @template TTypes Protocol message types.
 */
export class AsyncPort
<
    TPort extends ProtocolPort<TProtocol, TTypes>,
    TProtocol extends PortProtocol<TTypes>,
    TTypes extends string
>
{
    /** Counter for assigning request ids. */
    private ridCounter = 0;
    /** Tracks current outgoing requests to the port. */
    private readonly requests:
        Map<number, (result: TResult<TProtocol, TTypes>) => void> = new Map();

    /**
     * Creates an AsyncPort.
     *
     * @param port Port to interface with.
     */
    constructor(public readonly port: TPort) {}

    /**
     * Method that will be used to handle messages from the port.
     *
     * This method must be set as the port's on-message event listener.
     *
     * @param result Result object from the port defined by the protocol.
     */
    public receiveMessage(result: TRawResult<TProtocol, TTypes>): void
    {
        // find a registered callback
        const callback = this.requests.get(result.rid);
        if (!callback) throw new Error(`Invalid rid ${result.rid}`);

        // de-register
        if (result.done) this.requests.delete(result.rid);

        // process raw port result
        if (result.type === "error")
        {
            const rawResult = result as RawPortResultError;
            // deserialize raw Error obj buffer
            const errorResult: PortResultError =
                {...rawResult, err: deserialize(rawResult.err)};
            callback(errorResult);
        }
        else callback(result);
    }

    /**
     * Rejects all pending requests due to a fatal error.
     *
     * If the other side of the port can crash (e.g. Workers but not
     * MessagePorts), this method should be called with the Error that caused
     * it (or a WrappedError to give context).
     *
     * @param err Error that caused the crash. This will be passed to all
     * pending requests to reject them.
     */
    public receiveError(err: Error): void
    {
        // make sure that all currently pending callbacks get resolved in
        //  the case of a worker error
        const requests = [...this.requests];
        this.requests.clear();
        for (const [rid, callback] of requests)
        {
            const result: PortResultError =
                {type: "error", rid, done: true, err};
            callback(result);
        }
    }

    /**
     * Sends and tracks a message through the port.
     *
     * This method can be wrapped over an abstraction layer by the caller to
     * provide an interface for their own message-passing protocols.
     *
     * @param msg Message to send that implements the protocol.
     * @param transferList Port/buffer transfer list to avoid copying.
     * @param callback Function to call when a reply is sent by the port. This
     * may be called multiple times until the `done` property of the argument is
     * true.
     */
    public postMessage<T extends TTypes>(
        msg: TMessage<TProtocol, TTypes, T>,
        transferList: readonly TransferListItem[],
        callback: (result: TResult<TProtocol, TTypes, T>) => void): void
    {
        // should never happen
        if (this.requests.has(msg.rid))
        {
            throw new Error(`Duplicate rid ${msg.rid}`);
        }

        this.requests.set(msg.rid, (result: TResult<TProtocol, TTypes>) =>
        {
            // should never happen
            if (msg.rid !== result.rid)
            {
                throw new Error(`Dispatched rid ${msg.rid} but got back rid ` +
                    result.rid);
            }

            // should never happen
            if (msg.type !== result.type && result.type !== "error")
            {
                throw new Error(`Message '${msg.type}' sent but got back ` +
                    `'${result.type}'`);
            }

            callback(result as TResult<TProtocol, TTypes, T>);
        });
        this.port.postMessage(msg, transferList);
    }

    /**
     * Generates a valid unique request id.
     *
     * Used to construct protocol messages.
     */
    public nextRid(): number
    {
        // TODO: guard against overflow and possible duplicate rids?
        return this.ridCounter++;
    }
}
