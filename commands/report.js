const { MessageEmbed } = require('discord.js')
const channel = '761252885249785906'

exports.run = async (client, message, args) => {
  const bugsend = client.channels.cache.get(channel)
  let bug = args.join(" ")
  if(!bug) return message.channel.send("Enter bug type")
  let embed = new MessageEmbed()
  .setAuthor("New Reported", message.author.displayAvatarURL({dynamic: true}))
  .setColor("BLUE")
  .addField("Report By", `\`${message.author.username}\``)
  .addField("Report In Guild Name", `\`${message.guild.name}\``)
  .addField("Report In Channel", `\`${message.channel.name}\``)
  .addField("Type Of Bug Reported", `\`${bug}\``)
  .setFooter("New Reported")
  .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  bugsend.send(embed)
  message.channel.send(`Bug \`${bug}\` successfully send to dev`).then(m => m.delete ({ timeout: 5000}))
}