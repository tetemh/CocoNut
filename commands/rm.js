const Discord = require("discord.js");

module.exports = {
    name: "rm",
    description: "Remove current channel",
    permission: Discord.PermissionFlagsBits.ManageChannels,
    dm: false,
    options: [
        {
            type: "string",
            name: "args",
            description: "Argument for the command",
            required: false,
        },
    ],

    async run(bot, message, args, db) {
        if (typeof args._hoistedOptions[0] !== "undefined") {
            if(args._hoistedOptions[0].value == "-R"){
                let parent = message.guild.channels.cache.get(message.guild.channels.cache.get(message.channel.id).parentId)
                // parent.children.forEach(channel => console.log(channel))
                message.guild.channels.cache.forEach(channel => {
                    if(channel.parentId == parent.id){
                        channel.delete()
                    }
                })
                message.guild.channels.cache.get(message.guild.channels.cache.get(message.channel.id).parentId).delete()
            }
        } else {
            message.guild.channels.cache.get(message.channel.id).delete();
            await message.reply("Channel supprimer");
        }
    },
};
