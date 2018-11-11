const path = require("path");
const express = require("express");
const httpError = require("http-errors");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes/index.route");
const app = express();
const config = require("./config");

const distDir = "../../dist/";

app.get("", (req, res) => res.status(200).send("Hi from messenger"));
app.use(express.static(path.join(__dirname, distDir)));
app.use("/admin/", (req, res) =>
  res.sendFile(path.join(__dirname, distDir + "/index.html"))
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use("/webhook/", (req, res) => {
  if (
    req.query["hub.mode"] === "subscribe" &&
    req.query["hub.verify_token"] === config.verifyToken
  ) {
    console.log("Validation Succeded.");
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

// API router
app.use("/api/", routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new httpError(404);
  //return next(err);
  res.send("Page not Found");
});

module.exports = app;
