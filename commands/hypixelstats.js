const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {

 var name = args[0];
 
if(!name) return message.channel.send("Please enter your hypixel name")

 var url = `https://api.hypixel.net/player?key=YOUR_HYPIXEL_KEY
&name=${name}`;

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body



if(!body.player) return message.channel.send(`I can't find this users`)

if(!body.player.lastLogin) return console.log("Error");
if(!body.player.firstLogin) return console.log("Error");
if(!body.player.displayname) return console.log("Error")

 let offon = `Offline 🔴`
let photo = "https://images-ext-1.discordapp.net/external/UdWXoKUsaYCOyvH6nsDk03AdfJVWTK7cyQVvhqpoF3I/https/image.ibb.co/hwheRV/image.png"

if(body.player.lastLogout < body.player.lastLogin){
  offon = `Online :green_circle:`
  photo = "https://images-ext-1.discordapp.net/external/74xyeTgd4BElwkkoe92yB3zEwD1ln4N1rh2zeKxVwt8/https/image.ibb.co/h9VNfq/image.png"
} 

var dateString1 = body.player.lastLogin
var currentTime1 = new Date(parseInt(dateString1 ));
var month1 = currentTime1.getMonth() + 1;
var day1 = currentTime1.getDate();
var year1 = currentTime1.getFullYear();
var date1 = day1 + "/" + month1 + "/" + year1;

var dateString2 = body.player.firstLogin
var currentTime2 = new Date(parseInt(dateString2 ));
var month2 = currentTime2.getMonth() + 1;
var day2 = currentTime2.getDate();
var year2 = currentTime2.getFullYear();
var date2 = day2 + "/" + month2 + "/" + year2;



let image = "https://visage.surgeplay.com/bust/" + body.player.uuid +".png";



console.log(body)

let embed = new Discord.MessageEmbed()
 .setTitle(`Hypixel Stats **${name}**`)
 .setColor("RANDOM")
 .setThumbnail(image)
 .addField("Information", `╔ First Login: ${date2}\n║ Last Login: ${date1}\n╚ Display Name: ${body.player.displayname}\n╔ Status: ${offon}\n║ Package Rank: ${body.player.newPackageRank || "NONE" }\n╚ Special Rank: ${body.player.rank || "Don't have rank"}\n╔ Network EXP: ${body.player.networkExp || "0"}\n║ Karma: ${body.player.karma || "0"}\n║ Rank + Color: ${body.player.rankPlusColor || "Don't have rank"}\n╚ Most Recent Game Type: ${body.player.mostRecentGameType || "NONE"}`)
 .setFooter(`Request ${message.author.tag}`)
 .setTimestamp()
 message.channel.send(embed)
})
}
