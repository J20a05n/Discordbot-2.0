const {SlashCommandBuilder} = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder().setName("botversion").setDescription("Current version of Wizard"),
    async execute(interaction) {
        var botversion = "0.0.2"
        interaction.reply(`The current version of Wizard is **${botversion}**`)
    }
}