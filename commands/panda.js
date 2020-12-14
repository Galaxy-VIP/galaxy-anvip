const fetch = require('node-fetch')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
fetch('https://some-random-api.ml/img/panda')
.then(res => res.json())
.then(panda => {
  const embed = new Discord.MessageEmbed()
  .setAuthor('Panda', panda.link)
  .setImage(panda.link)
  .setTimestamp()
  .setColor("BLUE")
  message.channel.send(embed)
})
.catch(err => console.error(err))
}