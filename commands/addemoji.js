module.exports = {
    name: 'addemoji',
    aliases: [],
    run: (client, message, args) => {
        if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.reply(`:x: | You don't have permission \`MANAGE_EMOJIS\``)
 
        if(!args[0]) return message.channel.send(`Please write the name of the emoji`)
        if(!args[1]) return message.channel.send(`Please insert the emoji url\nExample: https://cdn.discordapp.com/emojis/<emoji id>.png`)
 
        try {
            message.guild.emojis.create(args[1], args[0]).then(emoji => {
                message.channel.send(`**Created Emoji**\n\nPreview: ${emoji}\nCode: \\${emoji}`)
            })
        } catch (err) {
            return message.channel.send(err)
        }
    }
}