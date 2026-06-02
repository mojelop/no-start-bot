const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) { console.error("TELEGRAM_BOT_TOKEN not set"); process.exit(1); }

const bot = new TelegramBot(token, { polling: true });
console.log("Bot started");

bot.onText(/\/start/, (msg) => {
  const name = msg.from?.first_name || "رفیق";
  bot.sendMessage(msg.chat.id, `${name}، استارت نزن! 🚫`);
  console.log("Replied to /start from", msg.chat.id);
});

bot.on("polling_error", (err) => console.error("Polling error:", err.message));
