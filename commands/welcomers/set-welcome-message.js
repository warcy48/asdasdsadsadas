const moment = require("moment")
const Discord = require("discord.js")
const db = require('quick.db')
exports.run = async(client, message, args) => {  
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**Hata :** Bu komudu kullanmak için **Sunucuyu Yönet** yetkisine sahip olman gerekiyor.")
  let msg = args.join(" ")
  if (!msg) return message.channel.send(		
		 new Discord.MessageEmbed() .setTitle("Hemen göz atarak başla!")  .setImage('https://cdn.discordapp.com/attachments/733714815822069810/814859562997907497/dfs.png') .setAuthor('Nether') .setColor('BLUE') .setDescription(`Değişken listesi aşağıda listelendi!\n
\`{member-tag}\` ➞ Sunucuya giren kişiyi etiketler\nÖrnek; <@636573504598442084>\n
\`{member-username}\` ➞ Sunucuya giren kişinin kullanıcı adı\nÖrnek; skybow#9999\n
\`{member-id}\` ➞ Sunucuya giriş yapan kişinin kullanıcı ID'sini atar\nÖrnek; 636573504598442084\n
\`{member-created:duration}\` ➞ Sunucuya giren kullanıcının hesabının yaşı\nörnek; (1 ay önce kuruldu.)\n
\`{member-created:date}\` ➞ kişinin hesap oluşturma tarihi\nörnek; (2021/1/1)\n
\`{server-name}\` ➞ Sunucu adı\n
\`{server-memberCount}\` ➞ Sunucunun üye sayısı\n\nNot;\nHareketli emoji kullanmak için emojinin başına \\ koyunuz\n\nBot ekli olmadığı sunuculardan emoji ekleyemez.`))
  let member = message.member
  let user = message.author
  let yus = msg
 .split("{member-mention}").join("<@" + user.id + ">")
 .split("{member-tag}").join(user.tag)
 .split("{member-username}").join(user.username)
 .split("{member-id}").join(user.id)
 .split("{member-created:duration}").join(moment(user.createdTimestamp).fromNow())
 .split("{member-created:date}").join(moment(user.createdTimestamp).format("YYYY/MM/DD"))
 .split("{server-name}").join(member.guild.name)
 .split("{server-memberCount}").join(member.guild.members.cache.size)
  db.set(`joinmsg_${message.guild.id}`, msg)
  let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
  .setTitle("giriş mesajı değiştirildi")
  .addField("Giriş Mesajı", msg)
  .addField("Ön izleme", yus)
  .setTimestamp()
  .setColor("GREEN")
  .setFooter(message.guild.name)
  message.channel.send({ embed: embed })
}

exports.conf = {
  name: 'giriş-mesaj',
  guildonly: false,
  aliases: ['giriş-mesaj', 'girme-mesajı'],
  permlevel: 0
}
exports.help = {
  name: 'giriş-kanal-mesajı'
}