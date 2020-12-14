const ms = require("pretty-ms")
const { platform, arch, cpus } = require("os")
module.exports = {
  name: "stats",
  run: async (client, message, args) => {
  const model = cpus()[0].model + " " + arch()
  const uptime = ms(client.uptime, {verbose:true})
  const { MessageEmbed } = require('discord.js')
  let embed = new MessageEmbed()
  .addField(`\nGeneral Information\n\`Bot Name: ${client.user.username}\`\n\`Bot Created: ${client.user.createdAt.toLocaleString()}\``, `\`Uptime: ${uptime}\``)
  .addField(`\`Guilds: ${client.guilds.cache.size}\``, `\`Users: ${client.users.cache.size}\``)
  .addField(`\nSystem\n\`CPU: ${model}\`\n\`Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\`\n\`Library: discord.js 12.3.1\`\n\`Node.js Version: ${process.version}\`\n\`Platform: ${platform}\``, `\`Websocket: ${Math.round(client.ws.ping)} ms\``)
  .setFooter(`Request ${message.author.tag}`)
  .setTimestamp()
  .setColor("BLUE")
  .setAuthor("Galaxy ANVIP", client.user.displayAvatarURL())
  message.channel.send(embed)
}
}