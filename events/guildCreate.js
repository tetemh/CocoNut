const Discord = require("discord.js");

module.exports = async (bot, guild) => {
    let db = bot.db;
    await db.query(`CREATE TABLE IF NOT EXISTS ${guild.id}_config
        (
            slug VARCHAR(255) UNIQUE NOT NULL,
            value LONGTEXT
        )`);

    await db.query(`CREATE TABLE IF NOT EXISTS ${guild.id}_log
        (
            id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
            server_id LONGTEXT NOT NULL,
            value LONGTEXT
        )`);

    db.query(
        `INSERT INTO ${guild.id}_log (server_id, value) VALUES (${guild.id}, 'init DB')`
    );
};
