const Discord = require('discord.js');
const qdb = require('quick.db'); //PLASMİC - DİSCORD.GG/JAVASCRIPT

exports.run = async(client, message, args) => {
	msg = message
	 let p = args[0]; //PLASMİC - DİSCORD.GG/JAVASCRIPT
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription(`Bu komutu kullanmak için bir renk belirtmen gerekli\nEğer sıfırlamak istiyorsanız \`${prefix}çıkış-renk sıfırla\` Renkleri html renk kodu (\`#C53232\`) olarak belirtiniz.\nBunun yerine \`BLUE\` & \`GREEN\` & \`RED\` gibi Javascript tanımlı renkleri kullanabilirsin.`))
if(args[0] !== "sıfırla"){
var rol = args.join(` `) //PLASMİC - DİSCORD.GG/JAVASCRIPT
qdb.set(`cikisRenk_${message.guild.id}`, rol)
return message.channel.send(new Discord.MessageEmbed().setColor('BLUE')  .setImage('https://cdn.discordapp.com/attachments/733714815822069810/814859562997907497/dfs.png') .setTitle('Başarıyla ayarlandı!').setDescription(`Sunucu çıkış renginiz artık; ${qdb.get(`cikisRenk${message.guild.id}`)} olarak ayarlandı.`))
};
if(args[0] === "sıfırla"){
qdb.delete(`cikisRenk_${message.guild.id}`)
return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle('Başarıyla sıfırlandı!').setDescription("Sunucunuzdaki çıkış rengi ayarlarını başarı ile sıfırladım!")) 
};
};
exports.conf = {
  aliases: ['çıkış-renk', 'gidenler-renk'],
  permLevel: 2
};
exports.help = {
  name: "gitme-renk"
}