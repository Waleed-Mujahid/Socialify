import classes from "./Login.module.css";
import { FormEvent, useRef } from "react";
import bcrypt from "bcryptjs";
import UserContext from "./UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
}

function LoginForm({ setError }: { setError: Function }) {
  const userContext = useContext(UserContext); 
  const nav = useNavigate();

  if (!userContext) {
    return null;
  }

  useEffect(() => {
    setError("");
  }, []);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:3000/users");
    const existingUsers: User[] = await response.json();

    const user = existingUsers.find(
      (user) => user.username === usernameRef.current?.value
    );

    if (user === undefined) {
      setError("User does not exist");
    } else {
      if (passwordRef.current === null) {
        setError("password not entered.");
        return;
      }
      const match = await bcrypt.compare(
        passwordRef.current?.value,
        user.password
      );

      if (match && userContext) {
        setError("none");
        userContext.setUserId(user._id);
        userContext.setUsername(user.username);
      } else {
        setError("Incorrect password");
      }
    }
  }

  return (
    <form onSubmit={handleLogin} className={classes.form} method="post">
      <input
        className={classes.inputs}
        required
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        ref={usernameRef}
      />

      <input
        className={classes.inputs}
        required
        type="password"
        name="password"
        id="password"
        placeholder="password"
        ref={passwordRef}
      />
      <button className={classes.btn} type="submit">
        Login
      </button>
      <button onClick = {() => nav('/register')} className={classes.btn} type="submit">
        Create new Account
      </button>
    </form>
  );
}

export default LoginForm;
