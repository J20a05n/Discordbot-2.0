const {SlashCommandBuilder} = require("@discordjs/builders")
const fetch = require('node-fetch');
const tenorapi = process.env.tenorapi
module.exports = {
    data: new SlashCommandBuilder().setName("gif").setDescription("Sends a gif"),
    async execute(interaction) {
        
        /*const msg = interaction.options.data
        console.log(`${msg} trigger`)
        //tokens.split(" ")
        let keywords = 'cursed'
        if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join(" ")
        }
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${tenorapi}`
        let response = await fetch(url)
        let json = await response.json()
        const index = Math.floor(Math.random() * json.results.length)
        interaction.reply(json.results[index].url)*/
    }
}