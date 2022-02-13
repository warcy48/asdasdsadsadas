const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')

var os 	= require('os-utils');




exports.run = async(client, message, args) => {
	os.cpuUsage(function(v){
	const cpus = v 

const duration = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")
const embed = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`${client.user.username} İstatistikleri`, client.user.displayAvatarURL({dynamic: true}))
.addField(":satellite: Gecikme", `**${client.ws.ping}** ms`, true)
.addField(":alarm_clock: Çalışma Süresi", duration, true)
.addField(":people_hugging: Kullanıcılar", client.users.cache.size, true)
.addField(":control_knobs: Kanallar", client.channels.cache.size, true)
.addField(":desktop: Sunucular", client.guilds.cache.size, true)
.addField(":comet: `discord.js` sürümü", Discord.version, true)
.addField(':cyclone: Bellek kullanımı', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'mb', true) //sa//as//dabbe izliyom
.addField(":inbox_tray: `Toplam Cpu Kullanımı", `%${cpus}`, true)
.addField(":takeout_box:  `Kullanılmayan Ram Miktarı", `${os.freemem()} mb`, true)
.setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
return message.channel.send(embed)
});
};
exports.conf = {
aliases: ['i', 'istatistik', 'bot-bilgi'],
permLevel: 0
};
exports.help = {
name: "botbilgi"
}