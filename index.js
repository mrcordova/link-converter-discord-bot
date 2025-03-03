import { Client, Events, GatewayIntentBits } from "discord.js";
import config from "./config.json" assert { type: "json" };

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


