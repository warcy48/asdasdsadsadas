console.clear();
console.log('[INFO]: Loading...');
const { Client, Collection } = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Client({ //PLASMİC - DİSCORD.GG/JAVASCRIPT
	disableMentions: 'everyone'
});
const moment = require('moment');
const db = require('quick.db');
const fs = require('fs');
require('./util/eventLoader.js')(client);
const ayarlar = require('./config.json');
const Discord = require('discord.js');
  const log = message => {
   console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`); //PLASMİC - DİSCORD.GG/JAVASCRIPT
 };
 client.commands = new Discord.Collection();
 client.aliases = new Discord.Collection();
 fs.readdir("./commands/", (err, files) => { //PLASMİC - DİSCORD.GG/JAVASCRIPT
    if (err) console.error(err);
    files.forEach(f => {
  fs.readdir(`./commands/${f}/`, (err, filess) => {
    if (err) console.error(err);
    log(`${f} Klasöründen ${filess.length} Komut Yüklenecek;`);
    filess.forEach(fs => { //PLASMİC - DİSCORD.GG/JAVASCRIPT
      let props = require(`./commands/${f}/${fs}`);
      log(`${props.help.name} // Yüklendi`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
     });//PLASMİC - DİSCORD.GG/JAVASCRIPT
    });//PLASMİC - DİSCORD.GG/JAVASCRIPT
   });//PLASMİC - DİSCORD.GG/JAVASCRIPT
  });//PLASMİC - DİSCORD.GG/JAVASCRIPT
//PLASMİC - DİSCORD.GG/JAVASCRIPT
//PLASMİC - DİSCORD.GG/JAVASCRIPT
client.elevation = message => {//PLASMİC - DİSCORD.GG/JAVASCRIPT
	if (!message.guild) {//PLASMİC - DİSCORD.GG/JAVASCRIPT
		return;//PLASMİC - DİSCORD.GG/JAVASCRIPT
	}//PLASMİC - DİSCORD.GG/JAVASCRIPT
	let permlvl = 0;
	if (message.member.hasPermission('BAN_MEMBERS')) permlvl = 2;//PLASMİC - DİSCORD.GG/JAVASCRIPT
	if (message.member.hasPermission('ADMINISTRATOR')) permlvl = 3;//PLASMİC - DİSCORD.GG/JAVASCRIPT
	if (message.author.id === ayarlar.sahip || message.author.id === "427053194384769025") permlvl = 4;//PLASMİC - DİSCORD.GG/JAVASCRIPT
	return permlvl;
};
client.on('ready', () => {
	console.log(`[INFO]: Ready on client (${client.user.tag})`);
	client.user.setActivity(',yardım', { type: 'WATCHING' });
  client.user.setStatus("idle")
});
client.login(token)//PLASMİC - DİSCORD.GG/JAVASCRIPT
if (!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
  async getAllGiveaways() {
    return db.get("giveaways");
  }

  async saveGiveaway(messageID, giveawayData) {
    db.push("giveaways", giveawayData);
    return true;
  }

  async editGiveaway(messageID, giveawayData) {
    const giveaways = db.get("giveaways");
    const newGiveawaysArray = giveaways.filter(
      giveaway => giveaway.messageID !== messageID
    );
    newGiveawaysArray.push(giveawayData);
    db.set("giveaways", newGiveawaysArray);
    return true;
  }

  async deleteGiveaway(messageID) {
    const newGiveawaysArray = db
      .get("giveaways")
      .filter(giveaway => giveaway.messageID !== messageID);
    db.set("giveaways", newGiveawaysArray);
    return true;
  }
};
const manager = new GiveawayManagerWithOwnDatabase(client, {
  storage: false,
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#0a99ff",
    reaction: "🎉"
  }
});
client.giveawaysManager = manager;
