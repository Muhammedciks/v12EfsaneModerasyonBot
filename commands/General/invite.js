
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
 name: "invite",
 aliases: ["info"],
 description: "Shows all commands of the bot",

 run: async (client, message, args) => {
 
let helpEmbed = new MessageEmbed()
 . setDescription(`<a:TCC_IconNote:887805199547269171> **Lunar  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**`)
 .setThumbnail(client.user.displayAvatarURL())
 .setImage("https://images-ext-1.discordapp.net/external/dRbEvUH1xs8DP7BHboqbgprQ0As_gkZYriJYXjHSHbk/https/media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif")
 .setFooter("Click on these buttons to invite me!")
 .setColor("#FFFFF0")


 let button1 = new disbut.MessageButton()
 .setStyle('url')
 .setLabel('Invite Me') 
 .setURL("https://dsc.gg/lunar05");

let button2 = new
disbut.MessageButton()
.setStyle('url')
.setLabel('Support Server')
   .setURL('https://discord.gg/AbnXrxSY')
return message.channel.send(helpEmbed,{
 button: [button1,button2],
 });

 },
};

