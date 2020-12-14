const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "Meme indo",
  description: "Meme indonesia",
  aliases: ["mim"],
  run: async (client, message, args) => {
    let KagApi = require("@kagchi/kag-api")
    let meme = await KagApi.memeindo()
    let embed = new MessageEmbed()
    .setAuthor(meme.title)
    .setImage(`https://imgur.com/${meme.hash}.jpg`)
    .setDescription(`Meme Score 📈 | ${meme.score}`)
    .setColor("RANDOM")
    .setFooter(`Author ${meme.author}`)
    .setTimestamp()
    message.channel.send(embed)
  }
}