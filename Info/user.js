const { Command } = require('discord-akairo');
const moment = require('moment-timezone');
const { Client ,MessageEmbed } = require('discord.js');
const { trimArray,trimValue } = require('../../util/Util');
const config = require("./commandConfig");
const co = config.userCommand;
const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	PARTNERED_SERVER_OWNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	EARLY_VERIFIED_DEVELOPER: 'Early Verified Bot Developer'
};
const deprecated = ['DISCORD_PARTNER', 'VERIFIED_DEVELOPER'];

module.exports = class UserCommand extends Command {
	constructor() {
		super('user', {
			aliases: co.aliases,
			description: 'ユーザーの情報を取得\n使用方法:!user <@user>\n!user <user ID>',
      ownerOnly:co.ownerOnly,
      userPermissions:co.userPermissions,
			args: [
				{
					id: 'member',
					type: 'user',
					default: msg => msg.author
				}
			]
		});
	}

	async exec(msg,args){
    const user = args.member;
	const userFlags = user.flags ? user.flags.toArray().filter(flag => !deprecated.includes(flag)) : [];
		const embed = new MessageEmbed()
			.setThumbnail(user.displayAvatarURL())
			.setAuthor(user.tag)
			.addField('アカウント作成日', moment(user.createdAt).tz("Asia/Tokyo").format('MM/DD/YYYY h:mm A'), true)
			.addField('ID', user.id, true)
			.addField('Bot?', user.bot ? 'Yes' : 'No', true)
			.addField('ユーザーフラッグ', userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None');
		if (msg.guild) {
			try {
				const member = await msg.guild.members.fetch(user.id);
				const defaultRole = msg.guild.roles.cache.get(msg.guild.id);
				const roles = member.roles.cache
					.filter(role => role.id !== defaultRole.id)
					.sort((a, b) => b.position - a.position)
					.map(role => role.name);
				embed
					.addField('サーバー入室日', moment(member.joinedAt).tz("Asia/Tokyo").format('MM/DD/YYYY h:mm A'), true)
					.addField('最高ロール',	member.roles.highest.id === defaultRole.id ? 'None' : member.roles.highest.name, true)
					.addField('表示ロール', member.roles.hoist ? member.roles.hoist.name : 'None', true)
					.addField(`ロール(${roles.length})`,trimValue(`<@&${msg.guild.member(user)._roles.join('> <@&')}>`)||'None')
          .addField(`権限`,member.permissions.toArray())
					.setColor(member.displayHexColor);
			} catch {
				embed.setFooter('Failed to resolve member, showing basic user information instead.');
			}
		}
		return msg.channel.send(embed);
	}
};
