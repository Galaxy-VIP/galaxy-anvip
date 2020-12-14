const { MessageEmbed } = require('discord.js')
const mojangjs = require("mojangjs")

exports.run = async (client, message, args) => {
  let skin = args.join(" ")
  if(!skin) return message.channel.send("Please enter valid user")
  
  mojangjs.getUUID(`${skin}`).then(uuid => {
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${skin}`, `https://visage.surgeplay.com/head/832/${uuid}`)
    .setDescription(`**__${uuid}__**`)
    .setImage(`https://visage.surgeplay.com/full/832/${uuid}`)
    .setThumbnail(`https://visage.surgeplay.com/skin/832/${uuid}`)
    .setFooter(`Request ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  })
}
