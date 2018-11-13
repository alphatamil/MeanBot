const user = require("./user");

const init = (payload, chat) => {
  chat.getUserProfile().then(async profile => {
    await chat.say(`Hello, ${profile.first_name}! Welcome to HP Assist.`);
    let userPayload = {
      firstName: profile.first_name,
      lastName: profile.last_name,
      profilePicture: profile.profile_pic,
      timezone: profile.timezone,
      locale: profile.locale,
      gender: profile.gender
    };
    user.saveUser(userPayload, profile.id);
    chat.say(`I'll help you to find the right cartridge for your Printer`);
    chat.conversation(convo => {
      convo
        .sendTypingIndicator(1000)
        .then(() => user.askSubscribe(convo, chat));
    });
  });
};

module.exports = {
  init
};
