const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
	 let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new discord.MessageEmbed().setDescription(`**Hata :** Bu komudu kullanmak için **Yönetici** yetkisine sahip olman gerekiyor.`).setColor("#ff0000"))

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('GREEN')
.setDescription(`Kız rolü başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Nükleon!`)
message.channel.send(sıfırlandı)
db.delete(`kızrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('RED')
.setDescription(`**Kız** rolü belirtmelisiniz!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Nükleon!`)
message.channel.send(ayarlanmadı)
}
db.set(`kızrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setColor('RED')
.setDescription(` Kız rolü başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Nükleon!`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kızrol', 'krol', 'k-rol'],
  permlevel: 0
}
exports.help = {
  name: 'kız-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}