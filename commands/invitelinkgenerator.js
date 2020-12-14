module.exports = {
  name: "Invite Link Generator", 
  description: "Create Link Invite Bot",
  usage: "v.invitelinkgenerator <id bot> <permission>\n Example: v.invitelinkgenerator 755461556204208259 8",
  aliases: ["ilr"],
  run: async (client, message, args) => {
    const db = require("quick.db")
    const { MessageEmbed } = require('discord.js')
    let id = args[0]
    if(!id) return message.channel.send("Enter a id bot")
    if(isNaN(id))
       return message.channel.send("Id is number")
    let user = await client.users.fetch(id, { cache: true })
    if(user.bot === false) return message.channel.send({embed: { color: "RED", title: "Error", description: "This is not a bot"}})
    let perm = args[1]
    if(!perm) perm = 0
    if(isNaN(perm))
      return message.channel.send("Permission is number")
    let gen = await message.channel.send("Please wait...")
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(user.username, `https://cdn.discordapp.com/avatars/${id}/${user.avatar}.webp`)
    .addField("Link Invite Bot", `[Click Here](https://discord.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=${perm})`)
    .addField("Bot Name", `\`${user.username}#${user.discriminator}\``)
    .addField("Bot ID", `\`${id}\``)
    .addField("Permissions", `\`${perm}\``)
    .setThumbnail(`https://cdn.discordapp.com/avatars/${id}/${user.avatar}.webp`)
    .setFooter(`Request ${message.author.tag}`)
    .setTimestamp()
    setTimeout(function() {
      gen.edit("Successfully created invite link bot", embed)
    }, 3000).catch(e => message.channel.send(e))
  }
}