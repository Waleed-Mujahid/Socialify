import React, { useState } from "react";
import classes from "./AddPost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, FunctionComponent, useContext } from "react";
import UserContext from "./UserContext";

interface IProps {
  setPost: Dispatch<SetStateAction<boolean>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const AddPost: FunctionComponent<IProps> = (props: IProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [error, setError] = useState("");

  const userContext = useContext(UserContext);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const cancelHandler = () => {
    props.setPost(false);
    props.setText("");
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  const clearSelectedImage = () => {
    setSelectedImage(null);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postText = (event.target as any).postText.value;

    try {
      const base64Image = await convertBase64(selectedImage!);
      const post = {
        author: userContext?.userId,
        postText: postText,
        image: base64Image,
      };

      const response = await fetch("http://127.0.0.1:3000/posts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        props.setPost(false);
        document.body.style.overflow = "auto"; // Restore scrolling
      } else {
        throw new Error("Something went wrong");
      }
    } catch {
      setError("Post could not be added. Please try again");
    }
  };

  function convertBase64(file: File) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.postBox} action="post">
        <FontAwesomeIcon
          onClick={cancelHandler}
          icon={faTimes}
          className={classes.cancelIcon}
        />
        <div className={classes.postHeading}>
          Share your story with the world
        </div>
        <div className={classes.error}>{error}</div>
        <textarea
          className={classes.postText}
          name="postText"
          placeholder="What is on your mind?"
          id="postText"
          cols={30}
          rows={4}
          value={props.text}
          onChange={(event) => props.setText(event.target.value)}
        ></textarea>
        {!!selectedImage ? (
          <FontAwesomeIcon
            className={classes.cancel}
            onClick={clearSelectedImage}
            icon={faTimes}
          />
        ) : (
          <label className={classes.cameraLabel}>
            <FontAwesomeIcon icon={faCamera} />
            <input
              type="file"
              accept=".jpg,.png,.jpeg"
              onChange={handleImageChange}
              className={classes.cameraInput}
              name="image"
            />
            <span className={classes.cameraLabelText}>Add Image</span>
          </label>
        )}
        {selectedImage && (
          <img
            className={classes.imgPreview}
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
          />
        )}
        <div className={classes.btns}>
          <button className={classes.btn}>Add Post</button>
          <button onClick={cancelHandler} className={classes.btn}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
