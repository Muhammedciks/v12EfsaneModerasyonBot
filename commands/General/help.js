const simplydjs = require('simply-djs');
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js")
const { button, MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
const disbut = require("discord-buttons");
 
    let embed1 = new Discord.MessageEmbed()
      .setTitle('** \<:Gvenlik:898267958890082304>   Yardım Menüsü \<:Gvenlik:898267958890082304> **')
      .setDescription('\<:Gvenlik:898267958890082304>  ** *MuhammedinKs | Moderation*, her bot kullanıcısının sevdiği minimalist hissi ve görünümü korurken biletler, tepki rolleri, uptime ve düğmeler gibi birçok özelliğe sahip tek ücretsiz hepsi bir arada botlardan biridir..**')
      .setColor("#ffffff")
      .addField("\<:Gvenlik:898267958890082304> Komut Kategorileri",
        "**<:892884521656139797:896437541878788127>   Moderasyon\n <:892884521479987210:896436407122395146>  Genel\n\<:hediye:896436482083016776>\n   Çekiliş\n<:892884521865863208:896437131591966740>Bilgi\n<:892884521865863208:896437131591966740>  Fotoğraf\n<:892884521572237323:896436912947101706>   Müzik\n <:892884521551282186:896435884369522768> Eğlence\n<:892884521849073695:896437064495673394>  Uptime**")
      .setThumbnail("https://cdn.discordapp.com/attachments/896415813433700412/898243023555657738/mlogo.png")
      .setImage('')
      .setFooter('Bot Made By MuhammedinKs | Prefix: m+')
     
    let embed2 = new Discord.MessageEmbed()
      .setTitle('** \<:Gvenlik:898267958890082304>  Yardım Menüsü \<:Gvenlik:898267958890082304> **')
      .setDescription('\<:Gvenlik:898267958890082304> ** *MuhammedinKs | Moderation*, her bot kullanıcısının sevdiği minimalist hissi ve görünümü korurken biletler, tepki rolleri, uptime ve düğmeler gibi birçok özelliğe sahip tek ücretsiz hepsi bir arada botlardan biridir..**')
      .setColor("#ffffff")
      .addField(
        "<:892884521656139797:896437541878788127>  Moderasyon",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `ticket` `lockchannel` `purge` `slowmode` `mute` `unmute` `purge-channel`")
      .setThumbnail("https://cdn.discordapp.com/attachments/896415813433700412/898243023555657738/mlogo.png")
      .setImage('')
      .setFooter('Bot Made By MuhammedinKs | Prefix: m+')
    let embed3 = new Discord.MessageEmbed()
      .setTitle('** \<:Gvenlik:898267958890082304>  Yardım Menüsü \<:Gvenlik:898267958890082304> **')
      .setDescription('\<:Gvenlik:898267958890082304> ** *MuhammedinKs | Moderation*, her bot kullanıcısının sevdiği minimalist hissi ve görünümü korurken biletler, tepki rolleri, uptime ve düğmeler gibi birçok özelliğe sahip tek ücretsiz hepsi bir arada botlardan biridir..**')
      .setColor("#ffffff")
      .addField(
        "<:892884521479987210:896436407122395146> Genel",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard` `snipe` `embed`")
      .setThumbnail("https://cdn.discordapp.com/attachments/896415813433700412/898243023555657738/mlogo.png")
      .setImage('')
      .setFooter('Bot Made By MuhammedinKs | Prefix: m+')
    let embed4 = new Discord.MessageEmbed()
      .setTitle('** \<:Gvenlik:898267958890082304>  Yardım Menüsü \<:Gvenlik:898267958890082304> **')
      .setDescription('\<:Gvenlik:898267958890082304>>  ** *MuhammedinKs | Moderation*, her bot kullanıcısının sevdiği minimalist hissi ve görünümü korurken biletler, tepki rolleri, uptime ve düğmeler gibi birçok özelliğe sahip tek ücretsiz hepsi bir arada botlardan biridir..**')
      .setColor("#ffffff")
      .addField(
        "\<:hediye:896436482083016776>  Çekiliş",
        "`gstart` `gend` `greroll`")
      .setThumbnail("https://cdn.discordapp.com/attachments/896415813433700412/898243023555657738/mlogo.png")
      .setImage('')
      .setFooter('Bot Made By MuhammedinKs | Prefix: m+')
    let embed5 = new Discord.MessageEmbed()
      .setTitle('** \<:Gvenlik:898267958890082304> Yardım Menüsü \<:Gvenlik:898267958890082304> **')
      .setDescription('\<:Gvenlik:898267958890082304>  ** *MuhammedinKs | Moderation*, her bot kullanıcısının sevdiği minimalist hissi ve görünümü korurken biletler, tepki rolleri, uptime ve düğmeler gibi birçok özelliğe sahip tek ücretsiz hepsi bir arada botlardan biridir..**')
      .setColor("#ffffff")
      .addField(
        "<:892884521635180625:896436015227613184>  Bilgi",
        "`avatar` `bug-report` `feedback` `developer` `help` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo`")
      .setThumbnail("https://cdn.discordapp.com/attachments/896415813433700412/898243023555657738/mlogo.png")
      .setImage('')
      .setFooter('Bot Made By MuhammedinKs | Prefix: m+')
    let embed6 = new Discord.MessageEmbed()
      .setTitle('** \<:Gvenlik:898267958890082304> Yardım Menüsü \<:Gvenlik:898267958890082304> **')
      .setDescription('\<:Gvenlik:898267958890082304>  ** *MuhammedinKs | Moderation*, her bot kullanıcısının sevdiği minimalist hissi ve görünümü korurken biletler, tepki rolleri, uptime ve düğmeler gibi birçok özelliğe sahip tek ücretsiz hepsi bir arada botlardan biridir..**')
      .setColor("#ffffff")
      .addField(
        "<:892884521865863208:896437131591966740>  Fotoğraf",
        "`tweet` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")
      .setThumbnail("https://cdn.discordapp.com/attachments/896415813433700412/898243023555657738/mlogo.png")
      .setImage('')
      .setFooter('Bot Made By MuhammedinKs | Prefix: m+')
     let embed7 = new Discord
     .MessageEmbed()
       .setTitle('** \<:Gvenlik:898267958890082304>  Yardım Menüsü \<:Gvenlik:898267958890082304> **')
      .setDescription('\<:Gvenlik:898267958890082304>  ** *MuhammedinKs | Moderation*, her bot kullanıcısının sevdiği minimalist hissi ve görünümü korurken biletler, tepki rolleri, uptime ve düğmeler gibi birçok özelliğe sahip tek ücretsiz hepsi bir arada botlardan biridir..**')
      .setColor("#ffffff")
      .addField(
        "<:892884521551282186:896435884369522768>  Eğlence",
        "`fight` `rps` `coinflip` `meme` `reverse` `hangman` `trivia` `fact` `Shuffle-guess`")
      .setThumbnail("https://cdn.discordapp.com/attachments/896415813433700412/898243023555657738/mlogo.png")
      .setImage('')
      .setFooter('Bot Made By MuhammedinKs | Prefix: m+')
      let embed8 = new Discord
.MessageEmbed()
    .setTitle('** \<:Gvenlik:898267958890082304>  Yardım Menüsü \<:Gvenlik:898267958890082304> **')
      .setDescription('\<:Gvenlik:898267958890082304>  ** *MuhammedinKs | Moderation*, her bot kullanıcısının sevdiği minimalist hissi ve görünümü korurken biletler, tepki rolleri, Uptime ve Buttonlar gibi birçok özelliğe sahip tek ücretsiz hepsi bir arada botlardan biridir..**')
      .setColor("#ffffff")
      .addField(
        "<:892884521849073695:896437064495673394> UPTIME",
        "`ekle` `sil` `stats` `toplam` `ping`")
      .setThumbnail("https://cdn.discordapp.com/attachments/896415813433700412/898243023555657738/mlogo.png")
      .setImage('')
      .setFooter('Bot Made By MuhammedinKs | Prefix: m+')

    

module.exports = {
  name: "yardım",
  aliases: [""],
  usage: "unban",
  description: "unbans member",


  run: async (client, message, args) => {
    let cmduser = message.author;
    let menuoptions = [
       {
        value: "BAŞLANGIÇA GERİ DÖN", description: "Başlangıç ​​Menüsü!",
        replymsg: embed1, emoji: "910033831350927410" //optional
      },{
        value: "MODERASYON", description: "Moderasyon Komutları!",
        replymsg: embed2, emoji: "896437541878788127" //optional
      }, {
        value: "GENEL", description: "Genel Komutları!",
        replymsg: embed3, emoji: "896436407122395146" //optional
      }, {
        value: "ÇEKİLİŞ", description: "Çekiliş Komutları!",
        replymsg: embed4, emoji: "896436482083016776" //optional
      }, {
        value: "BİLGİ", description: "Bilgi Komutları!",
        replymsg: embed5, emoji: "896436015227613184" //optional
      }, {
        value: "FOTOĞRAF", description: "Fotoğraf Komutları!",
        replymsg: embed6, emoji: "896437131591966740" //optional
      }, {
        value: "EĞLENCE", description: "Eğlence Komutları!",
        replymsg: embed7, emoji: "896435884369522768" //optional
      }, {
        value: "UPTIME", description: "Uptime Komutları!",
        replymsg: embed8, emoji: "896437064495673394" },//optional
        ]
   // define the selection
    let Selection = new MessageMenu()
      .setID('MenuSelection')
      .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
      .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
      .setPlaceholder('Seçim yapmak için bana tıklayın!');  //message in the content placeholder
    menuoptions.forEach(option => {
      let row = new MessageMenuOption()
        .setLabel(option.label ? option.label : option.value)
        .setValue(option.value)
        .setDescription(option.description)
        .setDefault()
      if (option.emoji) row.setEmoji(option.emoji)
      Selection.addOption(row)
    })
    //define the embed
   
    let MenuEmbed = new Discord.MessageEmbed()
      .setTitle('** \<:Gvenlik:898267958890082304>  Yardım Menüsü \<:Gvenlik:898267958890082304> **')
      .setDescription('\<:Gvenlik:898267958890082304>  ** *MuhammedinKs | Moderation*, her bot kullanıcısının sevdiği minimalist hissi ve görünümü korurken biletler, tepki rolleri, uptime ve düğmeler gibi birçok özelliğe sahip tek ücretsiz hepsi bir arada botlardan biridir..**')
      .setColor("#ffffff")
      .addField("<:Gvenlik:898267958890082304>  Komut Kategorileri",
        "**<:892884521656139797:896437541878788127>   Moderasyon\n <:892884521479987210:896436407122395146>  Genel\n\<:hediye:896436482083016776>  Çekiliş\n<:892884521865863208:896437131591966740>Bilgi\n<:892884521865863208:896437131591966740>  Fotoğraf\n<:892884521572237323:896436912947101706>   Müzik\n <:892884521551282186:896435884369522768> Eğlence\n<:892884521849073695:896437064495673394>  Uptime**")
      .setThumbnail("https://cdn.discordapp.com/attachments/896415813433700412/898243023555657738/mlogo.png")
      .setImage('')
      .setFooter('Bot Made By MuhammedinKs | Prefix: m+')


    
    //send the menu msg
    let menumsg = await message.channel.send(MenuEmbed, Selection                        )
    //function to handle the menuselection
    function menuselection(menu) {
      let menuoptiondata = menuoptions.find(v => v.value == menu.values[0])
      menu.reply.send(menuoptiondata.replymsg, true,);
    }
    //Event
    client.on('clickMenu', (menu) => {
      if (menu.message.id === menumsg.id) {
        if (menu.clicker.user.id === cmduser.id) menuselection(menu);
        else menu.reply.send(`:x: You are not allowed to do that! Only: <@${cmduser.id}>`, true);
      }
    });
  }
}