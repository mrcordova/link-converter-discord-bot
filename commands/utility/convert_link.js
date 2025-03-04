import { SlashCommandBuilder } from "discord.js";
import { websites } from "../../helpers/constants.js";
export const data = new SlashCommandBuilder()
  .setName("lc")
  .setDescription("Convert link into embed");

export async function execute(interaction) {
  // websites
  await interaction.reply(`This command lc`);
}
