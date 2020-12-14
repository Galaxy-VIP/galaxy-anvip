const discord = require("discord.js")

exports.run = async (client, message, args) => {
  let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let week = Math.floor(totalSeconds / 604800);
    totalSeconds %= 604800;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} Day(s), ${hours} Hour(s), ${minutes} Minute(s), ${seconds} Second(s)`;

    let serverembed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("🌻 Bot Uptime")
        .addField('Uptime', uptime);

    message.channel.send(serverembed);

}