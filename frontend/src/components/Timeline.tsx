import React, { useState, useRef } from "react";
import AddPost from "./AddPost";
import StatusBox from "./StatusBox";
import classes from "./Timeline.module.css";
import ShowPosts from "./ShowPosts";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface props {
  parentRef: React.RefObject<HTMLDivElement>;
}

export default function Timeline({ parentRef }: props) {
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [posts, setPosts] = useState([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const togglePost = (): void => {
    if (!(localStorage.getItem("username") === "")) setIsLoggedIn(true);
    setIsPosting((prevPost) => !prevPost);
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [isPosting]);

  useEffect(() => {
    if (isPosting) parentRef.current!.style.overflow = "hidden";
    else parentRef.current!.style.overflow = "auto";
  }, [isPosting]);

  return (
    <div className={classes.container}>
      {isPosting ? (
        <>
          <div className={classes.overlay} onClick={togglePost}></div>
          <div className={classes.propmtContainer} ref={containerRef}>
            {isLoggedIn ? (
              <AddPost setPost={setIsPosting} text={text} setText={setText} />
            ) : (
              <AskLogin togglePost={togglePost} />
            )}
          </div>
        </>
      ) : (
        <StatusBox togglePost={togglePost} text={text} setText={setText} />
      )}
      <ShowPosts posts={posts} />
    </div>
  );
}

const AskLogin = ({ togglePost }: { togglePost: Function }) => {
  const nav = useNavigate();

  const showLogin = () => {
    nav("/login");
  };

  return (
    <div className={classes.askLogin}>
      <h2>You must be signed in to post.</h2>
      <div className={classes.btnContainer}>
        <button onClick={showLogin} className={classes.btn}>
          Sign in
        </button>
        <button onClick={() => togglePost()} className={classes.btn}>
          Go back
        </button>
      </div>
    </div>
  );
};
