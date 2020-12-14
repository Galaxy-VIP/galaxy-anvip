const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
  name: "Clyde", 
  deescription: "-",
  usage: "v.clyde <text>",
  run: async (client, message, args) => {
    const text = args.join(" ")
    if(!text) return message.channel.send("Enter text")
    fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
    .then((res) => res.json())
    .then((body) => {
        console.log(body)
        let embed = new MessageEmbed()
        .setAuthor(`Clyde: ${text}`)
        .setImage(body.message)
        .setColor("BLUE")
        .setFooter(`Request ${message.author.tag}`)
        .setTimestamp()
        message.channel.send(embed)
    })
  }
}