const Discord = require('discord.js');
const qdb = require('quick.db');


exports.run = async(client, message, args) => {
 	msg = message
let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription(`Bu komutu kullanmak için bir rol etiketlemen gerekli\nEğer sıfırlamak istiyorsanız \`${prefix}otorol sıfırla\``))
if(args[0] !== "sıfırla"){
var rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
qdb.set(`otorolrolu_${message.guild.id}`, rol.id)
return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle('Başarıyla ayarlandı!').setDescription(`Otorol sunucunuz için; ${otorolrolu_$} olarak ayarlandı.`))
};
if(args[0] === "sıfırla"){
qdb.delete(`otorolrolu_${message.guild.id}`)
 message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle('Başarıyla sıfırlandı!').setDescription("Sunucunuzdaki oto rol ayarlarını başarı ile sıfırladım!")) 
};
};
exports.conf = {
  aliases: ['autorol', 'giriş-rol'],
  permLevel: 2
};
exports.help = {
  name: "otorol"
}