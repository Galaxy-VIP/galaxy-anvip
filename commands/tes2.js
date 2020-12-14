const ms = require("parse-ms")
const cooldown = new Set()
const cd = 5
exports.run = async (client, message, args) => {
  let time = ms(cd * 1000)
  if(cooldown.has(message.author.id)) {
    return message.channel.send(`Please wait ${time}`)
  }
  cooldown.add(message.author.id)
}