const { MessageEmbed } = require('discord.js')
const api = require('novelcovid')

exports.run = async (client, message, args) => {
  api.settings({
    baseUrl: 'https://disease.sh'
  })
  if(!args[0]) return message.channel.send("Wrong Argument please use \`v.covid global or <country>\`")
  if(args[0] == 'global'){
    let corona = await api.all()
    let embed = new MessageEmbed()
    .setColor("RED")
    .setTitle("**GLOBAL CASES**")
    .addField("Total Cases", corona.cases.toLocaleString())
    .addField("Total Deaths", `${corona.deaths.toLocaleString()} (${((corona.deaths / corona.cases) * 100).toFixed(2)}%)`, true)
    .addField("Total Recovered", `${corona.recovered.toLocaleString()} (${((corona.recovered / corona.cases) * 100).toFixed(2)}%)`, true)
    .addField("Cases Today", `${corona.todayCases.toLocaleString()} (${((corona.todayCases / corona.cases) * 100).toFixed(2)}%)`, true)
    .setThumbnail("https://awsimages.detik.net.id/visual/2020/04/03/c4ac2442-bc17-4785-8032-24ebf2c81421_169.jpeg?w=360&q=90")
    .addField("Deaths Today", `${corona.todayDeaths.toLocaleString()} (${((corona.todayDeaths / corona.cases) * 100).toFixed(2)}%)`, true)
    .addField("Active", `${corona.active.toLocaleString()} (${((corona.active / corona.cases) * 100).toFixed(2)}%)`, true)
    .setFooter(`Request ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
  }
  else {
    api.settings({
      baseUrl: 'https://disease.sh'
    })
    let country = args.join(' ')
    let corona = await api.countries({country: `${country}`})
    let embed = new MessageEmbed()
    .setTitle(`#${corona.countryInfo._id} **${corona.country}** / **${corona.countryInfo.iso2}**`)
    .setColor("BLUE")
    .setFooter(`Request ${message.author.tag}`)
    .setThumbnail(corona.countryInfo.flag)
    .setTimestamp()
    .addField("Total Cases", corona.cases.toLocaleString())
    .addField("Total Deaths", `${corona.deaths.toLocaleString()} (${((corona.deaths / corona.cases) * 100).toFixed(2)}%)`, true)
    .addField("Total Recovered", `${corona.recovered.toLocaleString()} (${((corona.recovered / corona.cases) * 100).toFixed(2)}%)`, true)
    .addField("Cases Today", `${corona.todayCases.toLocaleString()} (${((corona.todayCases / corona.cases) * 100).toFixed(2)}%)`, true)
    .addField("Deaths Today", `${corona.todayDeaths.toLocaleString()} (${((corona.todayDeaths / corona.cases) * 100).toFixed(2)}%)`, true)
    .addField("Active", `${corona.active.toLocaleString()} (${((corona.active / corona.cases) * 100).toFixed(2)}%)`, true)
    message.channel.send(embed)
  }
}
