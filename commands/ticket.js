const Discord = require("discord.js");

module.exports = {
    name: "ticket",
    description: "Base command for creating a ticket",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    options: [
        {
            type: "string",
            name: "args",
            description: "Argument for the command",
            required: false,
        },
        {
            type: "string",
            name: "id",
            description: "id for the command",
            required: false,
        },
    ],

    async run(bot, message, args, db) {
        if (typeof args._hoistedOptions[0] !== "undefined") {
            switch (args._hoistedOptions[0].value) {
                case "init":
                    await db.query(`CREATE TABLE IF NOT EXISTS ${message.guild.id}_tickets
                    (
                        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                        channel_id LONGTEXT NOT NULL,
                        user_id LONGTEXT NOT NULL
                    )`);

                    await message.reply("Ticket init");
                    break;

                case "setCategory":
                    if (typeof args._hoistedOptions[1] !== "undefined") {
                        await db.query(
                            `INSERT INTO ${message.guild.id}_config (slug, value) VALUES ('ticketsCategory', '${args._hoistedOptions[1].value}') ON DUPLICATE KEY UPDATE value = ${args._hoistedOptions[1].value}`
                        );
                        await message.reply("Ticket category set");
                    } else {
                        await message.reply(
                            "Veuillez renseigner un channel id"
                        );
                    }
                    break;
            }
        } else {
            db.query(
                `SELECT value FROM ${message.guild.id}_config WHERE slug = 'ticketsCategory'`,
                async (err, query) => {
                    if (query.length < 1) {
                        await message.reply(
                            `Veuillez d'abord définir une category avec le \`/ticket setCategory { CategoryId }\``
                        );
                    } else {
                        message.guild.channels
                            .create({
                                name: `ticket-${message.user.username}`,
                                type: Discord.ChannelType.GuildText,
                                parent: query[0].value,
                            })
                            .then((channel) => {
                                message.reply(
                                    `Ticket Créer avec le nom <#${channel.id}>`
                                );
                            })
                            .catch((err) => {
                                message.reply(
                                    `Veuillez d'abord redéfinir une category avec le \`/ticket setCategory { CategoryId }\` car celle donner au part avant n'existe plus`
                                );
                            });
                    }
                }
            );
        }
    },
};
