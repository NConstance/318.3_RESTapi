import express from "express";
import { posts } from "../data/posts.mjs";
const router = express.Router();

// @route GET /api/posts
// @desc Get all posts
// @access Public
router.get("/", (req, res) => {
  res.json(posts);
});

//  @route GET /api/posts/:id
//  @desc Get ONE post
//  @access Public
router.get("/:id", (req, res, next) => {
  const post = posts.find((post) => post.id == req.params.id);

  if (post) res.json(post)
  else next();
});

export default router;