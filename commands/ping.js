const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    name: "ping",
    description: "return ping in ms",
    permission: null,
    dm: true,

    async run(bot, message) {
        await message.reply(
            `Ping : \`${bot.ws.ping}\``
        );
    },
};
