const Discord = require("discord.js");

module.exports = {
    name: "init",
    description: "Init Bot for this server",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,

    async run(bot, message, args, db) {
        await db.query(`CREATE TABLE IF NOT EXISTS ${message.guild.id}_config
        (
            slug VARCHAR(255) UNIQUE NOT NULL,
            value LONGTEXT
        )`);

        await db.query(`CREATE TABLE IF NOT EXISTS ${message.guild.id}_log
        (
            id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
            server_id LONGTEXT NOT NULL,
            value LONGTEXT
        )`);

        db.query(`INSERT INTO ${message.guild.id}_log (server_id, value) VALUES (${message.guild.id}, 'init DB')`)

        await message.reply("Bot Init");
    },
};
