const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author");
    res.json(posts);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.post("/add", async (req, res) => {
  try {
    const authorId = req.body.author;
    console.log(authorId);
    // Check if authorId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
      return res.status(400).json("Invalid author ID");
    }

    // Find the user by their ObjectId
    const user = await User.findById(authorId);
    if (!user) {
      return res.status(404).json("Author not found");
    }

    const newPost = new Post({
      author: authorId,
      body: req.body.postText,
      image: req.body.image,
    });

    await newPost.save();
    res.json("New post added.");
  } catch (err) {
    console.error(err);
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;