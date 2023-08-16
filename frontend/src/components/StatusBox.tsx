import classes from "./StatusBox.module.css";

interface StatusBoxProps {
  togglePost: () => void;
  text: string;
  setText: (text: string) => void;
}

const StatusBox: React.FC<StatusBoxProps> = ({ togglePost, text, setText }) => {
  return (
    <div className={classes.statusBox}>
      <img className={classes.userImg} src="pictures/default_user.png" alt="" />
      <input
        className={classes.statusInput}
        type="text"
        placeholder="What is on your mind?"
        onClick={togglePost}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};

export default StatusBox;