import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class InfoCommand extends BaseCommand {
  constructor() {
    super('info', 'Infomation', []);
  }

  async run(client: DiscordClient, message: Message,) {

      const user = message.mentions.users.first();
      
      if(user) {
        const embed = new MessageEmbed()
        .setColor(0x0074a8)
        .addFields(
          {
            name: `Name`,
            value: user.username,
            inline: true,
          },
          {
            name: `ID`,
            value: user.id,
            inline: true,
          }
        )
        .addFields(
          {
            name: `Bot`,
            value: user.bot,
            inline: true,
          },
          {
            name: `Profile Avatar`,
            value: `[Avatar](${user.avatarURL()})`,
            inline: true,
          },
          {
            name: `Tag`,
            value: user.tag,
            inline: true,
          },
        )
        .addFields(
          {
            name: `Profile`,
            value: `<@!${user.id}>`,
            inline: true,
          },

        )
        .addFields(
          {
            name: `Account created`,
            value: user.createdAt,
          },

        )
        .setThumbnail(
          user.avatarURL()
        )
        .setFooter(`Requeted by ${user.username}`, user.avatarURL());
      message.channel.send(embed);
      } else {
        const embed = new MessageEmbed()
        .setColor(0x0074a8)
        .addFields(
          {
            name: `Name`,
            value: message.author.username,
            inline: true,
          },
          {
            name: `ID`,
            value: message.author.id,
            inline: true,
          }
        )
        .addFields(
          {
            name: `Bot`,
            value: message.author.bot,
            inline: true,
          },
          {
            name: `Profile Avatar`,
            value: `[Avatar](${message.author.avatarURL()})`,
            inline: true,
          },
          {
            name: `Tag`,
            value: `${message.author.tag}`,
            inline: true,
          },
        )
        .addFields(
          {
            name: `Profile`,
            value: `<@!${message.author.id}>`,
            inline: true,
          },

        )
        .addFields(
          {
            name: `Account created`,
            value: message.author.createdAt,
          },

        )
        .setThumbnail(
          message.author.avatarURL()
        )
        .setFooter(`Requeted by ${message.author.username}`, message.author.avatarURL());
      message.channel.send(embed);
      }
  }
}