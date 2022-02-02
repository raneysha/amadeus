const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('imglist')
    .setDescription('Daftar gambar yang ada'),
  async execute(interaction) {
    const file = fs.readFileSync('./source.json', 'utf-8');
    const imgdata = JSON.parse(file);
    const name = []
    imgdata.forEach(element => {
      name.push(element.name)
    });
    let namejoined = name.join("\r\n")
    const imgEmbed = {
      color: 0x0099ff,
	    title: 'Daftar gambar yang tersedia : ',
      fields: [
        {
          name: 'List : ',
          value: namejoined,
        }]
    }
    await interaction.reply({ embeds: [imgEmbed]})
  },
};
