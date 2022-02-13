const Discord = require('discord.js');
const qdb = require('quick.db');

exports.run = async(client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');


const embed = new Discord.MessageEmbed()
.setTitle('Emoji Yardım Menüsü')
.addField(`**<a:noelpepe:815619957559394325> Hızlı Yükle **`, `Hızlı bir şekilde emoji yüklemek için \`${prefix}hızlı-yükle <emoji/dosya/link> \``)
.addField(`**<:tag:815619952383229982> Emoji Adlandır**`, `Belirtilen emojinin ismini değiştirir \`${prefix}adlandır <emoji> \``)
.addField(`**<:DE_BraveryDessert:815619956245921793> Emoji Al**`, `Belirtilen mesajdaki emojiyi bulur \`${prefix}emoji-al <mesaj-id> \``)
.addField(`**<a:sweatin:815619955877347378> Emoji Ara**`, `botun olduğu sunucularda istenen emojiyi arar \`${prefix}ara <emoji>\``)
message.channel.send(embed)
};
exports.conf = {
  aliases: ['emoji', 'emoji-yardım'],
  permLevel: 0
};
exports.help = {
  name: "emojiler"
}