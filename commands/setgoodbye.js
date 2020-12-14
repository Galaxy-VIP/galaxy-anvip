const db = require('quick.db')
module.exports = {
  name: "goodbye",
  description: "member leave in guild",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You don't have permission ```MANAGE_CHANNELS```")
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I'm don't have permission ```MANAGE_CHANNELS```")
    let channel = message.mentions.channels.first()
    if(!channel) return message.channel.send("Mention channel")
    
    db.set(`byechannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Goodbye message set to channel ${channel}`)
  }
}