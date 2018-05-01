const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning :warning:', '**You can not use `ban` command here.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('**I can not find `mod-log` channel.**');
  if (reason.length < 1) return message.reply('**You must write reason!**');
  if (message.mentions.users.size < 1) return message.reply('You must write who you want ban.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('I can not ban administrators.');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Ban :bangbang: ')
    .addField('Banned User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Admin:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason:', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'BOT Ban User Who You Want.',
  usage: 'ban [kullanıcı] [sebep]'
};
