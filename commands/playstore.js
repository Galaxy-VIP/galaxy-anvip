const Discord = require("discord.js");
const PlayStore = require("google-play-scraper");

module.exports = {
  name: "Playstore",
  aliases: ["pstore", "googleplaystore", "ps"],
  usage: "v.playstore <application name>",
  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send({embed: { description: "Example: v.playstore pubg", color: "BLUE"}})

    PlayStore.search({
      term: args.join(" "),
      num: 1
    }).then(Data => {
      let ps;

      try {
        ps = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send({embed: { description: "Application not found, try again", color: "YELLOW"}})
      }

      let Embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(ps.icon)
        .setURL(ps.url)
        .setTitle(`${ps.title}`)
        .setDescription(ps.summary)
        .addField(`⚙️ Developer`, ps.developer, true)
        .addField(`🗂️ Application ID`, ps.appId, true)
        .addField(`💵 Price`, ps.priceText, true)
        .addField(`🥉 Score`, ps.scoreText, true)
        .setFooter(ps.title)
        .setTimestamp();

      return message.channel.send(Embed);
    });
  }
};
