const Discord = require("discord.js");
const ownerid = ["854376761725550634"]


module.exports = {
  
        name:"serverdenayrıl",
        aliases: ["lvs"],
        category: "owner",
        accessableby: ""
    ,
 
  run: async (client, message, args) => {
    if (message.author.id == ownerid) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel
          .send("İzinlerim Yok")
          .then(msg => msg.delete({ timeout: 5000 }));
		
		    const guildId = args[0];
 
    if (!guildId) {
      return message.channel.send("Lütfen bir kimlik sağlayın");
    }
 
    const guild = client.guilds.cache.find((g) => g.id === guildId);
 
    if (!guild) {
      return message.channel.send("O Sunucu bulunamadı");
    }
 
    try {
      await guild.leave();
      message.channel.send(` Sunucudan başarıyla ayrıldı
: **${guild.name}**`);
    } catch (e) {
      console.error(e);
      return message.channel.send("O Sunucudan ayrılırken bir hata oluştu");
    }
    }
  }
};