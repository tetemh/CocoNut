const Discord = require('discord.js')
const slashCommands = require('../loaders/slashCommands')

module.exports = async (bot) => {

    await slashCommands(bot)

    console.log(`${bot.user.tag} are online`)    
}