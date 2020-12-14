const fetch = require("superagent");
const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
fetch.get("https://some-random-api.ml/img/cat").then(x => {
    const catEmbed = new MessageEmbed()
    .setColor("BLUE")
    .setAuthor("Cat", x.body.link)
    .setImage(x.body.link);
    message.channel.send(catEmbed);
});
}