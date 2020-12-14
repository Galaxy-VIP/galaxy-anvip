const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  let cap = args.join(" ")
  if(!cap) return message.channel.send("Please enter text")
  let embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .setColor("BLUE")
  .setImage(`https://api.alexflipnote.dev/captcha?text=${cap}`)
  .setFooter(cap)
  .setTimestamp()
  message.channel.send(embed)
}