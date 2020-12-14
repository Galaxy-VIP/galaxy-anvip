const { canModifyQueue } = require("../util/EvobotUtil");
const db = require('quick.db')
module.exports = {
  name: "remove",
  description: "Remove song from the queue",
  run(client, message, args) {
    const prefix = db.get(`pref_${message.guild.id}`) || "v."
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send({embed: { description: "There is no queue.", color: "BLUE"}}).catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.channel.send({embed: { description: `${prefix}${message.client.prefix}remove <Queue Number>`, color: "RED"}});
    if (isNaN(args[0])) return message.channel.send({embed: { description: `${prefix}remove <Queue Number>`, color: "RED"}});

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ removed **${song[0].title}** from the queue.`);
  }
};