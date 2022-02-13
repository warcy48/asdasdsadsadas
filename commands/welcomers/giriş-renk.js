const Discord = require('discord.js');
const qdb = require('quick.db');


exports.run = async(client, message, args) => {
	msg = message
 let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription(`Bu komutu kullanmak için bir renk belirtmen gerekli\nEğer sıfırlamak istiyorsanız \`.giriş-renk sıfırla\`\nRenkleri html renk kodu (\`#C53232\`) olarak belirtiniz.\nBunun yerine \`BLUE\` & \`GREEN\` & \`RED\` gibi Javascript tanımlı renkleri kullanabilirsin.`))
if(args[0] !== "sıfırla"){
var rol = args.join(` `)
qdb.set(`girisRenk_${message.guild.id}`, rol)
return message.channel.send(new Discord.MessageEmbed().setColor('BLUE')  .setImage('https://cdn.discordapp.com/attachments/733714815822069810/814859562997907497/dfs.png') .setTitle('Başarıyla ayarlandı!').setDescription(`Sunucu giriş renginiz artık; ${db.get(`girisRenk_${message.guild.id}`)} olarak ayarlandı.`))
};
if(args[0] === "sıfırla"){
qdb.delete(`girisRenk_${message.guild.id}`)
return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle('Başarıyla sıfırlandı!').setDescription("Sunucunuzdaki giriş rengi ayarlarını başarı ile sıfırladım!")) 
};
};
exports.conf = {
  aliases: ['giriş-renk', 'girme-renk'],
  permLevel: 2
};
exports.help = {
  name: "renk"
}