const { get } = require('node-superfetch');
const Discord = require("discord.js")
const { Canvas } = require("canvas-constructor")
const background = 'https://cdns.klimg.com/otosia.com/g/jalanan_terindah_dunia/p/tree_tunnel-20150513-006-editor.jpg'
exports.run = async (client, message, args) => {
  var { body: avatar } = await get(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
  var { body: defaultbackground } = await get(background); 
  const wlc = new Canvas(820, 360)
  .addImage(defaultbackground, 0, 0, 820, 360)
  .addRoundImage(avatar, 335, 35, 150, 150, 150 / 2) 
  .setTextAlign('center')
  .setColor("#FFFF00")
  .setTextFont("bold 32px impact")
  .addText(`WELCOME`, 410.6, 228.1)
  .setTextAlign("center")
  .setColor("#FFFFFF")
  .setTextFont("bold 20px impact")
  .addText(`${message.author.tag}`, 410.6, 256.1)
  .toBuffer()
   message.channel.send({files: [wlc]})
}