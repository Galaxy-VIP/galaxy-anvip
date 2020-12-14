const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "ping",
  run: async (client, message, args) => {
  let pinging = await message.channel.send("Getting ping info...")
  let now = Date.now()
  let embed = new MessageEmbed()
  .setColor("GREEN")
  .setAuthor("Pong", message.author.displayAvatarURL({dynamic: true}))
  .setFooter(`Request ${message.author.tag}`)
  .setTimestamp()
  .addField("⏲️ Roundtrip took", `__${pinging.createdTimestamp - message.createdTimestamp}__ ms`)
  .addField("⌛ Latency", `__${Math.round(Date.now()-now)}__ ms`)
  .addField(":heartbeat: API", `__${Math.round(client.ws.ping)}__ ms`)
  setTimeout(function() {
    pinging.edit("Success getting info", embed)
  }, 3000)
}
}
exports.config = {
  aliases: ["pong", "pingpong"]
}