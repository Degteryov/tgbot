var TelegramBot = require('node-telegram-bot-api');
var token = '519266219:AAGKnHRZzMGyVtUVJjYG0ddHD0Ll_D8pyAQ';
var bot = new TelegramBot(token, {polling: true});
var notes = [];
bot.onText(/привет!/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];
    var time = match[2];
	
    notes.push( { 'uid':userId, 'time':time, 'text':text } );
	
    bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
	console.log('af');
});

