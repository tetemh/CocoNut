const Discord = require('discord.js')

module.exports = async (bot, message) => {
    if(message.content === '%ping') return bot.commands.get('ping').run(bot, message)
}