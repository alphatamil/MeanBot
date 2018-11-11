// config should be imported before importing any other file
const config = require("./config/config");
const BootBot = require("./config/BootBot");

require("./config/mongoose");

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
