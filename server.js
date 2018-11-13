// config should be imported before importing any other file
const config = require("./server/config/config");
const BootBot = require("./server/config/BootBot");
const init = require("./server/init");
const handler = require("./server/handlers");
require("./server/config/mongoose");

const bot = new BootBot({
  accessToken: config.accessToken,
  verifyToken: config.verifyToken,
  appSecret: config.appSecret
});

/** To initialise the bot with get started and Persistent menu
 * @param {Object} bot Instance
 **/
init.initialize(bot);

bot.on("postback:PERSISTENT_MENU_HELP", (payload, chat) => {
  chat.say(`I'm here to help!`);
});

bot.on("postback:PERSISTENT_MENU_SUBSCRIBE", (payload, chat) => {
  chat.say(`You Have successfully Subscribed`);
});
bot.on("postback:PERSISTENT_MENU_UNSUBSCRIBE", (payload, chat) => {
  chat.say(`You Have successfully UnSubscribed`);
});

/** User First Interaction with Bot on clicking Get Started
 * @param {Object} payload Return object from the webhook
 * @param {Object} chat Instance
 **/
bot.setGetStartedButton((payload, chat) => {
  handler.init(payload, chat);
});

const askFavoriteFood = convo => {
  convo.ask(`What's your favorite food?`, (payload, convo, data) => {
    const text = payload.message.text;
    convo.set("food", text);
    convo
      .say(`Got it, your favorite food is ${text}`)
      .then(() => askGender(convo));
  });
};

const askGender = convo => {
  convo.ask(
    convo => {
      const buttons = [
        { type: "postback", title: "Male", payload: "GENDER_MALE" },
        { type: "postback", title: "Female", payload: "GENDER_FEMALE" },
        {
          type: "postback",
          title: "I don't wanna say",
          payload: "GENDER_UNKNOWN"
        }
      ];
      convo.sendButtonTemplate(`Are you a boy or a girl?`, buttons);
    },
    (payload, convo, data) => {
      const text = payload.message.text;
      convo.set("gender", text);
      convo.say(`Great, you are a ${text}`).then(() => askAge(convo));
    },
    [
      {
        event: "postback",
        callback: (payload, convo) => {
          convo.say("You clicked on a button").then(() => askAge(convo));
        }
      },
      {
        event: "postback:GENDER_MALE",
        callback: (payload, convo) => {
          convo.say("You said you are a Male").then(() => askAge(convo));
        }
      },
      {
        event: "quick_reply",
        callback: () => {}
      },
      {
        event: "quick_reply:COLOR_BLUE",
        callback: () => {}
      },
      {
        pattern: ["yes", /yea(h)?/i, "yup"],
        callback: () => {
          convo.say("You said YES!").then(() => askAge(convo));
        }
      }
    ]
  );
};

const askAge = convo => {
  convo.ask(`Final question. How old are you?`, (payload, convo, data) => {
    const text = payload.message.text;
    convo.set("age", text);
    convo.say(`That's great!`).then(() => {
      convo.say(`Ok, here's what you told me about you:
      - Name: ${convo.get("name")}
      - Favorite Food: ${convo.get("food")}
      - Gender: ${convo.get("gender")}
      - Age: ${convo.get("age")}
      `);
      convo.end();
    });
  });
};

bot.hear("color", (payload, chat) => {
  chat.say({
    text: "Favorite color?",
    quickReplies: ["Red", "Blue", "Green"]
  });
});

bot.hear("image", (payload, chat) => {
  chat.say({
    attachment: "image",
    url:
      "http://static3.gamespot.com/uploads/screen_medium/1365/13658182/3067965-overwatch-review-promo-20160523_v2.jpg",
    quickReplies: ["Red", "Blue", "Green"]
  });
});

bot.hear("button", (payload, chat) => {
  chat.say({
    text: "Select a button",
    buttons: ["Male", "Female", `Don't wanna say`]
  });
});

bot.hear("convo", (payload, chat) => {
  chat.conversation(convo => {
    convo.ask(
      {
        text: "Favorite color?",
        quickReplies: ["Red", "Blue", "Green"]
      },
      (payload, convo) => {
        const text = payload.message.text;
        convo.say(`Oh your favorite color is ${text}, cool!`);
        convo.end();
      },
      [
        {
          event: "quick_reply",
          callback: (payload, convo) => {
            const text = payload.message.text;
            convo.say(
              `Thanks for choosing one of the options. Your favorite color is ${text}`
            );
            convo.end();
          }
        }
      ]
    );
  });
});

bot.start(config.port);
