const Discord = require('discord.js');
module.exports.run = async(client, message) => {
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`${client.user.username} Davet`, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`
Beni sunucuna eklemek için [TIKLA](https://discord.com/api/oauth2/authorize?client_id=813415172760666113&permissions=8&scope=bot)
Destek sunucum için [TIKLA](https://discord.gg/kJM3YkJWYQ)
`)
.setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
return message.channel.send(embed)
};
module.exports.conf = {aliases: ["invite"], permLevel: 0};
module.exports.help = {name: "davet"}