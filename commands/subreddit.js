const { MessageEmbed } = require('discord.js')
const KagApi = require("@kagchi/kag-api")

module.exports = {
  name: "Subreddit", 
  run: async (client, message, args) => {
    let name = args.join(" ")
    if(!name) return message.channel.send("Please enter subreddit")
    let reddit = await KagApi.subreddit(name)
    let embed = new MessageEmbed()
    .setAuthor(reddit.title)
    .setFooter(reddit.author)
    .setTimestamp()
    .setColor("RANDOM")
    .setImage(`https://imgur.com/${reddit.hash}.jpg`)
    .setDescription(`Score 📈 | ${reddit.score}`)
    message.channel.send(embed)
  }
}