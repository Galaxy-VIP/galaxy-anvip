const util = require('minecraft-server-util');
const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
  let ip = args[0]
  if(!ip) return message.channel.send("Enter the valid ip address")
util.status(ip)
    .then((response) => {
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(ip)
    .setImage(`http://status.mclive.eu/${ip}/${ip}/25565/banner.png`)
    .addField("Host", response.host)
    .addField("Version", response.version)
    .addField("Port", response.port)
    .addField("Online Players", response.onlinePlayers)
    .addField("Max Players", response.maxPlayers)
    .addField("MOTD", response.description.toRaw())
    .setFooter(ip)
    .setTimestamp()
    message.channel.send(embed)
    })
    .catch((error) => {
        message.channel.send(error)
    });
}