const Discord = require("discord.js");

module.exports = {
    name: "clearmessage",
    description: "Clear message in channel",
    permission: Discord.PermissionFlagsBits.ManageChannels,
    dm: false,
    options: [
        {
            type: "string",
            name: "number",
            description: "Number of message to clear",
            required: false,
        },
    ],

    async run(bot, message, args, db) {
        if (typeof args._hoistedOptions[0] !== "undefined") {
            message.channel.bulkDelete(Number(args._hoistedOptions[0].value));
            await message.reply(`${args._hoistedOptions[0].value} message${(args._hoistedOptions[0].value == 1 ? '' : 's')} have been well deleted !`);
        } else {
            message.channel.bulkDelete(100);
            await message.reply("100 messages have been well deleted ");
        }
        setTimeout(() => message.channel.bulkDelete(1), 3000);
    },
};
