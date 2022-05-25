const Discord = require("discord.js")

const TOKEN = "OTc5MDQyMDU5NTM1MTIyNDQy.GdjeYQ.wWMR9l7DSe2Exl3NvIMO82JH9jgRRVfkUJ4fBU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hi")
    }
})

client.login(TOKEN)