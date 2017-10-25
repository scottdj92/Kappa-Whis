import { User } from "discord.js";
import Emote from "./Emote";

class Player extends User {
  public topEmote: string;
  public emotes: Emote[];
}

export default Player;
