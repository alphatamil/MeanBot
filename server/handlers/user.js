const profile = require("../controllers/fbuser.controller");

const saveUser = (user, userId) => {
  profile.createuser(user, userId);
};

const askSubscribe = (convo, chat) => {
  chat.say({
    text:
      "But before that, Do you wish to stay in stouch with our products and services?",
    quickReplies: ["Yeah,Sure", "Nope"]
  });
};

module.exports = {
  saveUser,
  askSubscribe
};
