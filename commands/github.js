const Discord = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");

module.exports = {
  name: "github",
  description: "github user profile",
  usage: "v.github <user>",
  aliases: ["ghb", "gb"],
  run: async (client, message, args) => {
    const user = args.slice(0).join(" ")

    if(!user) return message.channel.send("Enter a username github")
    
    const gh = await fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(json => {
      if(json.bio = null ) json.bio = `No Bio`
      if(json.twitter_username === null) json.twitter_username = `${user} doesn't have twitter`
      
      const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle(json.login)
      .setThumbnail(json.avatar_url)
      .addField("❯ ID", json.id)
      .addField("❯ Bio", json.bio)
      .addField("❯ Follower", json.followers)
      .addField("❯ Following", json.following)
      .addField("❯ Public Repos", json.public_repos)
      .addField("❯ Twitter", json.twitter_username)
      .setFooter(json.login)
      .setTimestamp()
      .addField("❯ Account Created", moment(json.created_at).utcOffset("+0000").format("LLLL"))
      message.channel.send(embed)
    })
    .catch(err => {
      message.channel.send(`User ${user} not found`)
    })
  }
}
 