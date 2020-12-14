const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: "Skip the currently playing song",
  run(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.channel.send({embed: { description: "There is nothing playing that I could skip for you.", color: "RED"}}).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send({embed: { description: `⏭ skipped the song`, color: "BLUE"}}).catch(console.error);
  }
};