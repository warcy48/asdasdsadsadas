const Discord = require("discord.js");
const moment = require("moment");
const prefix = '.'

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
};
