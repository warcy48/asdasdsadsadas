const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
	 let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Hata :** Bu komudu kullanmak için **Yönetici** yetkisine sahip olman gerekiyor.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setColor('#00ff0c')
.setDescription(`> <a:Yes:793101776651681813> Kayıt İçin Ayarlanan **Moderatör** Rolü Başarıyla Sıfırlandı.`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Favian Kayıt Sistemi.`)
message.channel.send(sıfırlandı)
db.delete(`kayıtçırol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('#fa1a1a')
.setDescription(`Bir **YetkiliRol** ayarlamalısın

**\`.kayıt-yetkili [ @YetkiliRol\`**`)
.setThumbnail(client.user.avatarUR())
.setFooter(`Nükleon!`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setColor('#fa1a1a')
.setDescription(`Kayıt Yetkilisi rolü ${rol} olarak ayarlandı.`)
.setThumbnail(client.user.avatarURL)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçırol', 'kayıtçı','kayıt-yetkili','kayıt-mod','Kayıt-mod','kayıtmod','Kayıtmod','kayıt-moderatör'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-rol',
  description: 'kız rolünü ayarlar',
  usage: 'dr!kız-rol @rol'
}