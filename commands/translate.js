const { MessageEmbed } = require('discord.js');
const translate = require('@k3rn31p4nic/google-translate-api');
module.exports = {
  name: "translate",
  description: "translating",
  aliases: ["tra", "tr"],
  run: async (bot, message, args) => {

    try {
      if (args.length < 2) {
        return message.channel.send("\`v.translate <country> <text>\`")
      }

      const result = await translate(args.slice(1).join(' '), { to: args[0] });

      const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Translating`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`Previous Text:\n\`${args.slice(1).join(" ")}\`\n\nTranslate:\n\`${result.text}\``)
        .setFooter(`Request ${message.author.tag}`);
      message.channel.send({ embed });
    } catch (err) {
      return message.channel.send(`Error ${err}`);
    }
}
}