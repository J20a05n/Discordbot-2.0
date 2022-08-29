const {SlashCommandBuilder} = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder().setName("hi").setDescription("Im a Wizard"),
    async execute(interaction) {
        interaction.reply("Im a Wizard!")
    }
}