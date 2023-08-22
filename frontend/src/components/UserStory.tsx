import React from "react";
import classes from "./UserStory.module.css";
import StoryBox from "./StoryBox";

export default function UserStory() {
  return (
    <div className={classes.container}>
      <StoryBox />
      <StoryBox />
    <StoryBox />
    </div>
  );
}
