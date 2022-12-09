// const Discord = require("discord.js");

// module.exports = {
//     name: "rm",
//     description: "Remove current channel",
//     permission: Discord.PermissionFlagsBits.ManageChannels,
//     dm: false,
//     options: [
//         {
//             type: "string",
//             name: "args",
//             description: "Argument for the command",
//             required: false,
//         },
//     ],

//     async run(bot, message, args, db) {
//         if (typeof args._hoistedOptions[0] !== "undefined") {
//             if (args._hoistedOptions[0].value == "-R") {
//                 let parent = message.guild.channels.cache.get(
//                     message.guild.channels.cache.get(message.channel.id)
//                         .parentId
//                 );
//                 message.guild.channels.cache.forEach((channel) => {
//                     if (channel.parentId == parent.id) {
//                         channel.delete();
//                     }
//                 });
//                 message.guild.channels.cache
//                     .get(
//                         message.guild.channels.cache.get(message.channel.id)
//                             .parentId
//                     )
//                     .delete();
//             }
//         } else {
//             message.guild.channels.cache.get(message.channel.id).delete();
//         }
//     },
// };

const Discord = require("discord.js");

module.exports = {
    name: "channel",
    description: "Command for Manage Channel",
    permission: Discord.PermissionFlagsBits.ManageChannels,
    dm: false,
    options: [
        {
            type: "string",
            name: "args",
            description: "Argument for the command",
            required: true,
        },
        {
            type: "string",
            name: "args_2",
            description: "2 Argument for the command",
            required: false,
        },
    ],

    async run(bot, message, args, db) {
        if (typeof args._hoistedOptions[0] !== "undefined") {
            switch (args._hoistedOptions[0].value) {
                case "delete":
                    if (
                        typeof args._hoistedOptions[1] !== "undefined" &&
                        args._hoistedOptions[0].value == "all"
                    ) {
                        let parent = message.guild.channels.cache.get(
                            message.guild.channels.cache.get(message.channel.id)
                                .parentId
                        );
                        message.guild.channels.cache.forEach((channel) => {
                            if (channel.parentId == parent.id) {
                                channel.delete();
                            }
                        });
                        message.guild.channels.cache
                            .get(
                                message.guild.channels.cache.get(
                                    message.channel.id
                                ).parentId
                            )
                            .delete();
                    } else {
                        message.guild.channels.cache
                            .get(message.channel.id)
                            .delete();
                    }
                    break;
            }
        } else {
            await message.reply(`ERROR`);
        }
    },
};
