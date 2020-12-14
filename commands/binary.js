const Discord = require('discord.js')
module.exports = {
  name: "Binary",
  description: "-",
  usage: "v.binary <encode/decode>",
  run: async (client, message, args) => {
    if(!args[0]) return message.channel.send("Please choose the method first, \`encode\` or \`decode\`")
    
    let choice = ["encode", "decode"]
    if (!choice.includes(args[0].toLowerCase())) return message.channel.send("Please choose the method first, \`encode\` or \`decode\`")
    
    let text = args.slice(1).join(" ")
    if(!text) return message.channel.send("Please input some text")
    
    if(text.lenth > 1024) return message.channel.send("The maximum character was 1,024")
  
    function encode(char) {
      return char.split("").map(str => {
        const converted = str.charCodeAt(0).toString(2)
        return converted.padStart(8, "0");
      }).join(" ")
    }
    function decode(char) {
      return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
    };
    if(args[0].toLowerCase() === 'encode') {
      return message.channel.send(encode(text));
    } else if (args[0].toLowerCase() === 'decode') {
      return message.channel.send(decode(text));
    }
  }
}