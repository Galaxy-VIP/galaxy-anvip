const { canModifyQueue } = require("../util/EvobotUtil");


module.exports = {
  name: "stop",
  description: "Stops the music",
  run(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.channel.send({embed: { description: "There is nothing playing.", color: "RED"}}).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send({embed: { descriptio: `[<@${message.author.id}>] ⏹ stopped the music!`, color: "BLUE"}}).catch(console.error);
  }
};