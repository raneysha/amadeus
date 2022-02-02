const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('poornitro')
		.setDescription('Poorman Nitro bot version')
    .addStringOption(option => 
      option.setName('input')
      .setDescription('Masukin nama gambarnya!')
      .setRequired(true)),
	async execute(interaction) {
    const baca = () => {
      const file = fs.readFileSync('./source.json', 'utf-8');
      const imgdata = JSON.parse(file);
      return imgdata;
    }
    const imgdata = baca();
    const string = interaction.options.getString('input');
    const cari = imgdata.find((imgdata) => imgdata.name === string );
    if (cari){
      await interaction.reply(`${cari.link}`);
    }else{
      await interaction.reply('Gambar yang lo cari gaada!');
    }  
	},
};
