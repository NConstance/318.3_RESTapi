import express from "express";
import { posts } from "../data/posts.mjs";
const router = express.Router();

// @route GET /api/posts
// @desc Get all posts
// @access Public

router
  .route("/")
  .get((req, res) => {
    res.json(posts);
  })
  .post((req, res) => {
    const { userId, title, content } = req.body; // grabbing data the client entered through req.body
    let id = posts[posts.length - 1].id + 1; // creating a new id
    // let id = posts.length++;

    // creating a new object that will be pushed to the posts array
    if (userId && title && content) {
      const post = {
        id: id,
        userId: userId,
        title: title,
        content: content,
      };
      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else {
      res.json({ error: "Insufficient Data" });
    }
  });

//  @route GET /api/posts/:id
//  @desc Get ONE post
//  @access Public

router
  .route("/:id")
  .get((req, res) => {
    const post = posts.find((post) => post.id == req.params.id);

    if (post) res.json(post);
    else next();
  })
  .patch((req, res) => {});

export default router;
