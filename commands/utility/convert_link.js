import { SlashCommandBuilder } from "discord.js";
import { websites } from "../../helpers/constants.js";
export const data = new SlashCommandBuilder()
  .setName("c")
  .setDescription("Convert link into embed")
  .addStringOption((option) =>
    option.setName("link").setDescription("link to convert").setRequired(true)
  );

export async function execute(interaction) {
  // websites
  let link = interaction.options.getString("link");
  if (link.includes("www.")) {
    link = link.replace("www.", "");
  }
  const linkURL = new URL(link);
  //   console.log(link);
  //   console.log(linkURL.hostname);
  if (linkURL.hostname in websites) {
    linkURL.hostname = websites[linkURL.hostname];
    await interaction.reply(`${linkURL.toString()}`);
  } else {
    await interaction.reply(`website not found`);
  }
}
