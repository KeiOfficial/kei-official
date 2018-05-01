const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [Days], H [Hours], m [Minutes], s [Seconds]");
  msg.channel.sendCode("asciidoc", `Kei Bot Statistics
• Memory Usage :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Working Time :: ${duration}
• Users        :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Servers      :: ${client.guilds.size.toLocaleString()}
• Channels     :: ${client.channels.size.toLocaleString()}
• Discord.JS   :: v${Discord.version}
• Ping         :: ${client.ping}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'statistics',
  description: 'BOT Show Statistics',
  usage: 'statistics'
};
