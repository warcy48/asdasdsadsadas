const Discord = require("discord.js")
const db = require('quick.db')
exports.run = async(client, message, args) => {  
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**Hata :** Bu komudu kullanmak için **Sunucuyu Yönet** yetkisine sahip olman gerekiyor.")
  let channel = message.mentions.channels.first()
  if (!channel) return message.channel.send("**Hata :** Bir kanal etiketlemen gerekiyor.")
  db.set(`joinChannel_${message.guild.id}`, channel.id)
  let embed = new Discord.MessageEmbed()
  .setTitle("Başarıyla ayarlandı!")
  .setDescription("Giriş kanalı ayarlandı!")
  .setTimestamp()
  .setThumbnail(message.guild.iconURL())
  .setColor("GREEN")
  .addField("Kanal", channel.toString())
  message.channel.send({embed:embed})
}

exports.conf = {
  name: false,
  guildonly: false,
  aliases: ['giriş-kanal', 'girme-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'giriş kanal'
}