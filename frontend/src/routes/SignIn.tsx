import classes from "./SignIn.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";


export default function SignIn() {
  const [error, setError] = useState("");
  const [user, setUser] = useState("Anonymous");

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (error === "none") {
      navigate("/", { state: { username: user } });
    }
  }, [error]);


  const formComponent =
    path === "/register" ? (
      <RegisterForm setError={setError} setUsername={setUser} />
    ) : (
      <LoginForm setError={setError} setUsername={setUser} />
    );

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <img className={classes.logo} src="public\pictures\logo2.png" alt="logo" />
      </div>
      <div className={classes.item}>
        <div className={classes.formContainer}>
          <img src="src\assets\icon.png" alt="" />
          <h2>Create an account</h2>
          {error !== "none" && <h2 className={classes.error}>{error}</h2>}
          {formComponent}
        </div>
      </div>
    </div>
  );
}
