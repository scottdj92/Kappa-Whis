import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";
import * as Discord from "discord.js";
import { Guild, Message } from "discord.js";
import * as dotenv from "dotenv";
import Emote from "./models/Emote";
import Leaderboard from "./models/Leaderboard";

dotenv.config();

const client = new Discord.Client();

// TODO: type safe this shit
let allEmotes;
let allMembers;

client.on("ready", async () => {
  // poll all twitch emotes and store them locally
  allEmotes = await axios.get("https://twitchemotes.com/api_cache/v3/global.json")
    .then( (response: AxiosResponse) => response.data)
    .catch( (error: AxiosError) => error.message);

  // TODO: get all members and populate basic leaderboard
  // allMembers = client.channels


  // should poll the current room (most likely general channel)
  // get all users and initialize count of users and their emotes
});

client.on("message", (message: Message) => {
  console.log("message", message.content, message.author.id);

  Object.keys(allEmotes).map( (emote: string) => {
    if (message.content.includes(emote)) {
      // leaderboard.users[user.id][emote].timesUsed += 1
    }
  });
  // check against all twitch emotes
  // if it matches an emote, increment it

  // if it matches a unique command, print message of all emote counts
});

client.login(process.env.DISCORD_BOT_KEY);
