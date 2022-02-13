const moment = require("moment")
const Discord = require("discord.js")
const db = require('quick.db')
exports.run = async(client, message, args) => {  
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send  
  let msg = args.join(" ")
  if (!msg) return message.channel.send(
		 new Discord.MessageEmbed() .setAuthor('Nether').setTitle("Hemen göz atarak başla!")  .setImage('https://cdn.discordapp.com/attachments/733714815822069810/814859562997907497/dfs.png')  .setColor('BLUE') .setDescription(`Değişken listesi aşağıda listelendi!\n
\`{member-tag}\` ➞ Sunucudan çıkan kişiyi etiketler\nMÖrnek; <@636573504598442084>\n
\`{member-username}\` ➞ Sunucudan çıkan kişinin kullanıcı adı\nÖrnek; skybow#9999\n
\`{member-id}\` ➞ Sunucudan çıkan kişinin kullanıcı ID'sini atar\nÖrnek; 636573504598442084\n
\`{member-created:duration}\` ➞ Sunucudan çıkan kişinin oluşturduğu zaman dilimi\nörnek; (1 ay önce kuruldu.)\n
\`{member-created:date}\` ➞ Sunucudan çıkan kişinin hesap oluşturma tarihi YY/GG/AA\nörnek; (2021/1/1)\n
\`{server-name}\` ➞ Sunucu adı\n
\`{server-memberCount}\` ➞ Sunucunun üye sayısı\n\nNot;\nHareketli emoji kullanmak için emojinin başına \\ koyunuz\n\nBot ekli olmadığı sunuculardan emoji ekleyemez.`))
  let member = message.member
  let user = message.author
  let yus = msg
 .split("{member-tag}").join(user.tag)
 .split("{member-username}").join(user.username)
 .split("{member-id}").join(user.id)
 .split("{member-created:duration}").join(moment(user.createdTimestamp).fromNow())
 .split("{member-created:date}").join(moment(user.createdTimestamp).format("YYYY/MM/DD"))
 .split("{server-name}").join(member.guild.name)
 .split("{server-memberCount}").join(member.guild.members.cache.size)
  db.set(`leavemsg_${message.guild.id}`, msg)
  let embed = new Discord.MessageEmbed()
  .setTitle("**Çıkış mesajı ayarlandı**")
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  .setDescription("çıkış mesajını ayarladım, sonra teşekkür edersin :)")
  .addField("Yeni Mesaj", msg)
  .addField("Ön izleme", yus)
  .setTimestamp()
  .setColor("GREEN")
  .setFooter(message.guild.name)
  message.channel.send({ embed: embed })
}

exports.conf = {
  name: 'çıkış mesaj',
  guildonly: false,
  aliases: ['çıkış-mesaj', 'çıkma-mesajı'],
  permlevel: 0
}
exports.help = {
  name: 'çıkış kanal mesaj'
}