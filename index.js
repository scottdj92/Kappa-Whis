"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const client = new Discord.Client();
let allEmotes;
client.on("ready", () => __awaiter(this, void 0, void 0, function* () {
    allEmotes = yield axios_1.default.get("https://twitchemotes.com/api_cache/v3/global.json")
        .then((response) => response.data)
        .catch((error) => error.message);
}));
client.on("message", (message) => {
    console.log("message", message.content, message.author.id);
    Object.keys(allEmotes).map((emote) => {
        console.log(emote);
    });
});
client.login(process.env.DISCORD_BOT_KEY);
//# sourceMappingURL=index.js.map