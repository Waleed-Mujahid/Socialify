// import React from 'react'
import classes from "./MainContent.module.css";
import RowItem from "./RowItem";
import ShowPeople from "./ShowPeople";

interface Post {
  heading: string;
  text: string;
  alignRight: boolean;
}

export default function MainContent() {
  const clickHandler = () => {
    window.location.href = "/register";
  };

  const posts: Post[] = [
    {
      heading: "Share your story with the world ",
      text: "Express yourself through the power of words by posting your thoughts and stories for the world to see.",
      alignRight: false,
    },
    {
      heading: "Engage and make new friends",
      text: "Engage with others' musings, sparking a lively commenting frenzy that nurtures the growth of ideas and the forging of new friendships.",
      alignRight: true,
    },
  ];

  return (
    <>
      <div className={classes.container}>
        <RowItem post={posts[0]} />
        <RowItem post={posts[1]} />
      </div>
      <ShowPeople />
      <div className={classes.box}>
        <div className={classes.boxHeading}> Join Socialify </div>
        <div className={classes.boxText}>
          Don't be shy! It's time to step into the realm where words animate the
          world around you. Join Socialify and embark on a linguistic journey!{" "}
        </div>
        <button onClick={clickHandler} className={classes.boxButton}>
          Sign up now
        </button>
      </div>
    </>
  );
}
