const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  email : {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  password : {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
});

module.exports = mongoose.model("User", userSchema);
