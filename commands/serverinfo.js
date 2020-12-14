const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
  let roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(r => r)
  if(roles && roles.length > 30) {
      const len = roles.length - 30;
      roles = roles.slice(0, 10)
      roles.push(`${len} more...`)
    }
  let emojis = message.guild.emojis.cache.map(r => r)
  if(emojis && emojis.length > 30) {
    const more = emojis.length - 30;
    emojis = emojis.slice(0, 10)
    emojis.push(`${more} more...`)
  }
  let embed = new MessageEmbed()
  .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic: true}))
  .setThumbnail(message.guild.iconURL({dynamic: true}))
  .setColor("BLUE")
  .addField("Server Name", message.guild.name)
  .addField("Owner", `${message.guild.owner}`)
  .addField("Server Region", message.guild.region)
  .addField("Verification Level", message.guild.verificationLevel)
  .addField("Guild Created On", message.guild.createdAt.toString())
  .addField("You Joined On", message.guild.joinedAt.toString())
  .addField(`User Count [${message.guild.memberCount}]\n   Member [${message.guild.members.cache.filter(m => !m.user.bot).size}]\n   Bot [${message.guild.members.cache.filter(m => m.user.bot).size}]`, `**Channels [${message.guild.channels.cache.size}]**\n   **Text [${message.guild.channels.cache.filter(t => t.type === "text").size}]**\n   **Voice [${message.guild.channels.cache.filter(t => t.type === "voice").size}]**\n   **Category [${message.guild.channels.cache.filter(e => e.type === "category").size}]**`)
  .addField(`Roles [${message.guild.roles.cache.size}]`, roles.length < 30 ? roles.join(" ") : roles.length > 30 ? roles : "NONE")
  .addField(`Custom Emojis [${message.guild.emojis.cache.size}]`, emojis.length < 30 ? emojis.join(" ") : emojis.length > 30 ? emojis : "NONE") 
  message.channel.send(embed)
}
