const mongoose = require("mongoose");
const config = require("./config");

// connect to mongo db
const mongoUri = config.mongo.URI;
mongoose
  .connect(
    mongoUri,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.log(err);
  });
