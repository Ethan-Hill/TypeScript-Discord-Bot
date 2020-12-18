import { Message, TextChannel } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";

export default class ClearCommand extends BaseCommand {
  constructor() {
    super("clear", "Moderation", []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const amount = parseInt(args[0]);

    if (!amount) {
      message.reply("Please input a number between 2 and 100");
    } else if (amount >= 2 && amount < 100) {
      (message.channel as TextChannel).bulkDelete(amount);
    }
  }
}
