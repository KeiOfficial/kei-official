const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Commands")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**User Commands**", `k!avatar = BOT Show Your Avatar. \nk!serveravatar = BOT Show Server Avatar \nk!serverinfo = BOT Show Info About Server \nk!userinfo = BOT Show Info About You.`)
  .addField("**Admin Commands**", `k!ban = BOT Ban User Who You Want. \nk!kick  = BOT Kick User Who You Want. \nk!mute = BOT Mute User Who You Want. \nk!clear = BOT Clear Messages How Many You Want.`)
  .addField("**Main Commands**", "k!help = BOT Show All Commands. \nk!info = BOT Show Info About Itself. \nk!ping = BOT Show İts Ping \nk!invite = BOT Davet Linkini Atar. \nk!statistics = BOT Show Statistics.")
  .addField("**Author**", " **Kei#0001** ")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nUsage: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Show all commands.',
  usage: 'help [komut]'
};
