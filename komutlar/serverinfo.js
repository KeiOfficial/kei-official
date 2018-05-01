const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Warning :warning:', '**You can not use `serverinfo` command here.**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Server Name:', message.guild.name)
    .addField('Server ID:', message.guild.id)
    .addField('Main Channel:', message.guild.defaultChannel)
    .addField('Server Location:', message.guild.region)
    .addField('Users :', message.guild.memberCount)
    .addField('Owner :', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Channels :', message.guild.channels.size)
    .addField('Creation Date :', message.guild.createdAt)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'BOT Gives Information About Server.',
  usage: 'serverinfo'
};
