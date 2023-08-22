import React from "react";
import { useState } from "react";
import classes from "./ShowPosts.module.css";

interface Post {
  author: {
    username: string;
  };
  body: string;
  image: string;
}

export default function ShowPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0)
    return (
      <div>
        <h2>Loading posts...</h2>
      </div>
    );

  return (
    <div className={classes.container}>
      {posts.map((post, index) => (
        <div key={index} className={classes.postContainer}>
          <p className={classes.postAuthor} >{post.author.username}</p>
          <p className = {classes.postBody}>{post.body}</p>
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className = {classes.postImage}
            />
          )}
          <div className={classes.btnContainer} >
            <button className={classes.btn}>Like</button>
            <button className={classes.btn}>Comment</button>
          </div>
        </div>
      ))}
    </div>
  );
}
