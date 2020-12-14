const discord = require("discord.js");
module.exports = {
  name: "slowmode",
  description: "Set slowmode to a channel",
  usage: "v.slowmode <number>",
  aliases: ["sw", "slowm"],
  cooldown: "0",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You don't have permissions \`MANAGE_MESSAGES\`").then(m => m.delete ({ timeout: 5000}))
    var num = args.join(" ");
    var cdwn = message.channel.rateLimitPerUser;
    if (isNaN(args))
      return message.reply(
        "How can i set slowmode to a value which isn't even a number? F"
      );
    if (num > 1000)
      return message.channel.send(
        "You cannot set slowmode to more than `1000` seconds."
      );
    if (!num) {
      message.channel.send(
        `Current slowmode for this channel is \`${cdwn}\` seconds.`
      );
    } else {
      message.channel.setRateLimitPerUser(num).then(() => {
        message.channel.send(`Slowmode changed to \`${num}\` seconds.`);
      });
    }
  }
};
 