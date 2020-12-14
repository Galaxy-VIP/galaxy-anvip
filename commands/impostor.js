
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "Impostor",
  description : '0 impostor remain',

  run: async (client, message, args) => {

    const target = message.mentions.members.first();
    
    const imp = ["was The Impostor.", "was not The Impostor."]
    const ran = Math.floor(Math.random() * imp.length)
    if (!target) return message.channel.send("Mention a user");

    message.channel.send(
      `.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
 　.　　      。　        ඞ   。　    .    •
 •            . ${target.displayName} ${imp[ran]}　 。　.
                        0 impostor remain
　 　　。　　　　　　ﾟ　　　.　　　　　.
,　　　　.　 .　　       .               。` 
    )
  },
};