const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)

 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`**Hata :** Kayıt yapılamadı! <@&${kayıtçı}> rolü sadece kayıt yapabilir!`)
if(message.channel.id !== kanal) return message.channel.send(`**Hata :** Kayıt yapılamadı sadece ayarlanmış <#${kanal}> adlı kanalında kayıt yapılabilir.`)
if (!erkekrol) return message.channel.send(`Erkek rolü ayarlanmamış!
Hemen **\`${prefix}erkek-rol @erkeküyerolü \`** yazarak rol ayarlayabilirsin.`)


let member = message.mentions.members.first();
if (!member) return message.channel.send('**Hata :** Bir kullanıcı etiketlemelisiniz.')
let isim = args[1]
if (!isim) return message.channel.send(`**Hata :** İsim kaydetmediniz. \`(${prefix}erkek @kullanıcı Mehmet 16)\` olarak kaydetmelisin.`)
let yaş = args[2]
if (!yaş) return message.channel.send(`**Hata :** Yaş belirtmediniz. \'(${prefix}erkek @kullanıcı Mehmet 16) olarak kaydetmelisin.'`)
member.setNickname(`${isim} ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('#00ff0c')
.setDescription(`**KAYIT GERÇEKLEŞTİRİLDİ**\n
 Üye : ${member} \n
 Yetkili : <@!${message.author.id}> \n 
 Yeni İsim :  \`${isim} ${yaş}\` \n 
 Kayıt kanalı : <#${kanal}>`)
.setFooter(`Nükleon!`)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: 'dr!erkek @kullanıcı isim yaş'
}