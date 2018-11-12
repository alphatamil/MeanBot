// dotenv will load vars in .env in PROCESS.ENV
require("dotenv").config();

const env = process.env.NODE_ENV;
const config = {};

switch (env) {
  case "production":
    break;

  case "staging":
    break;

  case "development":
    config.fbAppId = "1905247309588530";
    config.messengerURL = "m.me/286115808688710";
    config.accessToken =
      "EAAbEzZCUY6DIBAK9UWlJlpkY7R6TccqZBCJdqHcBc4BLzH5E5ml0zuGWEgiwZBjqPG1HRuvDQixEhG4QP8I6C2l7m10yv5DAd1MJbHOF0csHYAJOlUBU18YVoATlCcxqDD55Gfzb1ZA34iB11NjbpFzEvXx14hCfuGvCzHgzjN4EzLvdKvf8";
    config.appSecret = "65dcbed8386a94d54519079d7d41efd0";
    break;

  case "local":
    config.fbAppId = "341290289760839";
    config.messengerURL = "m.me/286115808688710";
    config.accessToken =
      "EAAE2ZAtZA8ikcBAKQvZCrzfHHlxPXZBG0OZBGJ3bF8xGjcvZBQo0ZCxAbuXEVQwLswdFwMkuIW9mawS6nxAUK1CoYWQ6Pw2iZAWbEnojqEQh5V8KZBeysoaDsrlKWjKFrnI5LEo0MZCB2F8R0k0pOZCA2O5FB9j1RmZAc0baqqSCof0ZC7otjcrZCIcOty";
    config.appSecret = "4a47bf8eec80f63856d52d388219a924";
    break;

  default:
    config.fbAppId = "341290289760839";
    config.messengerURL = "m.me/286115808688710";
    config.accessToken =
      "EAAE2ZAtZA8ikcBAKQvZCrzfHHlxPXZBG0OZBGJ3bF8xGjcvZBQo0ZCxAbuXEVQwLswdFwMkuIW9mawS6nxAUK1CoYWQ6Pw2iZAWbEnojqEQh5V8KZBeysoaDsrlKWjKFrnI5LEo0MZCB2F8R0k0pOZCA2O5FB9j1RmZAc0baqqSCof0ZC7otjcrZCIcOty";
    config.appSecret = "4a47bf8eec80f63856d52d388219a924";
    break;
}

config.env = env;
config.port = process.env.APP_PORT;
config.mongouri = `${process.env.MONGO_PREFIX}${encodeURIComponent(
  process.env.MONGO_USER
)}:${encodeURIComponent(process.env.MONGO_PASS)}@${process.env.MONGO_HOST}/${
  process.env.APP
}-${env}?ssl=true&replicaSet=krds-sg-shard-0&authSource=admin`;
config.verifyToken = process.env.FB_VERIFY_TOKEN;

module.exports = config;
