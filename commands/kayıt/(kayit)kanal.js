const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
	 let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
    
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new discord.MessageEmbed().setDescription(`**Hata :** Bu komudu kullanmak için **Yönetici** yetkisine sahip olman gerekiyor.`).setColor("#ff0000"))


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setColor(0x36393F)
.setDescription(`Kayıt olunacak kanal başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Nükleon!`)
message.channel.send(sıfırlandı)
db.delete(`kayıtkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('RED')
.setDescription(`Kayıt olunacak kanalı belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Nükleon!`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor(`GREEN`)
.setDescription(`Kayıt kanalı ${kanal} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-kanal'
}