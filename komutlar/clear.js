const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('**You can not use `clear` command here.**');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('**You must write how many message you want clear.**')
  if (mesajsayisi > 100) return message.channel.send('I can not clear more than **__100__** messages!**');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('**I cleared __' + mesajsayisi + '__** **messages!** ')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'BOT Clear Messages How Many You Want.',
  usage: 'clear <temizlenecek mesaj sayısı>'
};
