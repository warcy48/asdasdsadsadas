const Discord = require("discord.js");
const ayarlar = require('../config.json');
const db = require('quick.db')
let talkedRecently = new Set();



module.exports = async(message) => {
if(db.has(`prefix_${message.guild.id}`)){
  var prefix = db.fetch(`prefix_${message.guild.id}`)
}
if(!db.has(`prefix_${message.guild.id}`)){ //hata burda deil mk burda vardı da knk ona baktım değiştirdim prefix tanımlamasını küçük bir arıza çıkmıştı
  var prefix = ayarlar.prefix
}

 if (message.author.bot) return;
   let yazılar = db.fetch(`${message.guild.id}.otocevap.yazılar`)
   let cevaplar = db.fetch(`${message.guild.id}.otocevap.cevaplar`)
  var py = ""
  let sunucuadı = message.guild.name
  let üyesayı = message.guild.members.cache.size
      for (var i = 0; i < (db.fetch(`${message.guild.id}.otocevap.yazılar`) ? db.fetch(`${message.guild.id}.otocevap.yazılar`).length : 0); i++) {
    if (message.content.toLowerCase() == yazılar[i].toLowerCase()) {
        py += `${cevaplar[i].replace("{sunucuadı}", `${sunucuadı}`).replace("{üyesayı}", `${üyesayı}`)}`
        message.channel.send(`${py}`)
    }}

  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
	message.channel.send(':x:  | bu komutu kullanacak yetkin bulunmuyor')
				return
      }
    }
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
	message.channel.send(':x:  | bu komutu kullanacak yetkin bulunmuyor')
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
	message.channel.send(':x:  | bu komutu kullanacak yetkin bulunmuyor')
				return
				
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
	message.channel.send(':x:  | bu komutu kullanacak yetkin bulunmuyor')
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
	message.channel.send(':x:  | bu komutu kullanacak yetkin bulunmuyor')
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
	message.channel.send(':x:  | bu komutu kullanacak yetkin bulunmuyor')
				return
			}
		}
    if (perms < cmd.conf.permLevel) return;
		cmd.run(client, message, params, perms).catch(err => client.channels.cache.get('815851845129601035').send(err.toString()));
  }

}
