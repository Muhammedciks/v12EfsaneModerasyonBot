
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
 name: "rules",
 aliases: ["info"],
 description: "Shows all commands of the bot",

 run: async (client, message, args) => {
 
 if(message.author.id !== "742335160598659094") return message.channel.send("This command is only for bot owners.");

let helpEmbed = new MessageEmbed()
 
.setTitle('**RULES**')  .setDescription(`<:sd_1:876810890152923176> SPAMMING
<a:fh_dot:884260150968471613> Spamming in any form is prohibited. Depending on the severity, a warn, mute, or ban will be issued.

<:sd_2:876811057132343326> RACISM,SLURS,SEXISM AND TOXICITY
<a:fh_dot:884260150968471613> None of these are allowed, saying n word, posting NSFW content. If you do any of these, you will get permanent ban from this server and bot. Please don't be toxic to other members, and respect each other.

<:sd_3:876811209217810443> DISCORD TOS
<a:fh_dot:884260150968471613> U must follow discord tos.
Read Discord rules here ==> https://discord.com/term

<:sd_4:876990083767619604> PINGING OR DMING DEVELOPERS
<a:fh_dot:884260150968471613> PINGING DEVELOPER WILL RESULT IN A BAN.

<:sd_5:876990134757769346> BEGGING
<a:fh_dot:884260150968471613> Begging for anything is not allowed.

<:sd_6:876990188289687562> DM ADVERTISING
<a:fh_dot:884260150968471613> Advertising a bot or server in private message without their permission is not allowed!

`)
 .setThumbnail(client.user.displayAvatarURL())
 .setImage("https://images-ext-1.discordapp.net/external/dRbEvUH1xs8DP7BHboqbgprQ0As_gkZYriJYXjHSHbk/https/media.discordapp.net/attachments/878100707763449926/878850265036492820/standard.gif")
 .setFooter("Click on these buttons to invite me!")
 .setColor("#FFFFF0")


 let button1 = new disbut.MessageButton()
 .setStyle('url')
 .setLabel('Invite Me') 
 .setURL("https://dsc.gg/lunar05")
.setEmoji("887806752643481650");
let button2 = new
disbut.MessageButton()
.setStyle('url')
.setLabel('Support Server')
.setEmoji('887828790565290004')
   .setURL('https://discord.gg/AbnXrxSY')
return message.channel.send(helpEmbed,{
 button: [button1,button2],
 });

 },
};

