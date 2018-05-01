const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Online") : (Durum == "offline" ? ("Offline") : (Durum == "idle" ? ("unattached") : (Durum == "dnd" ? ("Do not bother") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Nickname :', message.author.username + '#' + message.author.discriminator)
      .addField('ID :', message.author.id)
      .addField('Date Of Registration:', message.author.createdAt)
      .addField('Status:', durm)
      .addField('Currently Playing :', message.author.presence.game ? message.author.presence.game.name : 'User is not playing anything now.')
      console.log("!userinfo command used " + message.author.username)
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı', 'kullanıcı bilgim', 'kbilgim'],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'BOT Show Info About You.',
  usage: 'userinfo'
};
