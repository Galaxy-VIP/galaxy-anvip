const fetch = require('node-fetch')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
fetch('https://some-random-api.ml/img/dog') 
.then(res => res.json())
.then(dog => {
  const embed = new Discord.MessageEmbed()
  .setAuthor('Dog', dog.link)
  .setImage(dog.link)
  .setTimestamp()
  .setColor("#ffff00")
  message.channel.send(embed)
})
.catch(err => console.error(err))
}