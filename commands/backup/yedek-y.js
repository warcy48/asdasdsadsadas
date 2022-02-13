const db = require("quick.db")
const dc = require("discord.js")

exports.run = async (client, message, args) => {
  
	let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`

const embed = new dc.MessageEmbed()
.setTitle('Yedek Yardım Menüsü')
.addField(`**<:download:815621187845357618> Yedek almak **`, `Sunucunu yedeklemek için bu komutu kullanabilirsin; \`${prefix}yedek-al\`\nDikkat, yedek idni kimseyle paylaşma! `)
.addField(`**<a:BanHammer:815619949342490684> Yedek Bilgi **`, `yedeğinin bilgisini almanı sağlar \`${prefix}yedek-bilgi <yedek-id> \` `)
.addField(`**<:liste:815621711436709898> Yedek Liste**`, `Bottaki yedekleri listeler \`${prefix}yedek-liste \` `)
.addField(`**<a:AU_Rainbowghost:815619953058512896> Yedek Sil **`, `Bota kayıtlı olan bir yedeğini siler \`${prefix}yedek-sil <yedek-id> \` `)
.addField(`**<a:tavsancik:815622064311369728> Yedek Yükle**`, `Önceden aldığın bir yedeği bota yükler \`${prefix}yedek-yükle <yedek-id> \` `)
message.channel.send(embed)
}


exports.conf = {
  aliases: ['yedek-yardım', 'yardım-yedek', 'yedek'],
  permLevel: 0
};
exports.help = {
  name: "yedek-yardım"
}