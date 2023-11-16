const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config();

var username = encodeURIComponent(process.env.MONGODB_USERNAME);
var password = encodeURIComponent(process.env.MONGODB_PASSWORD);

const mongoUri = `mongodb+srv://${username}:${password}@cluster0.vocmuhj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("listening on Port 3000");
});
