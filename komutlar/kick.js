const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning :warning:', 'You can not use `kick` command here.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply(':warning: **Warning** :warning:', '**I can not find `mod-log` channel.**');
  if (reason.length < 1) return message.reply('**You must write reason!**');
  if (message.mentions.users.size < 1) return message.reply('**You must write who you want kick!**').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('I can not kick administrators.');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Kick :bangbang: ')
    .addField('Kicked User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Admin:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason: ', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'BOT Ban User Who You Want',
  usage: 'kick [kullanıcı] [sebep]'
};
