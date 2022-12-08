const Discord = require("discord.js");
const {
    SlashCommandBuilder,
    PermissionsBitField,
    EmbedBuilder,
} = require("discord.js");

module.exports = {
    name: "embed",
    description: "return embed",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    /*
    options: [
        {
            type: "string",
            name: "channel",
            description: "Send Channel",
            required: false,
        },
        {
            type: "string",
            name: "title",
            description: "Embed title",
            required: true,
        },
        {
            type: "string",
            name: "subtitle",
            description: "Embed subtitle",
            required: false,
        },
        {
            type: "string",
            name: "color",
            description: "Embed color",
            required: false,
        },
        {
            type: "string",
            name: "footer",
            description: "Embed footer",
            required: false,
        },
    ],
    */

    async run(bot, message, args) {
        /*
        console.log(args._hoistedOptions);
        var options = args._hoistedOptions;
        var channel = options[0];
        var title = options[1];
        var subtitle = options[2];
        var color = options[3];

        const exampleEmbed = new EmbedBuilder()
            .setTitle(title)
            .setURL("https://discord.js.org/")
            .setAuthor({
                name: "Some name",
                iconURL: "https://i.imgur.com/AfFp7pu.png",
                url: "https://discord.js.org",
            })
            .setDescription("Some description here")
            .setThumbnail("https://i.imgur.com/AfFp7pu.png")
            .addFields(
                { name: "Regular field title", value: "Some value here" },
                { name: "\u200B", value: "\u200B" },
                {
                    name: "Inline field title",
                    value: "Some value here",
                    inline: true,
                },
                {
                    name: "Inline field title",
                    value: "Some value here",
                    inline: true,
                }
            )
            .addFields({
                name: "Inline field title",
                value: "Some value here",
                inline: true,
            })
            .setImage("https://i.imgur.com/AfFp7pu.png")
            .setTimestamp()
            .setFooter({
                text: "Some footer text here",
                iconURL: "https://i.imgur.com/AfFp7pu.png",
            });
        typeof color !== "undefined" ? exampleEmbed.setColor(color) : null;
        channel.send({ embeds: [exampleEmbed] });
        var member = args._hoistedOptions[0].value;
        await message.reply({ embeds: [exampleEmbed] });
        await bot.channels.cache.get(channel).send({ embeds: [exampleEmbed] });
        */
    },
};
