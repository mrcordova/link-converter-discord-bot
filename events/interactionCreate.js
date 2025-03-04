import { Events, MessageFlags } from "discord.js";

export const name = Events.InteractionCreate;

export async function execute(interaction) {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferrred) {
      await interaction.followUp({
        content: "there was an error while executing this command",
        flags: MessageFlags.Ephemeral,
      });
    } else {
      await interaction.reply({
        content: "there was an error while executing this command",
        flags: MessageFlags.Ephemeral,
      });
    }
  }
}
