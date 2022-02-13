const Discord = require('discord.js');
const qdb = require('quick.db');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
const embed = new Discord.MessageEmbed()
.setTitle('Kayıt Yardım Menüsü')
.addField(`**<:DE_AuditRoleAdd:815619954660999228> Kayıtsız rol**`, `\nErkek Kayıt yapılınca kişiye verilecek rol, \`${prefix}erkek-rol <@etiket>\`\nKadın Kayıt yapılınca kişiye verilecek rol, \`${prefix}kadın-rol <@etiket>\``)
.addField(`**<a:BanHammer:815619949342490684> Verecek Yetkili **`, `Kayıt yapacak yetkili rolü \`${prefix}kayıt-yetkili @etiket / <id> \``)
.addField(`**<a:sweatin:815619955877347378> Kayıt Alınan Rol **`, `Kayıt yapılınca kişiden alınacak rol \`${prefix}kayıtsız-rol @unregistered/kayıtsız \``)
.addField(`**<:DE_BraveryDessert:815619956245921793> Kayıt etme komutları **`, `Erkek kayıt komutu \`${prefix}erkek <@etiket> \`\nKadın kayıt komutu \`${prefix}kadın <@etiket> \``)
.addField(`**<a:686198181876203532:815619951640444948> NOT!**`, `birisi gelince karşılamak için, gelen-giden bölümüne göz atabilirsin.`)
.setFooter('.kayıt-kanal: kayıt kanalı.')

message.channel.send(embed)
};
exports.conf = {
  aliases: ['kayıt', 'kayıt-sistemi', 'kayıt-yardım'],
  permLevel: 0
};
exports.help = {
  name: "kayıt"
}