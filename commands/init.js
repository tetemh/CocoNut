const Discord = require("discord.js");
const fs = require("fs");
const excel = require("excel4node");

module.exports = {
    name: "init",
    description: "Init Bot for this server",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,

    async run(bot, message, args, db) {
        let query =
            await db.query(`CREATE TABLE IF NOT EXISTS ${message.guild.id}_config
        (
            id INT PRIMARY KEY NOT NULL,
            slug VARCHAR(255),
            value LONGTEXT
        )`);

        db.query(`INSERT INTO log (server_id, message) VALUES (${message.guild.id}, 'init DB')`)

        await message.reply("Bot Init");
    },
};
