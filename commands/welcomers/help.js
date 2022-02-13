const Discord = require('discord.js');
const qdb = require('quick.db');

exports.run = async(client, message, args) => {
	msg = message

  let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');
const embed = new Discord.MessageEmbed()
.setTitle('Giriş-Çıkış Menüsü')
.addField(`**<:DE_AuditRoleAdd:815619954660999228> Otorol**`, `Sunucunuzda otorol ayarlamak için \`${prefix}otorol @rol\` kullanabilirsiniz`)
.addField(`**<a:AU_Rainbowghost:815619953058512896> Embed Renkler**`, `Çıkış embed rengini değiştirmek için;  \`${prefix}çıkış-renk #renkkodu\`\ngiriş embed rengini değiştirmek için \`${prefix}giriş-renk #renkkodu\` `)
.addField(`**<:DE_IconFriends:815619953662099466> Giriş/Çıkış Kanalları **`, `Çıkış kanalını ayarlamak için \`.çıkış-kanal #kanal\`\nGiriş kanalını ayarlamak için \`${prefix}giriş-kanal #kanal\``)
.addField(`**<:kopke_members:815619957315338260> Giriş/Çıkış Mesajları**`, `Giriş mesajını ayarlamak için \`${prefix}giriş-mesaj <mesaj>\`\nÇıkış mesajını ayarlamak için \`${prefix}çıkış-mesaj <mesaj>\` `)
.addField(`**<:confusedProblem:815619950130495518> Ayarları Sıfırla **`, `Giriş/Çıkış ayarlarını sıfırlamak istiyorsan \`${prefix}gelip-giden sıfırla\` `)


message.channel.send(embed)
};
exports.conf = {
  aliases: ['welcomer', 'giriş-çıkış'],
  permLevel: 0
};
exports.help = {
  name: "gelen-giden"
}