const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pedo')
    .setDescription('pedoin orang di input lo')
    .addMentionableOption(option =>
      option.setName('mentionable')
        .setDescription('masukin namanya bro')
        .setRequired(true)),
  async execute(interaction) {
    const mentionable = interaction.options.getMentionable('mentionable');
    await interaction.reply(`${mentionable} pedo !!`);
  },
};
