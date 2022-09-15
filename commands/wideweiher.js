const {SlashCommandBuilder} = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder().setName("wideweiher").setDescription("wide"),
    async execute(interaction) {
        interaction.reply("https://cdn.discordapp.com/attachments/905744108214185985/1019942209421840396/unknown.png")
    }
}