const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Change volume of currently playing music",
  run(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("You need to join a voice channel first!").catch(console.error);

    if (!args[0]) return message.reply({embed: { description: `🔊 The current volume is: **${queue.volume}%**`, color: "GREEN"}}).catch(console.error);
    if (isNaN(args[0])) return message.reply("Please use a number to set volume.").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.channel.send({embed: { description: "Please use a number between 0 - 100.", color: "BLUE"}}).catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send({embed: { description: `🔊 Volume set to: **${args[0]}%**`, color: "GREEN"}}).catch(console.error);
  }
};