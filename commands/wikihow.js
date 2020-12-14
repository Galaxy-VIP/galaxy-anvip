const { MessageEmbed } = require('discord.js')
const KagApi = require("@kagchi/kag-api")

module.exports = {
  name: "Wikihow", 
  aliases: ["wiki"],
  run: async (client, message, args) => {
    const wiki = await KagApi.wikihow()
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(wiki.title) 
    .setDescription(`NSFW: ${wiki.nsfw}`)
    .setImage(wiki.url)
    .setFooter(wiki.title)
    .setTimestamp()
    message.channel.send(embed)
  }
}