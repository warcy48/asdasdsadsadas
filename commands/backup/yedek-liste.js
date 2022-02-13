const db = require("quick.db")
const dc = require("discord.js")

exports.run = async (client, message, args) => {
  let yedekler = await db.get(`y_${message.author.id}`)
  let sj;
  if(!yedekler) {
    sj = "Yedeğin Bulunmamakta"
    } else {
      sj = yedekler.map(x => `**${x.id}**\n${x.adı} (\`${x.tarih}\`)\n`)
      }
  let embed = new dc.MessageEmbed()
  .setTitle("📄 Yedek Listesi")
  .setTimestamp()
  .setThumbnail(message.author.avatarURL())
  .setDescription('Bot içerisindeki toplam yedek sayısı 100\'e ulaştığı için bu listeyi açamıyorum...')
  message.channel.send(embed)
  }

	exports.conf = {
  enabled: true,
  aliases: ['yedek-liste', 'yedek-listesi'],
  permLevel: 3
};

exports.help = {
  name: 'yedek liste'
};