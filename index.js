const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})
//say $speakitalian and have them send some italicized text with a copypasta
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content.toLowerCase() == "hi"){
        message.reply("HELLO")
    }
    else if (message.content.toLowerCase() == "wassup"){
        message.reply("HELLO")
    }
    else if (message.content.toLowerCase() == "yo"){
        message.reply("HELLO")
    }
    else if (message.content.toLowerCase() == "hey"){
        message.reply("HELLO")
    }
    else if (message.content.toLowerCase() == "kms"){
        message.reply("HELLO")
    }
    else{}
})

client.on("messageCreate", (message) => {
    if (message.content == "$help"){
        message.reply('$howgay, hi, $help, $ping')
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "$howgay"){
        message.reply("You are 100% gay")
    }
})

client.on("messageCreate", (message) => {
    if(message.content == "$ping"){
        const timeTaken = Math.abs(Date.now() - message.createdTimestamp);
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
      }
})

const welcomeChannelId = "979058758577713212"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)