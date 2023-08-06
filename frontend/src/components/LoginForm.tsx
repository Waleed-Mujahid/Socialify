import classes from "./Login.module.css";
import { FormEvent, useRef } from "react";
import bcrypt from "bcryptjs";

interface User {
  username: string;
  email: string;
  password: string;
}

function LoginForm({ setError, setUsername }: { setError: Function, setUsername: Function }) {
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
      setError("Incorrect username");
    } else {
      if (passwordRef.current === null) {
        return;
      }
      const match = await bcrypt.compare(
        passwordRef.current?.value,
        user.password
      );

      if (match) {
        setError("none");
        setUsername(user.username);
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
        Create account
      </button>
    </form>
  );
}

export default LoginForm;
