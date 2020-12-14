const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "loop",
  aliases: ['l'],
  description: "Toggle music loop",
  run: async (client, message) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send({embed: { description: "There is nothing playing.", color: "RED"}}).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`🔁 Loop is now ${queue.loop ? "**on**" : "**off**"}`)
      .catch(console.error);
  }
};