const Discord = require('discord.js')
const config = require("../config");
const {
    EmbedBuilder, ApplicationCommandOptionWithChoicesAndAutocompleteMixin
} = require("discord.js");
const log = require('../commands/log');

module.exports = async (bot, interaction) => {
    const db = bot.db

    if(interaction.type == Discord.InteractionType.ApplicationCommand){
        let command = require(`../commands/${interaction.commandName}`)
        command.run(bot, interaction, interaction.options, bot.db)
    }

    
    db.query(`INSERT INTO log (server_id, message) VALUES (${interaction.guild.id}, '${interaction.user.username}: '${interaction.commandName})`)
}