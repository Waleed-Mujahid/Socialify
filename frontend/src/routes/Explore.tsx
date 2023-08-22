import React from 'react'
import classes from "./Explore.module.css";
import Navbar from "../components/Navbar";
import UserStory from "../components/UserStory";
import Timeline from "../components/Timeline";
import { useState, useEffect, useRef } from "react";


export default function Explore() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.querySelector(
      `.${classes.container}`
    ) as HTMLElement;

    if (container) {
      container.style.top = `${navbarHeight}px`;
      container.style.height = `calc(100% - ${navbarHeight}px)`;
    }
  }, [navbarHeight]);

  return (
    <>
      <Navbar setHeight={setNavbarHeight} />
      <div className={classes.container}>
        <div className={classes.story}>
          <UserStory />
        </div>
        <div ref={timelineRef} className={classes.timeline}>
          <Timeline parentRef={timelineRef} />
        </div>
        <div className={classes.youMayKnow}></div>
      </div>
    </>
  );
}