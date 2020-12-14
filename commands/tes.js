const { get } = require('node-superfetch'); // we use get to get the image url 
const { Canvas } = require("canvas-constructor"); // first require Canvas, you will have to download the module using [ npm i canvas-constructor]
// there is many versions you can use, for me I use version @3.2.0 but don't worry it's all the same you can read the docs at --> https://canvasconstructor.js.org/ 
// if you want to install my version just do [ npm i canvas-constructor@3.2.0 ]

// that's how you get a path to ur custom fonts, for example i have my custom fonts in folders called assets/fonts/font-name0 
const { MessageAttachment } = require("discord.js") // we just want to const the MessageAttachment so we can use to send the image

const background = 'https://i.pinimg.com/originals/ed/80/25/ed8025e329b7985036365c1cdfe9ac30.jpg' // this is the background I'm going to use for the welcome image 
// lets get started 





module.exports = {
    config: {
        name: "canvas",
        description: "canvas",
        accessableby: "Bot Owner",
        type: "owner",
        aliases: [],
        usage: `canvas`
    },
    run: async(bot, message, args) => {

        // first lets add some variables to the message

        let WELCOME_MESSAGE_TITLE = `WELCOME`; // you can change that for whatever you want 
        let WELCOME_MESSAGE_TEXT = `You are our ${message.guild.members.cache.size}th member!`; // same for this

        // now lets create the canvas function

        // I like to use try and catch for my commands, you don't have to but it's always better to catch the errors.
        try {

            async function createCanvas() { // here we create the canvas function and make sure it's a async function.
            
                var imageUrlRegex = /\?size=2048$/g;
                var AUTHOR_NAME = message.author.username; // as I said before I like to use variables for everything, this one is for the user name. example: @Sphinix
                var AUTHOR_TAG = message.author.tag; // this one is for the user tag. example: @Sphinix#0001
                var AUTHOR_TAG_LENGTH = AUTHOR_TAG.length > 10 ? AUTHOR_TAG.substring(0, 12) + ".." : AUTHOR_TAG; // with this you can set a limit for the length so if the user tag is longer than 10 characters it's gonna cut the name and add .. to it ,you don't have to include that
                var AUTHOR_NAME_LENGTH = AUTHOR_NAME.length > 10 ? AUTHOR_NAME.substring(0, 12) + ".." : AUTHOR_NAME; // same thing for the user name
                var { body: avatar } = await get(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }).replace(imageUrlRegex, "?size128")); // this is gonna be the user avatar
                var { body: defaultbackground } = await get(background); // this is gonna be the background we have at line 15

                return new Canvas(820, 360) 
                    .addImage(defaultbackground, 0, 0, 820, 360)  
                    .addRoundImage(avatar, 335, 35, 150, 150, 150 / 2) 
                  
                    .setTextAlign('center')
                    .setTextFont('bold 25px impact') 
                    .setColor("#FF0000")
                    .addText(WELCOME_MESSAGE_TITLE, 410.6, 228.1)
           
                   .addText(WELCOME_MESSAGE_TEXT, 410.6, 276.1)
                    .toBuffer() 
            }

            // now lets send the attachment to the channel !

            let FIRST_MESSAGE = await message.channel.send('**Please wait**'); // you don't have to include this in the welcome message, but I did that for other uses such as [ profile, rank ]

            const SECOND_MESSAGE = `**Welcome test**`; // this is gonna be the message above the canvas, same thing you don't have to include this.
            const attachment = new MessageAttachment(await createCanvas(), 'welcome.png') // now lets const the canvas that we created !
            message.channel.send(SECOND_MESSAGE).then(async msg => await msg.channel.send(attachment)).then(FIRST_MESSAGE.delete({ timeout: 1 }))

        } catch (e) {
            message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later.`); // you can replace message.channel.send with console.log if you don't to get the error message in the channel
        }

    }

};