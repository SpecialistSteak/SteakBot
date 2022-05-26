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
    if (message.content == "$STEAK"){
        message.reply(':cut_of_meat: :cut_of_meat: :cut_of_meat: :cut_of_meat: :cut_of_meat: :cut_of_meat: :cut_of_meat: :cut_of_meat: :cut_of_meat: ')
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "$help"){
        message.reply('$howgay, $help, $ping, $STEAK')
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "$howgay"){
        message.reply("You are 100% gay")
    }
})

client.on("messageCreate", (message) => {
    if(message.content.includes("Keep your voice down!")){
        message.reply("Shut the actual fuck up")
    }
    else if(message.content.includes("I'm Dad!")){
        message.reply("Go die in a ditch")
    }
    else if(message.content.includes("dont")){
        message.reply("don't")
    }
    else if(message.content.includes("arent")){
        message.reply("aren't")
    }
    else if(message.content.includes("cant")){
        message.reply("can't")
    }
    else if(message.content.includes("couldnt")){
        message.reply("couldn't")
    }
    else if(message.content.includes("didnt")){
        message.reply("didn't")
    }
    else if(message.content.includes("doesnt")){
        message.reply("doesn't")
    }
    else if(message.content.includes("hadnt")){
        message.reply("hadn't")
    }
    else if(message.content.includes("hasnt")){
        message.reply("hasn't")
    }
    else if(message.content.includes("havent")){
        message.reply("haven't")
    }
    else if(message.content.includes("hed")){
        message.reply("he'd")
    }
    else if(message.content.includes("hes")){
        message.reply("he's")
    }
    else if(message.content.includes("id ") && message.content.includes("did") == false){
        message.reply("I'd")
    }
    else if(message.content.includes("ill ")){
        message.reply("I'll")
    }
    else if(message.content.includes("ive")){
        message.reply("I've")
    }
    else if(message.content.includes("isnt")){
        message.reply("isn't")
    }
    else if(message.content.includes("lets")){
        message.reply("let's")
    }
    else if(message.content.includes("mightnt")){
        message.reply("mightn't")
    }
    else if(message.content.includes("mustnt")){
        message.reply("mustn't")
    }
    else if(message.content.includes("shant")){
        message.reply("shan't")
    }
    else if(message.content.includes("shes")){
        message.reply("she's")
    }
    else if(message.content.includes("shouldnt")){
        message.reply("shouldn't")
    }
    else if(message.content.includes("thats")){
        message.reply("that's")
    }
    else if(message.content.includes("theres")){
        message.reply("there's")
    }
    else if(message.content.includes("theyd")){
        message.reply("they'd")
    }
    else if(message.content.includes("theyll")){
        message.reply("they'll")
    }
    else if(message.content.includes("theyve")){
        message.reply("they've")
    }
    else if(message.content.includes("wed")){
        message.reply("we'd")
    }
    else if(message.content.includes("were")){
        message.reply("we're")
    }
    else if(message.content.includes("weve")){
        message.reply("we've")
    }
    else if(message.content.includes("werent")){
        message.reply("weren't")
    }
    else if(message.content.includes("whatll")){
        message.reply("what'll")
    }
    else if(message.content.includes("whatre")){
        message.reply("what're")
    }
    else if(message.content.includes("whats")){
        message.reply("what's")
    }
    else if(message.content.includes("whatve")){
        message.reply("what've")
    }
    else if(message.content.includes("wheres")){
        message.reply("where's")
    }
    else if(message.content.includes("whod")){
        message.reply("who'd")
    }
    else if(message.content.includes("wholl")){
        message.reply("who'll")
    }
    else if(message.content.includes("whos")){
        message.reply("who's")
    }
    else if(message.content.includes("whove")){
        message.reply("who've")
    }
    else if(message.content.includes("wont")){
        message.reply("won't")
    }
    else if(message.content.includes("wouldnt")){
        message.reply("wouldn't")
    }
    else if(message.content.includes("youd")){
        message.reply("you'd")
    }
    else if(message.content.includes("youll")){
        message.reply("you'll")
    }
    else if(message.content.includes("youve")){
        message.reply("you've")
    }
    else if(message.content.includes("its ")){
        message.reply("it's")
    }
    else if(message.content.includes("im ")){
        message.reply("I'm")
    }
    else if(message.content.includes("there")){
        message.reply("their")
    }
    else if(message.content.includes("their")){
        message.reply("they're")
    }
    else if(message.content.includes("theyre")){
        message.reply("there")
    }
    else if(message.content.includes("theyre")){
        message.reply("they're")
    }
    else{}
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