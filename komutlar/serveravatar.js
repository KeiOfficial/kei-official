const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Warning :warning:', '**You can not use `serveravatar` command here.**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`${message.guild.iconURL} `)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-pp'],
  permLevel: 0
};

exports.help = {
  name: 'serveravatar',
  description: 'BOT Show Server Avatar.',
  usage: 'serveravatar'
};
