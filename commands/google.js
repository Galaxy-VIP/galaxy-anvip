const Discord = require('discord.js')
const request = require("node-superfetch")

module.exports = {
  name: "Google", 
  description: "Search Google",
  usage: "v.google <query>",
  run: async (client, message, args) => {
    if(!message.channel.nsfw) return message.channel.send("This command can only be used on NSFW channels") 
    let googlekey = "your-google-key"
    let csx = "your-google-csx"
    let query = args.join(" ")
    let result;
    
    if(!query) return message.channel.send("Please enter the query")
    
    let href = await search(query)
    if(!href) return message.channel.send("Unknown search")
    
    const embed = new Discord.MessageEmbed()
    .setTitle(href.title)
    .setDescription(href.snippet)
    .setURL(href.link)
    .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
    .setColor("GOLD")
    .setFooter(`Request ${message.author.tag}`)
    .setTimestamp()
    return message.channel.send(embed)
    async function search(query) {
      const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
        key: googlekey, cx: csx, safe: "off", q: query
      });
      if(!body.items) return null;
      return body.items[0]
    }
  }
}
