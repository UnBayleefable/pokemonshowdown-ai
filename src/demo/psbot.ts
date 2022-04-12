// istanbul ignore file: Demo.
import * as path from "path";
import {pathToFileURL} from "url";
import * as tf from "@tensorflow/tfjs";
import {config} from "../config";
import {PsBot} from "../psbot/PsBot";
import * as handlers from "../psbot/handlers";
import {networkAgent} from "../psbot/handlers/battle/ai/networkAgent";
import {Logger} from "../util/logging/Logger";
import {importTfn} from "../util/tfn";
// Make sure custom layers can be deserialized.
import "../train/model/custom_layers";

// Select native backend.
importTfn(config.tf.gpu);

// Load neural network from disk in the background while connecting.
const modelPromise = tf.loadLayersModel(
    pathToFileURL(path.join(config.paths.latestModel, "model.json")).href,
);

const logger = Logger.stderr;

void (async function () {
    const bot = new PsBot(logger.addPrefix("PSBot: "));

    try {
        await bot.connect(config.psbot.websocketRoute);
    } catch (e) {
        logger.error(`Connection error: ${(e as Error)?.stack ?? e}`);
        return;
    }

    if (config.psbot.username) {
        await bot.login({
            username: config.psbot.username,
            ...(config.psbot.password && {password: config.psbot.password}),
            loginUrl: config.psbot.loginUrl,
        });
    }
    if (config.psbot.avatar) {
        bot.setAvatar(config.psbot.avatar);
    }

    const model = await modelPromise;
    const agent = networkAgent(model);

    bot.acceptChallenges(
        "gen4randombattle",
        (room, user, sender) =>
            new handlers.battle.BattleHandler({
                username: user,
                agent,
                sender,
                logger: logger.addPrefix(`BattleHandler(${room}): `),
            }),
    );
})();