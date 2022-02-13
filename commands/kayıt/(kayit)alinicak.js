  
const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
	 let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new discord.MessageEmbed().setDescription(`**Hata :** Bu komudu kullanmak için **Yönetici** yetkisine sahip olman gerekiyor.`).setColor("RED"))

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('GREEN')
.setDescription(`**Kayıtsız** rolü başarıyla sıfırlandı.`)
.setFooter(`Nükleon!`)
message.channel.send(sıfırlandı)
db.delete(`alınacakrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('RED')
.setDescription(`Bir **rol** etiketlemelisin!

\`[ ${prefix}kayıtsız @unregistered/kayıtsız ]\``)
.setFooter(`Nükleon!`)
message.channel.send(ayarlanmadı)
}
db.set(`alınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('RED')
.setDescription(`Kayıtsız rolü artık ${rol} olarak ayarlandı.`)
.setFooter(` Kayıt Sistemi.`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtsız-rol','kayıtsızrol','unregistered-role'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtsız-rol',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: 'alınacak-rol @rol'
}