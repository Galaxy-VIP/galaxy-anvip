const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'help',
	description: 'Shows all commands available.',
  aliases: ["?"],
  run: async (client, message, args) => {
    const prefix = db.get(`pref_${message.guild.id}`) || "v."

  if (args[0]) {
    const command = await client.commands.get(args[0]);
    if(!command) {
    return message.channel.send("Unknown command")
    }
    let embed = new MessageEmbed()
    .setAuthor(command.name, client.user.displayAvatarURL())
    .setColor("BLUE")
    .addField("Description", command.description ? command.description : "\`Not Provided\`")
    .addField("Usage", command.usage ? command.usage : "\`Not Provided\`")
    .addField("Aliases", command.aliases ? command.aliases : "\`Not Provided\`")
    .setFooter(`Request ${message.author.tag}`)
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed)
  } else {
  let embed = new MessageEmbed()
  .setAuthor(`Command List`, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`The prefix in this guild is [ \`${prefix}\` ]\nCommands [ \`${client.commands.size}\` ]`)
  .setFooter(`Request ${message.author.tag}`)
  .setTimestamp()
  .setColor("RANDOM")
  .setThumbnail(client.user.displayAvatarURL())
  .addField("💻 Developer Command", `\`eval\`, \`execute\``)
  .addField("⚙️ Moderation Command", `\`kick\`, \`ban\`, \`setwelcome\`, \`setgoodbye\`, \`slowmode\`, \`setprefix\`, \`addemoji\``)
  .addField("🔭 Utility", `\`ping\`, \`help\`, \`hastebin\`, \`playstore\`, \`serverinfo\`, \`snipe\`, \`userinfo\`, \`docs\`, \`npmsearch\`, \`npm\`, \`covid\`, \`avatar\`, \`translate\`, \`github\`, \`invitelinkgenerator\`, \`binary\`, \`uptime\`, \`youtubestats\`, \`afk\`, \`stats\``)
  .addField("🎵 Music", `\`play\`, \`stop\`, \`skip\`, \`search\`, \`loop\`, \`volume\`, \`queue\`, \`nowplaying\`, \`remove\`, \`lyrics\`, \`skipto\`, \`shuffle\`, \`pruning\`, \`playlist\``)
  .addField("🎉 Giveaway", `\`giveaway\`, \`reroll\``)
  .addField("🕹️ Fun Command", `\`impostor\`, \`howgay\`, \`hangman\`, \`meme\`, \`memeindo\`, \`coronameme\`, \`fakehack\`, \`clyde\`, \`wikihow\`, \`subreddit\`, \`triggered\`, \`captcha\``)
  .addField("🐰 Animals", `\`cat\`, \`dog\`, \`panda\`, \`bird\`, \`red_panda\`, \`fox\``)
  .addField("<:emoji_6:774840839477919794> Minecraft", `\`mcskin\`, \`mcserver\`, \`hypixelstats\`, \`achievement\``)
  .addField(" <:anime:778215082042589206> Anime", `\`anime\`, \`waifu\``)
  .addField("🔩 Useful Link", "**[Invite Bot](https://discord.com/oauth2/authorize?client_id=755461556204208259&scope=bot&permissions=8) | [Support Server](https://discord.gg/tQBRSn2) | [Vote](https://top.gg/bot/755461556204208259/vote) | [Donate](https://saweria.co/GalaxyANVIP)**")
  .addField(`🗂️ Find A Bug?`, `You find a bug or the command does not work please report it in a way \`${prefix}report <bug>\``)
  message.channel.send(embed)
  }
  }
}