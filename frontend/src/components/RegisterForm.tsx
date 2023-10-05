import classes from "./Login.module.css";
import { FormEvent } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm({ setError }: { setError: Function }) {
  const nav = useNavigate();

  useEffect(() => {
    setError("");
  }, []);

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const fields: { [key: string]: string } = {};

    for (const [name, value] of formData.entries()) {
      fields[name] = value as string;
    }
    const newUser = fields;

    try {
      const response = await fetch("http://127.0.0.1:3000/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.status === 200) {
        setError("none");
        localStorage.setItem("username", newUser.username);
      } else {
        setError("User not created");
      }
    } catch (error) {
      console.error("Error updating users:", error);
    }
  };

  return (
    <form onSubmit={handleRegister} className={classes.form} method="post">
      <h2 className={classes.heading} >Create an account</h2>
      <input
        className={classes.inputs}
        required
        type="text"
        name="username"
        id="username"
        placeholder="Username"
      />
      <input
        className={classes.inputs}
        required
        type="email"
        name="email"
        id="email"
        placeholder="email"
      />
      <input
        className={classes.inputs}
        required
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button className={classes.btn} type="submit">
        Create account
      </button>
      <button
        onClick={() => nav("/login")}
        className={classes.btn}
        type="submit"
      >
        Already have an Account
      </button>
    </form>
  );
}

export default RegisterForm;
