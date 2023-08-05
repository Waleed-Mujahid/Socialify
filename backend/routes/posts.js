const router = require("express").Router();
let Post = require("../models/post.model");
let User = require("../models/user.model");

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts);
  }
  catch (err) {
    res.status(400).json("Error: " + err);
  }
})

router.post('/add', async (req, res) => {
  const user = User.findById(req.body.id);
  const newPost = new Post({
    author: user,
    body: req.body.text
  });
  try {
    await newPost.save();
    res.json("New post added.")
  }
  catch (err) {
    res.status(400).json("Error: " + err)
  }

})

module.exports = router;