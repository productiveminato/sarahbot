/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "kurumi",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/8heDapvk6LEAAAPo/kurumi-kurumi_tokisaki.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `⚡ *ღ♡| ᴋᴜʀᴜᴍɪ ツ* ⚡\n\n🍀 *Description: A WhatsApp Bot With Rich NSFW features made by 𝙈𝙞𝙣𝙖𝙩𝙤 𝙫𝙞 𝙗𝙧𝙞𝙩𝙖𝙣𝙣𝙞𝙖.* 💖About the creator:- NORMAL MF* \n`,
			}
		);
	};
}
