import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("lc")
  .setDescription("Convert link into embed");
export async function execute(interaction) {
  await interaction.reply(`This command lc`);
}
