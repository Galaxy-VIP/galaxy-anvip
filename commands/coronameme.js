const { MessageEmbed } = require('discord.js')
const KagApi = require('@kagchi/kag-api')

exports.run = async (client, message, args) => {
  let crm = await KagApi.coronamemes()
  let embed = new MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(crm.title)
  .setFooter(crm.author)
  .setTimestamp()
  .setImage(`https://imgur.com/${crm.hash}.jpg`)
  .setDescription(`Score 📈 | ${crm.score}`)
  message.channel.send(embed)
}