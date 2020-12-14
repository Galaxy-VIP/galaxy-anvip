const fetch = require('node-fetch')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
fetch('https://some-random-api.ml/img/birb') 
.then(res => res.json())
.then(birb => {
  const embed = new Discord.MessageEmbed()
  .setAuthor('Birb', birb.link)
  .setImage(birb.link)
  .setColor("GREEN")
  .setTimestamp()
  message.channel.send(embed)
})
.catch(err => console.error(err))
}