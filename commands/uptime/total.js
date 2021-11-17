const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "toplam",
  description: "Shows all projects",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    UrlsConfig.countDocuments(
      { authorID: message.author.id },
      async function (err, total) {
        const embed = new MessageEmbed()
          .setTitle(`Uptime İstatistikleri`)
          .setColor("#FFFFFF")
          .addField("Toplam Proje: ", client.projectsSize, true)
          .addField("Projeleriniz: ", total, true);
        return message.channel.send(embed);
      }
    );
  },
};
