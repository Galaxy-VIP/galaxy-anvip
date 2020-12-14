const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'Avatar', 
  usage: 'v.avatar <@user>', 
  aliases: ['av'], 
  run: async (client, message, args) => {
 let userArray = message.content.split(" ");
 let userArgs = userArray.slice(1);
  let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username === args.join(" ") || x.user.username === userArgs[0]) || message.member;
  let embed = new MessageEmbed()
  .setTitle(`Avatar ${member.user.username}`)
   .setColor("BLUE")
  .setImage(member.user.displayAvatarURL({size: 4096, dynamic: true}))
  .setTimestamp()
  .setFooter(`Request ${message.author.tag}`)
  message.channel.send(embed)
}
}
