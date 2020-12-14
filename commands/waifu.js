const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "Waifu", 
  description: "not provided",
  run: async (client, message, args) => {
    const KagApi = require("@kagchi/kag-api")
    const waifu = await KagApi.waifu.random()
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setImage(waifu)
    .setAuthor(`Waifu`, waifu)
    .setTimestamp()
    .setFooter(`Waifu`, waifu)
    message.channel.send(embed)
  }
}