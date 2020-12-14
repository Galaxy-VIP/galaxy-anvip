const db = require('quick.db')
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission ```ADMINISTRATOR```")
  let data = db.get(`pref_${message.guild.id}`)
  if(args[0] === 'default') {
    await db.delete(`pref_${message.guild.id}`)
    return message.channel.send("Prefix set to default \`v.\`")
  }
  let pr = args.join(" ")
  if(!pr) return message.channel.send("Please input new prefix")
  
  db.set(`pref_${message.guild.id}`, pr)
  return message.channel.send(`Prefix set to \`${pr}\``)
}