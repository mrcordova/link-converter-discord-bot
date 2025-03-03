const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lc")
    .setDescription("Convert link into embed"),
  async execute(interaction) {
    await interaction.reply(`This command lc`);
  },
};
