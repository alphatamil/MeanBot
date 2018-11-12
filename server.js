// config should be imported before importing any other file
const config = require("./server/config/config");
const BootBot = require("./server/config/BootBot");

require("./server/config/mongoose");

const bot = new BootBot({
  accessToken: config.accessToken,
  verifyToken: config.verifyToken,
  appSecret: config.appSecret
});

bot.on("message", (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

bot.start(config.port);
