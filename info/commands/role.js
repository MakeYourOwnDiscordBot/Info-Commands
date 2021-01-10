const { Command } = require('discord-akairo');
const moment = require('moment');
require('moment-timezone');
const { MessageEmbed } = require('discord.js');
const config = require('./../commandConfig')
const co = config.roleCommand;
module.exports = {
      name:'role',
			aliases:co.aliases,
			description: 'ロール情報を表示\n使用方法: !role <@role>\n!role <role ID>',
			


	execute(msg,args,client) {
    	const role = msg.guild.roles.cache.get(args[0]) || msg.mentions.roles.first();
		const embed = new MessageEmbed()
			.setColor(role.hexColor)
			.addField('ロール名', role, true)
      .addField('カラーコード', role.hexColor.toUpperCase(), true)
			.addField('ロールID', role.id, true)
			.addField('作成日', moment(role.createdAt).tz("Asia/Tokyo").format('MM/DD/YYYY h:mm A'), true)
			.addField('表示役職？', role.hoist ? 'Yes' : 'No', true)
			.addField('メンション可能？', role.mentionable ? 'Yes' : 'No', true)
      .addField('権限', role.permissions.toArray()|| 'None');
	msg.channel.send(embed);
	}
};