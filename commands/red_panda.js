const fetch = require('node-fetch')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
fetch('https://some-random-api.ml/img/red_panda') 
.then(res => res.json())
.then(red_panda => {
  const embed = new Discord.MessageEmbed()
  .setAuthor('Red Panda', red_panda.link)
  .setImage(red_panda.link)
  .setTimestamp()
  .setColor("GOLD")
  message.channel.send(embed)
})
.catch(err => console.error(err))
}