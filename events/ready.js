const Discord = require("discord.js");
const slashCommands = require("../loaders/slashCommands");
const loaderDataBase = require("../loaders/database");
const interactionCreate = require("./interactionCreate");

module.exports = async (bot) => {
    bot.db = await loaderDataBase();
    let db = bot.db;

    db.connect(() => {
        console.log(`DataBase Connected`);
    });

    let query =
        await db.query(`CREATE TABLE IF NOT EXISTS log
        (
            id INT PRIMARY KEY NOT NULL,
            server_id INT(11) NOT NULL,
            value LONGTEXT
        )`);

    await slashCommands(bot);

    console.log(`${bot.user.tag} are online`);
};
