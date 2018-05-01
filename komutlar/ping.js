const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('My Ping : **' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'BOT Show İts Ping.',
  usage: 'ping'
};
