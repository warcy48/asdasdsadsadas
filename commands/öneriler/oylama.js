const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(
  new Discord.MessageEmbed()
  .setColor('BLACK')
  .setAuthor(`${client.user.username} Öneri Sistemi`, client.user.displayAvatarURL({dynamic: true}))
  .setDescription(`Hey ${message.author.username}! Bu komutu kullanabilmek için \`\`ADMINISTRATOR\`\` yetkisine sahip olman lazım!`)
  .setFooter(`${message.author.username} istedi.`, message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp()
) 
var kanal = qdb.fetch(`oylamakanalı_${message.guild.id}`)
var kanalcık = message.guild.channels.cache.get(kanal)
if(!kanalcık) return message.channel.send(
    new Discord.MessageEmbed()
  .setColor('BLUE')
  .setAuthor(`${client.user.username} Oylama Sistemi`, client.user.displayAvatarURL({dynamic: true}))
  .setDescription("Oylama kanalı ayarlanmamış! \n \n Ayarlamak için `oylama-kanal #kanal`")
  .setFooter(`${message.author.username} istedi`, message.author.displayAvatarURL({dynamic: true}))
)
var text = args.slice(0).join(' ')
if(!text) return message.channel.send("Neyi oylayacağımı belirtmelisin!")
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`${client.user.username} Oylama Sistemi`, client.user.displayAvatarURL({dynamic: true}))
.setDescription(text)
.setFooter(`${message.author.username} istedi`, message.author.displayAvatarURL({dynamic: true}))
message.channel.send(`${kanalcık} kanalında oyladım!`)
message.guild.channels.cache.get(kanal).send("**Bir oylama var!**")
message.guild.channels.cache.get(kanal).send(embed).then(function (message) {
          message.react("<a:thumbs_up:815623557663948800>")
          message.react("<a:thumps_down:815623651092463617>")
    			});

};
exports.conf = {
  aliases: ["oylama"],
  permLevel: 0
};
exports.help = {
  name: "oyla"
}