const ms = require('ms');

module.exports = {
    name: "giveaway",
    usage: "v.giveaway <#channel> <timer> <winner> <prize>",
    description: "Start giveaway",

    async run(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to start giveaway lmao");

        let channel = message.mentions.channels.first();

        if (!channel) return message.channel.send('Please provide a channel');

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Pleae provide a valid duration');

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Please provide a valid number of winners!');

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send('Ok then, I\'ll give away nothing');

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: message.author.id,
            messages: {
                giveaway: "🎉🎉 GIVEAWAY 🎉🎉",
                giveawayEned: "🎉🎉GIVEAWAY ENDED🎉🎉",
                timeRemaining: "Time remaining: **{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "Congrats {winners}, you won **{prize}**",
                embedFooter: "Giveaway time!",
                noWinner: "Couldn't determine a winner",
                hostedBy: `Hosted by: <@${message.author.id}>`,
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        })

        message.channel.send(`<a:HyperTada:767331062531227649> Giveaway starting in channel ${channel}`);
    }
}