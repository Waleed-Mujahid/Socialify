import React, { useState, useRef } from "react";
import AddPost from "./AddPost";
import StatusBox from "./StatusBox"; 
import classes from "./Timeline.module.css";

export default function Timeline(): JSX.Element {
  const [post, setPost] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);

  const togglePost = (): void => {
    setPost((prevPost) => !prevPost); // Toggle the value using the previous state
    document.body.style.overflow = "hidden"; // Lock scrolling
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      console.log(text);
      setPost(false);
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return (
    <div className={classes.container}>
      {post ? (
        <>
          <div className={classes.overlay} onClick={togglePost}></div>
          <div ref={containerRef}>
            <AddPost setPost={setPost} text={text} setText={setText} />
          </div>
        </>
      ) : (
        <StatusBox togglePost={togglePost} text={text} setText={setText} />
      )}
    </div>
  );
}