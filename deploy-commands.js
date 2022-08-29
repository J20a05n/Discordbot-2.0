require("dotenv").config()
const fs = require("fs")
const {REST} = require("@discordjs/rest")
const {Routes} = require("discord-api-types/v9")
const commands = []

const commandfiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))


commandfiles.forEach(commandfile =>
{
    const command = require(`./commands/${commandfile}`)
    commands.push(command.data.toJSON())
})

const restClint = new REST({version: "9"}).setToken(process.env.token)



restClint.put(Routes.applicationGuildCommands(process.env.app_id, process.env.guild_id),
{body: commands})
.then(() => console.log("Sucessfully registered command"))
.catch(console.error)