const Discord = require('discord.js')
const canvacord = require('canvacord')
exports.run = async (client, message, args) => {
        let avatar = message.mentions.users.first() || message.author
        let image = await canvacord.Canvas.trigger(avatar.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 }));
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
}