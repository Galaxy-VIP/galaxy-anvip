module.exports = {
  canModifyQueue(member) {
    const { channelID } = member.voice;
    const botChannel = member.guild.voice.channelID;

    if (channelID !== botChannel) {
      member.channel.send({embed: { color: "GREEN", description: "You need to join the voice channel first!"}}).catch(console.error);
      return;
    }

    return true;
  }
};