require("./models/User");

const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

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

app.use(bodyParser.json());

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listening on Port 3000");
});

app.use(authRoutes);
