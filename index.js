const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const config = require('./config')

const loaderCommand = require('./loaders/commands')
const loaderEvent = require('./loaders/events')

bot.commands = new Discord.Collection()

bot.login(config.token)

loaderCommand(bot)
loaderEvent(bot)