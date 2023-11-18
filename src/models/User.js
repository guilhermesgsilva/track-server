const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required,
  },
  password: {
    type: String,
    required,
  },
});

mongoose.model("User", userSchema);
