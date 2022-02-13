const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription("Bu komutu kullanmak için; `.gelip-giden sıfırla`\nDikkat! Bu sunucundaki bütün giriş çıkış ayarlarını siler"))

if(args[0] === "sıfırla"){
qdb.delete(`leaveChannel_${message.guild.id}`)
qdb.delete(`joinmsg_${message.guild.id}`)
qdb.delete(`leavemsg_${message.guild.id}`)
qdb.delete(`joinChannel_${message.guild.id}`)

return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle('Başarıyla sıfırlandı!').setDescription("Sunucunuzdaki bütün giriş-çıkış ayarlarını sıfırladım, rahat rahat uyuyabilirsin!")) 
};
};
exports.conf = {
  aliases: ['girişçi', 'giriş'],
  permLevel: 3
};
exports.help = {
  name: "gelip-giden"
}