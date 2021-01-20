const Discord = require('discord.js');
const client = new Discord.Client();
//UPTIME ROBOT (WEB)
const { get } = require('node-superfetch');
const http = require("http");
const express = require("express");
const app = express();
const fs = require('fs')
const bot = client 
const color = ["#FFFFFF", "#FFFF00",  "#FF0000", "#FFD700", "#FF00FF", "#FF4500", "#FF6347", "#008080"]
const coloran = Math.floor(Math.random() * color.length)
const color2 = ["#FFFFFF", "#FFFF00",  "#FF0000", "#FFD700", "#FF00FF", "#FF4500", "#FF6347", "#008080"]
const coloran2 = Math.floor(Math.random() * color2.length)
const background = 'https://cdns.klimg.com/otosia.com/g/jalanan_terindah_dunia/p/tree_tunnel-20150513-006-editor.jpg'
const db= require('quick.db')
const { Canvas } = require("canvas-constructor")
const fetch = require("node-fetch")
client.queue = new Map()
const { CanvasSenpai } = require('canvas-senpai')
const canva = new CanvasSenpai()
const DBL = require("dblapi.js");
const dbl = new DBL('YOUR_DBL_KEY', client);
const { inspect } = require("util")
const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "#00ccff",
        reaction: "🎉"
    }
});
dbl.on("posted", () => {
  console.log("Success posted")
})
dbl.on('error', e => {
  console.log(e)
})
app.get("/", (req, res) => {
res.sendStatus(200);
});

app.listen(process.env.PORT);

client.on("ready", async () => {
  console.log(`${client.user.tag} sudah online!`);
  const status = [`${client.guilds.cache.size} server and ${client.users.cache.size} user`, "v.help to show all commands", "Invite me in https://top.gg/bot/755461556204208259"]
  setInterval(() => {
  client.user.setActivity(status[Math.floor(Math.random() * status.length)],{
type: "WATCHING",});
  }, 10000)
  
});

client.on('error', console.error)

client.snipes = new Map()

client.on('messageDelete', function(message, channel){
 client.snipes.set(message.channel.id,{
  content: message.content, 
  author: message.author, 
  image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + file)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
      
      if (props.aliases) {
            props.aliases.forEach(alias => {
                client.aliases.set(alias, props);
            });
        };
    })
});

    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            console.log("Successfully loaded " + file)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});
  
client.on("guildMemberAdd", async (member) => {
  let chx = db.get(`welchannel_${member.guild.id}`);
  
  if(chx == null) {
    return;
}
  var { body: avatar } = await get(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  var { body: defaultbackground } = await get(background); 
  const wlc = new Canvas(820, 360)
  .addImage(defaultbackground, 0, 0, 820, 360)
  .addRoundImage(avatar, 335, 35, 150, 150, 150 / 2) 
  .setTextAlign('center')
  .setColor(color[coloran])
  .setTextFont("bold 42px impact")
  .addText(`WELCOME`, 410.6, 228.1)
  .setTextAlign("center")
  .setColor(color2[coloran2])
  .setTextFont("bold 20px impact")
  .addText(`${member.user.tag}`, 410.6, 256.1)
  .toBuffer()
  const welc = new Discord.MessageAttachment(
    wlc,
    "welcome-image.png"
    )
  client.channels.cache.get(chx).send(welc)
})
client.on("guildMemberRemove", async (member) => {
  let gb = db.get(`byechannel_${member.guild.id}`)
  
  if(gb == null) {
    return
  }
   var { body: avatar } = await get(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  var { body: defaultbackground } = await get(background); 
  const gbye = new Canvas(820, 360)
  .addImage(defaultbackground, 0, 0, 820, 360)
  .addRoundImage(avatar, 335, 35, 150, 150, 150 / 2) 
  .setTextAlign('center')
  .setColor(color[coloran])
  .setTextFont("bold 42px impact")
  .addText(`GOODBYE`, 410.6, 228.1)
  .setTextAlign("center")
  .setColor(color2[coloran2])
  .setTextFont("bold 20px impact")
  .addText(`${member.user.tag}`, 410.6, 256.1)
  .toBuffer()
  const goodbye = new Discord.MessageAttachment(
    gbye,
    "leave-image.png"
    )
  client.channels.cache.get(gb).send(goodbye)
})
  
client.login(process.env.BOT_TOKEN);
