const Discord = require('discord.js')

module.exports = {
    name: "log",
    description: "All options for log",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    options: [
        {
            type: "string",
            name: "argument",
            description: "spécial aegument",
            required: true
        }
    ],

    async run(bot, message, args, bd) {
        console.log(args._hoistedOptions[0].value);
        let subCommand = args._hoistedOptions[0].value
        if(subCommand == 'status'){
            // let query = await db.query(`INSERT INTO `)
        }
    },
};
