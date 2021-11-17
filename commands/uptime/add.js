const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const validUrl = require("valid-url");

module.exports = {
  name: "ekle",
  description: "Adds monitor to your project.",
  aliases: ["host"],
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    var url = args[0];

    // CHECKS THE URL IF PROVIDED OR WRONG
    if (!url) return message.reply("Lütfen bir proje URL'si sağlayın!");
    if (!validUrl.isUri(url)) {
      return message.channel.send("Lütfen bir proje URL'si sağlayın!");
    }

    // LOADING
    let waitEmbed = new MessageEmbed().setDescription(
      "<:settings:896447499575885854>  Lütfen Bekleyin...."
    );
    var messageAlert = await message.channel.send(message.author, waitEmbed);

    // CHECKS IF THE PROJECT IS ALREADY REGISTERED
    var checkIfExsists = await UrlsConfig.findOne({
      projectURL: url,
    });

    if (checkIfExsists === null) {
      // RUNS WHEN PROJECT IS NOT REGISTERED
      await UrlsConfig.create({
        authorID: message.author.id,
        projectURL: url,
        pinged: 0,
      }).then(async () => {
        // RUNS AFTER THE PROJECT STORES THE DATA IN DATABASE
        client.projects.push(url);
        try {
          // TRIES TO PING PROJECT
          await fetch(url);
        } catch (e) {
          // ERRORS HANDLING
          await UrlsConfig.findOneAndUpdate(
            { projectURL: url },
            { error: true, errorText: e.message },
            { new: true }
          );
          message.reply("Hata!");
        }

        // NOTIFIES WITH AN EMBED THAT PROJECT IS SUCCESSFULLY REGISTERED
        let embed = new MessageEmbed()
          .setTitle("\<:880928527107641445:898268044437094471>  Başarıyla Eklendi!")
          .setDescription("Beni Kullandığın İçin Teşekkürler :)")
          .setColor("#ffffff")
          .setTimestamp();
        await messageAlert.edit(embed);
        return message.delete();
      });
    } else {
      // RUNS WHEN THE PROJECT IS ALREADY IN DATABASE
      let embed = new MessageEmbed()
        .setTitle(
          "\<:880928559668023327:898279214489423883>  Proje zaten Kayıtlı!"
        )
        .setDescription(
          "Kaydetmeye çalıştığınız proje zaten Veritabanında"
        )
        .setColor("#FFFFFF")
        .setTimestamp();

      await messageAlert.edit(embed);
      return message.delete();
    }
  },
};
