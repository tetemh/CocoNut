const Discord = require("discord.js");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Ban User",
    permission: Discord.PermissionFlagsBits.BanMembers,
    dm: false,
    options: [
        {
            type: "user",
            name: "member",
            description: "give member",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "reason",
            description: "Reason for Ban",
            required: false,
            autocomplete: false
        },
    ],

    async run(bot, message, args) {
        try {
            var user = await bot.users.fetch(args._hoistedOptions[0].value);
            if (!user) return message.reply("Nothing member to ban");
            var member = message.guild.members.cache.get(user.id);

            var reason = args.get('reason').value
            reason = (!reason ? 'No reason to provide' : reason)
            // console.log(message.member.roles.highest.comparePositionTo(member.roles.highest) < 0);

            if(message.user.id === user.id) return message.reply('Please do not ban yourself')
            if((await message.guild.fetchOwner()).id === user.id)  return message.reply('Please do not ban the owner')
            if(member && !member.bannable) return message.reply('This memebre is not bannable')
            if(member && message.member.roles.highest.comparePositionTo(member.roles.highest) < 0) return message.reply('You don\'t have permission')
            if((await message.guild.bans.fetch()).get(user.id)) return message.reply('This member is already banned')

            try { await user.send(`You are banned of ${message.guild.name} by ${message.user.tag} for \`${reason}\``) } catch (error) {}

            await message.reply(`${message.user} have ban ${user.tag} for \`${reason}\``)
            await message.guild.bans.create(user.id, {reason: reason})
        
        } catch (error) {
            await message.reply("Nothing member to ban");
        }
    },
};
