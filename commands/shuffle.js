const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "shuffle",
  description: "Shuffle queue",
  run(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send({embed: { description: "There is no queue.", color: "BLUE"}}).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    let songs = queue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    queue.songs = songs;
    message.client.queue.set(message.guild.id, queue);
    queue.textChannel.send({embed: { description: `[<@${message.author.id}>] 🔀 shuffled the queue`, color: "GREEN"}}).catch(console.error);
  }
};
