// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate
import { GuildChannel, TextChannel, MessageEmbed } from "discord.js";
import BaseEvent from "../utils/structures/BaseEvent";
import DiscordClient from "../client/client";
export default class ChannelCreateEvent extends BaseEvent {
  constructor() {
    super("channelCreate");
  }

  async run(client: DiscordClient, channel: GuildChannel) {
    const logChannel = client.channels.cache.get("783798291342032906");

    if (
      !((logChannel): logChannel is TextChannel => logChannel.type === "text")(
        logChannel
      )
    )
      return;

    const creator = await channel.guild
      .fetchAuditLogs()
      .then((audit) => audit.entries.first());

    const embed = new MessageEmbed()
      .setColor(0x0074a8)
      .setTitle("New channel")
      .setDescription(`The channel **${channel.name}** has been created`)
      .addFields(
        {
          name: "Created by",
          value: `<@!${creator.executor.id}>`,
          inline: true,
        },
        {
          name: "Parent",
          value: channel.parent,
          inline: true,
        },
      )
      .addFields({
        name: "Created on",
        value: channel.createdAt,
      },)
    logChannel.send(embed);
  }
}
