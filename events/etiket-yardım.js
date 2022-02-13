const Discord = require("discord.js");
const qdb = require('quick.db')
const ayarlar = require('../config.json')
module.exports = message => {
var client = message.client
var a = qdb.fetch(`prefix_${message.guild.id}`)
if(a){ //PLASMİC - DİSCORD.GG/JAVASCRIPT
  var p = a
}
if(!a){ //PLASMİC - DİSCORD.GG/JAVASCRIPT
  var p = ayarlar.prefix
}
const embedimsi = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true}))
.setTitle(`Merhaba!${client.user.username}`) //PLASMİC - DİSCORD.GG/JAVASCRIPT
.setDescription(`
Bu sunucudaki prefix'im: \`${p}\`
Yardım : \`${p}yardım\`
Prefix'imi değiştirmek için: \`${p}prefix\`
Beni sunucuna eklemek için: \`${p}davet\`

**Geliştiricilerim:**
<@!636573504598442084>
skybow#9999
\`636573504598442084\`
<@!725788906418733096>
Wently#0001
\`725788906418733096\`
`)
.setFooter(`${message.author.username} istedi.`, message.author.displayAvatarURL({dynamic: true}))
if(message.content === `<@!${client.user.id}>`) return message.channel.send(embedimsi)
};

//PLASMİC - DİSCORD.GG/JAVASCRIPT