const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  let member = message.mentions.members.first()
  if(member) {
    const gay = await message.channel.send(`Are looking for the gay percentage ${member.displayName}....`)
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(member.displayName, member.user.displayAvatarURL({dynamic: true}))
    .setDescription(`${member.displayName} gay ${Math.floor(Math.random() * 100)}% 🏳️‍🌈`)
    .setFooter(`Request ${message.author.tag}`)
    .setTimestamp()
    setTimeout(function() {
      gay.edit(`Managed to get a gay percentage ${member.displayName}`, embed)
    }, 3000)
  } else {
    let gay = await message.channel.send("Are looking for the gay percentage....")
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`You gay ${Math.floor(Math.random() * 100)}% 🏳️‍🌈`)
    .setFooter(`Request ${message.author.tag}`)
    .setTimestamp()
    setTimeout(function() {
      gay.edit(`Managed to get a gay percentage`, embed)
    }, 3000)
  }
}