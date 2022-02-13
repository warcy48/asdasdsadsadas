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
if(args[0] !== "sıfırla"){
var kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir kanal belirtin!"))
qdb.set(`önerikanalı_${message.guild.id}`, kanal.id)
return message.channel.send(new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`${client.user.username} Öneri Sistemi`, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`Öneri kanalı başarıyla <#${kanal.id}> olarak ayarlandı!`)
.setFooter(`${message.author.username} istedi.`, message.author.displayAvatarURL({dynamic: true}))
.setThumbnail(client.user.avatarURL())
.setTimestamp()
)
};
if(args[0] === "sıfırla"){
if(qdb.has(`önerikanalı_${message.guild.id}`)){
qdb.delete(`önerikanalı_${message.guild.id}`)
return message.channel.send("Öneri kanalı sıfırlandı!")
}
else return message.channel.send("Öneri kanalı zaten ayarlanmamış!")
};
};
exports.conf = {
  aliases: ["öner-kanal"],
  permLevel: 0
};
exports.help = {
  name: "öneri-kanal"
}