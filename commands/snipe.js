const { MessageEmbed } = require('discord.js')
module.exports = {
name: 'snipe',
description: 'get deleted messages',

 run: async(client, message, args)=>{
 const msg = client.snipes.get(message.channel.id);
 if(!msg) return message.channel.send({embed: { description: `No messages are deleted on the channel ${message.channel.name}`, color: "BLUE"}})
   
const embed = new MessageEmbed()
.setAuthor(msg.author.tag, msg.author.displayAvatarURL())
.setDescription(msg.content)
.setColor('GOLD')
.setImage(msg.image)
message.channel.send(embed)
  }
}