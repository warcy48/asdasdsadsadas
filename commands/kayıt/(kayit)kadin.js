const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
	 let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)
if(message.channel.id !== kanal) return message.channel.send(`Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!`)
if (!kızrol) return message.channel.send(`Sunucuda kız rolü ayarlanmadığı için komut kullanılamaz!`)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`Kız olarak kayıt edeceğin kullanıcıyı belirtmelisin!`)
let isim = args[1]
if (!isim) return message.channel.send(` İsmini belirtmelisin!`)
let yaş = args[2]
if (!yaş) return message.channel.send(` Yaşını belirtmelisin!`)
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor('#00ff0c')
.setDescription(`**__Kayıt Hakkında__** \n\n > <a:bum:813705964259115029>  Kullanıcı : ${member} \n > <a:bum:813705964259115029>  Yetkili : <@!${message.author.id}> \n\n >  Kayıt Detayları :  \`${isim} ' ${yaş}\` \n\n  > <:on:814403376380772352>  Moderatör Rol : <@&${kayıtçı}> \n > <:on:814403376380772352>  Kaydedilen Kanal : <#${kanal}> \n\n Kayıt Sistemini Sunucunuza Kurmak İçin [**Tıklayabilirsiniz.**](https://discord.com/oauth2/authorize?client_id=786943091864240168&scope=bot&permissions=8)`)
.setFooter(` Kayıt Sistemi.`)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}