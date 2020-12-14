const { canModifyQueue } = require("../util/EvobotUtil");
const db = require('quick.db')
module.exports = {
  name: "skipto",
  aliases: ["st"],
  description: "Skip to the selected queue number",
  run(client, message, args) {
    const prefix = db.get(`pref_${message.guild.id}`) || "v."
    if (!args.length)
      return message
        .channel.send({embed: { description: `${prefix}${module.exports.name} <Queue Number>`, color: "BLUE"}})
        .catch(console.error);

    if (isNaN(args[0]))
      return message
        .reply(`Usage: ${message.client.prefix}${module.exports.name} <Queue Number>`)
        .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send({embed: { description: "There is no queue.", color: "RED"}}).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (args[0] > queue.songs.length)
      return message.channel.send({embed: { description: `The queue is only ${queue.songs.length} songs long!`, color: "YELLOW"}}).catch(console.error);

    queue.playing = true;
    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
    queue.connection.dispatcher.end();
    queue.textChannel.send({embed: { description: `[<@${message.author.id}>] ⏭ skipped ${args[0] - 1} songs`, color: "GREEN"}}).catch(console.error);
  }
};
