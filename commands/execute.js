const Discord = require("discord.js");
const choice = ["🚫"]
const bot = new Discord.Client();
const { exec } = require('child_process');
module.exports = { 
  name: "execute", 
  description: "-",
  usage: "v.execute <code>", 
  aliases: ["exec"],
  run: async (client, message, args) => {
        if(message.author.id !== "671351376642834440") return message.channel.send("Only bot owner can use this command")

        const code = args.join(' ');
		if (!code) return message.channel.send('?');
		exec(code, (error, stdout, stderr) => {
			const input = `\`\`\`Bash\n${code}\n\`\`\``;
			if (error) {
				let output = `\`\`\`Bash\n${error}\n\`\`\``;
				const embed = new Discord.MessageEmbed()
					.setTitle('Executed Error')
					.addField('Input', input)
					.addField('Error', output)
					.setColor("GREEN")
        .setFooter("React to delete message.")
			   return message.channel.send(embed).then(m => {
             m.react("🚫")
        
         const filter = (rect, usr) => choice.includes(rect.emoji.name) && usr.id === message.author.id;
    m.createReactionCollector(filter, { time: 600000, max: 1 }).on("collect", async col => {
      if (col.emoji.name === "🚫") return m.delete();
    })
         })
			} else {
				const output = stderr || stdout;
				const output2 = `\`\`\`Bash\n${output}\n\`\`\``;
				const embed = new Discord.MessageEmbed()
					.setTitle('Executed Success')
					.addField('Input', input)
					.addField('Output', output2)
					.setColor("GREEN")
          .setFooter("React to delete message.")
				return message.channel.send(embed).then(m => {
          m.react("🚫")
        
         const filter = (rect, usr) => choice.includes(rect.emoji.name) && usr.id === message.author.id;
    m.createReactionCollector(filter, { time: 600000, max: 1 }).on("collect", async col => {
      if (col.emoji.name === "🚫") return m.delete();
    })
        })
      }
    })
}
}