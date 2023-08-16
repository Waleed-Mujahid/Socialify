import React from 'react'
import classes from "./StoryBox.module.css";

export default function StoryBox() {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer} >
        <img className={classes.storyImg} src="/pictures/person_2.jpg" alt="" />
      </div>
      <div className={classes.storyUsername} >Samantha Green</div>
      <div className={classes.storyText} >I love cooking</div>
    </div>
  )
}
