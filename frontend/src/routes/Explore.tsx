// import React from 'react'
import classes from "./Explore.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserStory from "../components/UserStory";
import Timeline from "../components/Timeline";

export default function Explore() {
  return (
    <>
      <Navbar />
      {/* <AddPost /> */}
      <div className={classes.container}>
        <div className={classes.story}>
          <UserStory />
        </div>
        <div className={classes.timeline}>
          <Timeline />
        </div>
        <div className={classes.youMayKnow}>3</div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
