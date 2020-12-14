module.exports = {
  name: "Fake Hack", 
  description: "Fake hack user", 
  usage: "v.fakehack <mention user>", 
  run: async (client, message, args) => {
    const { MessageEmbed } = require('discord.js')
    let email = ["lmao@gmail.com", "fakehack@gmail.com", "anonymoushack@gmail.com", "doggy@gmail.com", "likesmen@gmail.com", "likesmymom@hotmail.com", "@mydadleftme.net", "@agirlkissedme.com", "@ihaveacrushonmommy.com", "isfat@yahoo.com", "@CEOofSIMP.net", "@hasacrushonfuel.com", "@poopman.net", "ikesdogs@gmail.com", "likescars@gmail.com", "justfarted@gmail.com"]
    let emailrandom = Math.floor(Math.random() * email.length)
    let ip = ["123.282.1", "328.21.3", "773.44.1", "127.8.1", "106.1.66"]
    let iprandom = Math.floor(Math.random() * ip.length)
    let pass = ["v**a", "a**s**i*", "**2*2**9*0", "**22***88***0", "9***2****", "**17****919*s***8*1"]
    let passr = Math.floor(Math.random () * pass.length)
    let member = message.mentions.members.first()
    if(!member) return message.channel.send("Mentions user first")
    let wait = await message.channel.send({embed: { title: "Hacking Progress 5% [▀▀]", description: `Hacking ${member.displayName} please wait`, color: "BLUE"}})
    let embed = new MessageEmbed()
    .setAuthor(`Data ${member.displayName}`)
    .addField("Hacked", member.displayName)
    .addField("Email", email[emailrandom])
    .addField("Password:", `\`${pass[passr]}\``)
    .addField("IP", ip[iprandom])
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(`Hacked By ${message.author.username} | No System Is Safe`)
    setTimeout(function() {
      wait.edit({embed: { title: "Hacking Progress 13% [▀▀▀▀]", description: `Find Email ${member.displayName}`, color: "BLUE"}})
    }, 3000)
    setTimeout(function() {
      wait.edit({embed: { title: "Hacking Progress 28% [▀▀▀▀▀▀]", description: `Email: ${email[emailrandom]}`, color: "BLUE"}})
    }, 6000)
    setTimeout(function() {
      wait.edit({embed: { title: "Hacking Progress 50% [▀▀▀▀▀▀▀▀]", description: `Password: \`${pass[passr]}\``, color: "BLUE"}})
    }, 12000)
    setTimeout(function () { 
      wait.edit({embed: { title: "Hacking Progress 78% [▀▀▀▀▀▀▀▀▀▀]", description: `Collecting all data ${member.displayName}`, color: "BLUE"}})
    }, 15000)
    setTimeout(function() {
      wait.edit({embed: { title: "Hacking Progress 100% [▀▀▀▀▀▀▀▀▀▀▀▀]", description: `Successfully hacked ${member.displayName}`, color: "BLUE"}})
    }, 18000)
    setTimeout(function() {
      wait.edit(embed)
    }, 20000)
  }
}