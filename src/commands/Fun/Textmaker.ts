import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'textmaker',
            description: 'Displays the textmaker menu',
            category: 'fun',
            usage: `${client.config.prefix}textmaker`,
            aliases: ['tlist']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/NvYI5wQNfgUAAAPo/nakano-yotsuba-pout.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `
「text maker command

💠3dchrome ༄
💠3ddeepsea ༄
💠3dgradient ༄
💠3drealistic ༄
💠3dt ༄
💠berry ༄
💠blood ༄
💠bokeh ༄
💠bp ༄
💠chocolate ༄
💠cloud ༄
💠devil ༄
💠glitch ༄
💠harrypotter ༄
💠holographic ༄
💠horror ༄
💠loveneon ༄
💠lovewall ༄
💠luxury ༄
💠magma ༄
💠rainbow ༄
💠snow ༄
💠snowc ༄
💠thunder ༄
💠advanceglow ༄
💠balloon ༄
💠blackmetal ༄
💠bluegem ༄
💠bluejewl ༄
💠bluesparkl ༄
💠bronzeglitter ༄
💠captain ༄
💠cgraffiti ༄
💠circuit ༄
💠dglass ༄
💠dropwater ༄
💠equalizer ༄
💠fiction ༄
💠gavtar ༄
💠gbluemetal ༄
💠goldglitter ༄
💠gradient ༄
💠icetext ༄
💠lgsliced ༄
💠marbleslab ༄
💠mataldgold ༄
💠matrix ༄
💠mgalaxy ༄
💠pb ༄
💠pencil ༄
💠pinkglitter ༄
💠purplegem ༄
💠purpleglass ༄
💠purpleglitter ༄
💠purplejewl ༄
💠redjewl ༄
💠redsparkl ༄
💠silverjewl ༄
💠silvertext ༄
💠spacetext ༄
💠tneon ༄
💠transformer ༄
💠underwater ༄
💠watercolor ༄
💠wgraffiti ༄
💠yellowjewl ༄
💠firework༄```
\n`,
			}
		);
	};
}
