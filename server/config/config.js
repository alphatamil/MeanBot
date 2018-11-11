// dotenv will load vars in .env in PROCESS.ENV
require("dotenv").config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.SERVER_PORT,
  mongo: {
    URI: `${process.env.MONGO_HOST}${encodeURIComponent(
      process.env.MONGO_USER
    )}:${encodeURIComponent(process.env.MONGO_PASS)}@${
      process.env.MONGO_DATASET
    }.${process.env.MONGO_PROVIDER}:${process.env.MONGO_PORT}/${
      process.env.APP
    }_${process.env.NODE_ENV}`
  },
  accessToken: process.env.FB_ACCESS_TOKEN,
  verifyToken: process.env.FB_VERIFY_TOKEN,
  appSecret: process.env.FB_APP_SECRET
};

module.exports = config;
