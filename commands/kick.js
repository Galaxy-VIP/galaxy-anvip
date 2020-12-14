const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permission")
  let member = message.mentions.members.first();
  if(!member) return message.channel.send("Mention a user")
  if(!member.kickable) return message.channel.send("I can't kick this person")
  let reason = args[1]
  if(!reason) return message.channel.send("Give the reason")
  member.kick().then((member) => {
    const embed = new MessageEmbed()
    .setAuthor("Kicked", member.user.displayAvatarURL({dynamic: true}))
    .setColor("BLUE")
    .addField("Kicked user", `\`${member.displayName}\``)
    .addField("Reason", `\`${reason}\``)
    .addField("Kicked By", `\`${message.author.username}\``)
    .setFooter(`Bye ${member.displayName}`)
    .setTimestamp()
    message.channel.send(embed)
  })
}