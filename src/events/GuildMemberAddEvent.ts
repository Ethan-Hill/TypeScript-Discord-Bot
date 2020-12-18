// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
import { GuildMember, TextChannel,MessageEmbed } from 'discord.js';
import BaseEvent from '../utils/structures/BaseEvent';
import DiscordClient from '../client/client';

export default class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client: DiscordClient, member: GuildMember) {
    const channel = member.guild.channels.cache.get('783786829849165834')

    if (!((channel): channel is TextChannel => channel.type === 'text')(channel)) return;

    const embed = new MessageEmbed()
        .setColor(0x0074a8)
        .setDescription(`Welcome to ${member.guild.name} <@!${member.id}>`)

    channel.send(embed)

    
  }
}