const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed, Client, Message } = require("discord.js");
const validUrl = require("valid-url");

module.exports = {
  name: "sil",
  description: "Removes monitor from your project.",
  aliases: ["dehost"],
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {string[]} args
   * @returns {Promise<any>}
   */
  run: async (client, message, args) => {
    const url = args[0];

    if (!url) {
      const urlsFilter = {
        authorID: message.author.id,
      };

      const all = await UrlsConfig.find(urlsFilter);

      if (all.length === 0) {
        return message.reply(
          `*You don't have any projects Added.*\nAdd one by using: ${default_prefix}add [project Url]`
        );
      }

      let embed = new MessageEmbed()
        .setColor("#ffffff")
        .setTitle("Kaldırmak istediğiniz projeyi seçin.");

      let length = all.length;
      const projects = sliceIntoChunks(all, 5);
      let projectCount = 0;
      let count = 0;
      const countConfig = new Map();
      let content = [];

      let currentPage = 0;

      projects[currentPage].forEach((doc) => {
        projectCount++;
        content.push(`**${projectCount}**. \`${doc.projectURL}\``);
        countConfig.set(projectCount, doc.projectURL);
      });

      embed.setDescription(content.join("\n"));

      const reactions = [
        { emoji: "◀", action: "back" },
        { emoji: "1️⃣", number: 1 },
        { emoji: "2️⃣", number: 2 },
        { emoji: "3️⃣", number: 3 },
        { emoji: "4️⃣", number: 4 },
        { emoji: "5️⃣", number: 5 },
        { emoji: "▶", action: "next" },
      ];

      let errors = false;
      const msg = await message.author.send(embed).catch((err) => {
        errors = true;
        if (err.message === "Cannot send messages to this user")
          message.channel.send(
            `Hata: \`Size mesaj gönderilemiyor. lütfen dm'nizi açın\`.`
          );
      });

      if (errors) return;

      message.channel.send("📥 DM'nizi kontrol edin.");

      reactions.forEach(async (rec) => await msg.react(rec.emoji));

      const filter = (reaction, user) =>
        reactions.find((r) => r.emoji === reaction.emoji.name) &&
        user.id === message.author.id;

      const collector = msg.createReactionCollector(filter, { time: 150000 });

      collector.on("collect", async (reaction) => {
        switch (reaction.emoji.name) {
          case "1️⃣": {
            await UrlsConfig.findOneAndDelete({
              projectURL: countConfig.get(1),
            });
            let embed = new MessageEmbed()
              .setTitle("\<:880928527107641445:898268044437094471>  Başarıyla Silindi!")
              .setDescription("Beni Kullandığın İçin Teşekkürler")
              .setColor("#FFFFFF")
              .setTimestamp();

            await message.author.send(embed);
            collector.stop();
            break;
          }

          case "2️⃣": {
            await UrlsConfig.findOneAndDelete({
              projectURL: countConfig.get(2),
            });
            let embed = new MessageEmbed()
              .setTitle("\<:880928527107641445:898268044437094471>  Başarıyla Silindi!")
              .setDescription("Beni Kullandığın İçin Teşekkürler")
              .setColor("#FFFFFF")
              .setTimestamp();

            await message.author.send(embed);
            collector.stop();
            break;
          }

          case "3️⃣": {
            await UrlsConfig.findOneAndDelete({
              projectURL: countConfig.get(3),
            });
            let embed = new MessageEmbed()
              .setTitle("\<:880928527107641445:898268044437094471>  Başarıyla Silindi!")
              .setDescription("Beni Kullandığın İçin Teşekkürler")
              .setColor("#FFFFFF")
              .setTimestamp();

            await message.author.send(embed);
            collector.stop();
            break;
          }

          case "4️⃣": {
            await UrlsConfig.findOneAndDelete({
              projectURL: countConfig.get(4),
            });
            let embed = new MessageEmbed()
              .setTitle("\<:880928527107641445:898268044437094471>  Başarıyla Silindi!")
              .setDescription("Beni Kullandığın İçin Teşekkürler")
              .setColor("#FFFFFF")
              .setTimestamp();

            await message.author.send(embed);
            collector.stop();
            break;
          }

          case "5️⃣": {
            await UrlsConfig.findOneAndDelete({
              projectURL: countConfig.get(5),
            });
            let embed = new MessageEmbed()
              .setTitle("\<:880928527107641445:898268044437094471>  Başarıyla Silindi!")
              .setDescription("Beni Kullandığın İçin Teşekkürler")
              .setColor("#FFFFFF")
              .setTimestamp();

            await message.author.send(embed);
            collector.stop();
            break;
          }

          case "◀": {
            if (currentPage !== 0) {
              currentPage = currentPage - 1;
              if (!projects[currentPage]) break;
              projectCount = 0;
              content = [];
              countConfig.clear();
              projects[currentPage].forEach((doc) => {
                projectCount++;
                content.push(`**${projectCount}**. \`${doc.projectURL}\``);
                countConfig.set(projectCount, doc.projectURL);
              });

              embed.setDescription(content.join("\n"));
              await msg.edit(embed);
              break;
            }
            break;
          }

          case "▶": {
            if (currentPage !== all.length) {
              currentPage = currentPage + 1;
              if (!projects[currentPage]) break;
              projectCount = 0;
              content = [];
              countConfig.clear();
              projects[currentPage].forEach((doc) => {
                projectCount++;
                content.push(`**${projectCount}**. \`${doc.projectURL}\``);
                countConfig.set(projectCount, doc.projectURL);
              });

              embed.setDescription(content.join("\n"));
              await msg.edit(embed);
              break;
            }
            break;
          }

          default:
            break;
        }
      });
      return;
    }

    if (!validUrl.isUri(url)) {
      return message.channel.send("Lütfen geçerli bir url sağlayın!");
    }

    // LOADING
    let waitEmbed = new MessageEmbed().setDescription(
      "\<:settings:896447499575885854>  Lütfen Bekle..."
    );
    var messageAlert = await message.channel.send(message.author, waitEmbed);

    // CHECKS IF DATA EXSISTS
    var checkIfExsists = await UrlsConfig.findOne({
      projectURL: url,
      authorID: message.author.id,
    });

    // DATA HANDLING
    if (checkIfExsists === null) {
      // PROJECT IS NOT REGISTERED
      let embed = new MessageEmbed()
        .setTitle("\<:settings:896447499575885854> > Proje Kayıtlı Değil!")
        .setDescription("Şunu kullanarak bir tane ekleyin: `m+ <url>` ekleyin")
        .setColor("#FFFFFF")
        .setTimestamp();

      await messageAlert.edit(embed);
      return message.delete();
    } else {
      // PROJECT IS REGISTERED

      // REMOVES THE DATA FROM DATABASE
      var storeIt = await UrlsConfig.findOneAndDelete({
        projectURL: url,
      }).then(async () => {
        // NOTIFIES WITH AN EMBED

        let new_pros = await client.projects.filter((p) => p !== url);
        client.projects = new_pros;

        let embed = new MessageEmbed()
         .setTitle("\<:880928527107641445:898268044437094471>  Başarıyla Silindi!")
              .setDescription("Beni Kullandığın İçin Teşekkürler")
              .setColor("#FFFFFF")
              .setTimestamp();

        await messageAlert.edit(embed);
        return message.delete();
      });
    }
  },
};

/**
 *
 * @param {any[]} arr
 * @param {number} chunkSize
 * @returns {any[]}
 */
function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}
