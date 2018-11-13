const initialize = bot => {
  bot.setPersistentMenu([
    {
      type: "postback",
      title: "Help",
      payload: "PERSISTENT_MENU_HELP"
    },
    {
      type: "web_url",
      title: "Go to Website",
      url: "http://hp.com"
    },
    {
      title: "More",
      type: "nested",
      call_to_actions: [
        {
          type: "postback",
          title: "Subscribe",
          payload: "PERSISTENT_MENU_SUBSCRIBE"
        },
        {
          type: "postback",
          title: "Unsubscribe",
          payload: "PERSISTENT_MENU_UNSUBSCRIBE"
        }
      ]
    }
  ]);
};
module.exports = {
  initialize
};
