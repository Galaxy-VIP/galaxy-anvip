const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "npm",
  description: "Npm",
  category: "everyone",
  run: async (client, message, args) => {
    const query = args.join(" ");
    if(!query) return message.channel.send("Invalid argument, please use v.npmsearch \`input\`")
    const data = await fetch(
      `http://registry.npmjs.com/-/v1/search?text=${query}&size=10`
    ).then((res) => res.json());

    const foundPackages = data.objects
      .map(({ package: pkg }) => `[${pkg.name}](${pkg.links.npm})`)
      .join("\n");
    const embed = new MessageEmbed()
      .setTitle("NPM Search")
      .setColor("BLUE")
      .setFooter(`Request ${message.author.username}`)
      .setTimestamp()
      .setDescription(`Results: \n**${foundPackages}**`);
    message.channel.send({ embed });
  },
};
