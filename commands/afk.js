const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "Afk",
  run: async (client, message, args) => {
    
    
    const status = new db.table("afks")
    const afk = await status.fetch(message.author.id + message.guild.id)
    const embed = new MessageEmbed().setColor("GREEN")
    
    if(!afk) {
      embed.setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      embed.setDescription(`**${message.author.tag}** is now AFK.\n**Reason:** ${args.join(" ") ? args.join(" ") : "AFK"}`)
      embed.setFooter(`${message.author.tag} is now AFK.`)
      status.set(message.author.id, args.join(" ") || `AFK`)
    } else {
      embed.setDescription("You are no longer AFK.")
      status.delete(message.author.id + message.guild.id)
    }
    message.channel.send(embed)
  }
}