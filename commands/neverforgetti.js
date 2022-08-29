const {SlashCommandBuilder} = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder().setName("neverforgetti").setDescription("9/11"),
    async execute(interaction) {
        interaction.reply("https://cdn.discordapp.com/attachments/699655292601892865/886012887116677170/selfie_1.png")
    }
}