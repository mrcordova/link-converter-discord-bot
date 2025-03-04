import { blockQuote, SlashCommandBuilder } from "discord.js";
export const data = new SlashCommandBuilder()
  .setName("q")
  .setDescription("create block quote of text")
  .addStringOption((option) =>
    option.setName("text").setDescription("text to use").setRequired(true)
  );

export async function execute(interaction) {
  const text = interaction.options.getString("text");

  await interaction.reply(`${blockQuote(text)}`);
}
