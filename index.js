require("dotenv").config()
const fs = require("fs")
const { Client, Collection} = require("discord.js")

const client = new Client({intents: []})
client.commands = new Collection()

const commandfiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))


commandfiles.forEach(commandfile =>
{
    const command = require(`./commands/${commandfile}`)
    client.commands.set(command.data.name, command)
})




client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.user.setActivity({name: "Choros", type: "PLAYING"})
})


client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if(command) {
        console.log(command)
        try {
            await command.execute(interaction)
        } catch(error) {
            console.error(error)

            if(interaction.deferred || interaction.replied) {
                interaction.editReply("An Error occured while trying to execute the command")
            }
            else {
                interaction.reply("An Error occured while trying to execute the command")
            }
        }
    }
})


client.login(process.env.token)