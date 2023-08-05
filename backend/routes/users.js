const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../models/user.model");

router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users);
  }
  catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.post("/add", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    await user.save();
    res.json("User added!");
  }
  catch (err) {
    res.status(400).json("Error: " + err);
  }

});

module.exports = router;