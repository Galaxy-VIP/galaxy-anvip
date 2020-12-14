const { MessageEmbed } = require('discord.js')
const Kitsu = require('kitsu.js')
const kitsu = new Kitsu()

module.exports = {
  name: "Anime", 
  description: "Search Anime",
  usage: "v.anime <name anime>",
  aliases: ["searchanime"],
  run: async (client, message, args) => {
    var search = message.content.split(/\s+/g).slice(1).join(" ")
    if(!args[0]) return message.channel.send("Please specify the anime movie")
    kitsu.searchAnime(search).then(async result => {
      if(result.length === 0) return message.channel.send("This is not valid anime movie")
      
      let anime = result[0]
      const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
      .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
      .addField(`❯ Information`, `**╔ Name:** ${anime.titles.romaji}\n**║ Age Rating:** ${anime.ageRating}\n**╚ NSFW?:** ${anime.nsfw ? 'True' : 'False'}`, true)
      .addField(`❯ Statistic`, `**╔ Average Rating:** ${anime.averageRating}\n**║ Rank By Rating:** ${anime.ratingRank}\n**╚ Rank Popularity**: ${anime.popularityRank}`, true)
      .addField(`❯ Status`, `**╔ Episode:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n**║ Anime Start Date:** ${anime.startDate}\n**╚ Anime End Date:** ${anime.endDate ? anime.endDate : "Still airing"}`)
      .setThumbnail(anime.posterImage.original, 100, 200)
      .setFooter(`Request ${message.author.tag}`)
      .setTimestamp()
      return message.channel.send(embed)
    }).catch(err => {
      console.log(err)
      return message.channel.send(`Could't find result ${search}`)
    })
  }
}