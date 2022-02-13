const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
message.delete();
var kanal = qdb.fetch(`önerikanalı_${message.guild.id}`)
if(!kanal) return message.channel.send(
  new Discord.MessageEmbed()
  .setColor('BLUE')
  .setAuthor(`${client.user.username} Öneri Sistemi`, client.user.displayAvatarURL({dynamic: true}))
  .setDescription("Öneri kanalı ayarlanmamış! \n \n Ayarlamak için `öneri-kanal #kanal`")
  .setFooter(`${message.author.username} istedi`, message.author.displayAvatarURL({dynamic: true}))
)
var text = args.slice(0).join(' ')
if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription("Bir öneri belirtin."))
const embedimsi = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`${client.user.username} Öneri Sistemi`, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`**Bir öneri var!**\n ${text}`)
.setFooter(`${message.author.username} önerdi.`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
message.guild.channels.cache.get(kanal).send(embedimsi)
.then(function (message) {
          message.react("<a:thumbs_up:815623557663948800>")
          message.react("<a:thumps_down:815623651092463617>")
    			});
};
exports.conf = {
  aliases: ["öner"],
  permLevel: 0
};
exports.help = {
  name: "öneri"
}