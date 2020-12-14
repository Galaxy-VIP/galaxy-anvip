const fetch = require('node-fetch')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
const url = 'https://some-random-api.ml/img/fox'
const res = await fetch(url).then(url => url.json()).then(fox => {
const embed = new Discord.MessageEmbed()
.setAuthor('Fox', fox.link)
.setImage(fox.link)
.setColor("ORANGE")
.setTimestamp()
message.channel.send(embed)
  })
}