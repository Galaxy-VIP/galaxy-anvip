const { Canvas } = require("canvas-constructor")
const fetch = require("node-fetch")

exports.run = async (client, message, args) => {
  const avatar = await fetch(message.author.displayAvatarURL({format: 'jpg'}))
  let mage = new Canvas(500, 250)
  .setColor("#ffffff")
  .addRect(0, 0, 500, 250)
  .setColor("#ff2050")
  .addRect(0, 0, 500, 80)
  .setColor("#ffffff")
  .setTextFont("bold 40px impact")
  .addText(`Welcome`, 110, 55)
  .setColor("#ff2050")
  .setTextFont("bold 20px impact")
  .addText(`ID: ${message.author.id}`, 30, 140)
  .addText(`TAG: ${message.author.tag}`, 30, 170)
  .addText(`You're member of: ${message.guild.memberCount}`, 30, 200)
  .setColor("#ffffff")
  .addCircle(60, 40, 33)
  .addCircularImage(await avatar.buffer(), 60, 40, 30)
  .toBuffer()
  const discord = require("discord.js")
  const welcome = new discord.MessageAttachment(
    mage,
    "welcome.png"
    )
  message.channel.send(welcome)
}