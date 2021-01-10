const moment = require('moment');
const path = require('path')
require('moment-timezone');
const { MessageEmbed } = require('discord.js');
const config = require("./../commandConfig");
const co = config.serverCommand
const filterLevels = {
  DISABLED: 'オフ',
  MEMBERS_WITHOUT_ROLES: 'ロールなしのみ',
  ALL_MEMBERS: '全員'
};
const verificationLevels = {
  NONE: 'なし',
  LOW: '低',
  MEDIUM: '中',
  HIGH: '高',
  VERY_HIGH: '最高'
};

module.exports = {
      name:'server',
      aliases:co.aliases,
      description: co.description,
      ownerOnly:co.ownerOnly,
      disabled:co.disabled,
      cooldown:co.cooldown,
    
  
  async execute(msg) {
    if (!msg.guild.members.cache.has(msg.guild.ownerID)) await msg.guild.members.fetch(msg.guild.ownerID);
    const embed = new MessageEmbed()
      .setColor(config.serverCommand.embedColor)
      .setThumbnail(msg.guild.iconURL({ format: 'jpg' }))
      .addField('サーバー名', msg.guild.name, true)
      .addField('サーバーID', msg.guild.id, true)
      .addField('サーバー作成日', moment(msg.guild.createdAt).tz("Asia/Tokyo").format('MM/DD/YYYY h:mm A'), true)
      .addField('オーナー名', msg.guild.owner.user.tag, true)
      .addField('ブースト数', msg.guild.premiumSubscriptionCount || 0, true)
      .addField('サーバーレベル', msg.guild.premiumTier ? `Tier ${msg.guild.premiumTier}` : 'None', true)
      .addField('国', msg.guild.region.toUpperCase(), true)
      .addField('メッセージフィルター', filterLevels[msg.guild.explicitContentFilter], true)
      .addField('認証レベル', verificationLevels[msg.guild.verificationLevel], true)
      .addField('メンバー数', msg.guild.memberCount, true)
      .addField('ロール数', msg.guild.roles.cache.size, true)
      .addField('チャンネル数', msg.guild.channels.cache.filter(channel => channel.type !== 'category').size, true);
    return msg.channel.send(embed);
  }
};
