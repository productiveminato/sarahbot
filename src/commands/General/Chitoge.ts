/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "dexxy",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://telegra.ph/file/54c0e60ba5e57ab2757f6.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `⚡ *Dexxy* ⚡\n\n🍀 *Description: A WhatsApp Bot With Rich NSFW features made by Allygator.*\n\n🌐 *OFFICIAL BOT URL: https://github.com/ShineiIchijo/chitoge* \n\n 📒 *Guide: https://github.com/ShineiIchijo/chitoge-Guides* \n\n 👾 *BOT URL:https://github.com/DexterGlitch/Dexxy/* \n`,
			}
		);
	};
}
