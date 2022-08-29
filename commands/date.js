const {SlashCommandBuilder} = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder().setName("date").setDescription("Sends current date and time"),
    async execute(interaction) {
        const currentDate = new Date();
        interaction.reply(currentDate.toLocaleString())
    }
}