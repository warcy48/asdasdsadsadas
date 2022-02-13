 const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	 let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `.`
  let onlycode = args.slice(0).join(' ');

if(!message.member.hasPermission('MANAGE_EMOJIS')) return;
if(!args[0] && !message.attachments.first()) return message.channel.send(new Discord.MessageEmbed()
.addField('Hızlı-yükle Komutu', 'Sunucuya adını belirlemeden, hızlıca emoji yükleyebilirsiniz. Yüklemek için komutu yazdıktan sonra emojiyi dosya olarak atın, emojiyi gönderin veya bağlantısını gönderin.')
.addField('Kullanım', `${prefix}hızlı-yükle bağlantı
-hızlı-yükle :emoji:`)
.addField('Örnekler', `  ${prefix}hızlı-yükle 😀
  ${prefix}hızlı-yükle <link>
  ${prefix}hızlı-yükle (emoji dosyası yükleyin)`)

.setFooter(message.author.username+' tarafından istendi.', message.author.avatarURL({ dynamic: true })));


if(message.attachments.first()) {
  try {

    return message.guild.emojis.create(message.attachments.first().url, message.attachments.first().name.split('.')[0], { reason: `Nükleon Hızlı Emoji `+message.author.tag }).then(emoji => message.channel.send(`Emoji yüklendi: ${message.guild.emojis.cache.get(emoji.id)}`))

  } catch(error) {
    console.log(error);
    return message.channel.send(`Bir hata oluştu. Lütfen; 
    - Sunucuda emoji yüklemek için yer olduğuna, 
    - Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
    - 256kb boyutundan küçük olduğuna,
     emin olun ve tekrar deneyin.`);
  }
} else {
  if(args.slice(0).join(' ').startsWith('https://') && args.slice(0).join(' ').includes('discord')) {
    try {

      return message.guild.emojis.create(args.slice(0).join(' '), args.slice(0).join(' ').split('/')[4].split('.')[0], { reason: `Nukleon emoji yükle: `+message.author.tag }).then(emoji => message.channel.send(`Emoji yüklendi: ${message.guild.emojis.cache.get(emoji.id)}`)).catch(err => message.channel.send(`Bir hata oluştu. Lütfen; 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
emin olun ve tekrar deneyin.`))
    
    } catch(error) {
      console.log(error);
      return message.channel.send(`Bir hata oluştu. Lütfen; 
      - Sunucuda emoji yüklemek için yer olduğuna, 
      - Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
      - 256kb boyutundan küçük olduğuna,
       emin olun ve tekrar deneyin.`);
    };
  } else {
const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];
  try {
    
    let animated = false;
    if(s.startsWith('<a:')) animated = true;
    var url = '';
    var isim = '';

    if(animated === false) {
     url = 'https://cdn.discordapp.com/emojis/'+s.split(':')[2].split('>')[0]+'.png?v=1';
     isim = s.split('<:')[1].split(':')[0];
    } else {
     url = 'https://cdn.discordapp.com/emojis/'+s.split(':')[2].split('>')[0]+'.gif?v=1';
     isim = s.split('<a:')[1].split(':')[0];
    };

    return message.guild.emojis.create(url, isim, { reason: `Sorumlu moderatör: `+message.author.tag }).then(emoji => message.channel.send(`Emoji yüklendi: ${message.guild.emojis.cache.get(emoji.id)}`));

  } catch(error) {
    console.log(error);
    return message.channel.send(`Bir hata oluştu. Lütfen; 
- Sunucuda emoji yüklemek için yer olduğuna, 
- Koyduğunuz dosyanın bir fotoğraf/gif olduğuna, 
- 256kb boyutundan küçük olduğuna,
 emin olun ve tekrar deneyin.`);
  
};
  };
};




}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hızlıyükle', 'hy', 'hızlı-yükle'],
  permLevel: 2
};
 
exports.help = {
  name: 'hızlı',
  namee: 'fast'
};
