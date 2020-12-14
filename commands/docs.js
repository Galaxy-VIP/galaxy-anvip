  
const fetch = require('node-fetch');

module.exports = {
    name: "docs",
    aliases: ["dcs"],

    async run(client, message, args, tools) {

const query = args.join(' ')
if(!query) return message.channel.send("Invalid argument, v.docs \`input\`")

const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;

fetch(url)

    .then(res => res.json())
    .then(embed => {

        if (embed && !embed.error) {

            message.channel.send({ embed });
        } else {

            message.reply(`No Such Result Found for **"${query}"**`);
        }
    })
    .catch(e => {

        console.error(e);
        message.channel.send('Failed');
    })
}
}
