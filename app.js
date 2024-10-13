const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '8108579276:AAGFGOjQR7J7feyi9iSoTkFRKyjsZpzmaIs';
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === '/start') {
        bot.sendMessage(chatId, 'Welcome! Click the button below to open the web app:', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Open App',
                            web_app: {
                                url: 'https://zl1khan-training.online/'
                            }
                        }
                    ]
                ]
            }
        });
    }
});
