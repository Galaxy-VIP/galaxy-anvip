 const db = require('quick.db')
 const cooldown = new Set()
 const cdtime= 5
 const Discord = require('discord.js')
 const cooldowns = new Map()
 const humanizeDuration = require('humanize-duration');
 exports.run = async(client, message, args, aliases) => {
  let prefix = db.get(`pref_${message.guild.id}`) || "v."
  
  let afk = new db.table("afks"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first()
  if(mentioned) {
    let status = await afk.fetch(mentioned.id)
    if(status) {
      const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`This user (${mentioned.user.tag}) is AFK: **${status}**`)
      message.channel.send(embed).then(i => i.delete({timeout: 5000}))
    }
  }
   if(authorStatus) {
     const embed = new Discord.MessageEmbed()
     .setColor("GREEN")
     .setDescription(`**${message.author.tag}** is no longer AFK.`)
     message.channel.send(embed).then(k => k.delete({timeout: 5000}))
     afk.delete(message.author.id)
   }
  if (message.author.bot) return;
  if (message.content.startsWith(prefix)) {
    let messageArray = message.content.split(" "),
     cmd = messageArray[0],
     args = messageArray.slice(1),
     commandfile = client.commands.get(cmd.slice(prefix.length)) || client.aliases.get(cmd.slice(prefix.length));
  
if(commandfile) { 
  const cooldown = cooldowns.get(message.author.id);
  if (cooldown) {
  const remaining = humanizeDuration(cooldown - Date.now());
  return message.channel.send({embed: { description: `Please wait **${remaining}** before reusing commands again!`, color: "BLUE"}})
    .catch(console.error);
}
  cooldowns.set(message.author.id, Date.now() + 5000);
  setTimeout(() => cooldowns.delete(message.author.id), 5000);
  commandfile.run(client, message, args);
  }
 }
 }