const {SlashCommandBuilder} = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder().setName("cum").setDescription("*cums*"),
    async execute(interaction) {
        var randomreact = Math.floor(Math.random() * 5);

        if(randomreact == 0)
        {
            interaction.reply("https://cdn.discordapp.com/attachments/699655292601892865/817523336006598656/20210218_145352.png");
        }
        else if(randomreact == 1)
        {
            interaction.reply("https://cdn.discordapp.com/attachments/905744108214185985/925418611550597150/unknown.png");
        }
        else if(randomreact == 2)
        {
            interaction.reply("https://cdn.discordapp.com/attachments/905744108214185985/925420398391205898/a96a359bef3a95add30e5eba7636ee83f956dd2570a12bb4cb1f27a62f3dd5c3_1.png");
        }
        else if(randomreact == 3)
        {
            interaction.reply("https://cdn.discordapp.com/attachments/905744108214185985/925420579060862986/97a027f6c22d10714b6d5a89aa125a74ae1aebe6c8fc8f2d062dee568eb4900a_1.png");
        }
        else if(randomreact == 4)
        {
            interaction.reply("https://cdn.discordapp.com/attachments/905744108214185985/925420743871856661/t1nv536j63n71.png");
        }
    }
}