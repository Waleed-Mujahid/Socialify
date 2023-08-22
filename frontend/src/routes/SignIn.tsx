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
      navigate("/", { state: { user_id: user } });
    }
  }, [error]);

  const formComponent =
    path === "/register" ? (
      <RegisterForm setError={setError} />
    ) : (
      <LoginForm  setError={setError} />
    );

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <img className={classes.logo} src="pictures\logo.png" alt="logo" />
      </div>
      <div className={classes.item}>
        <div className={classes.formContainer}>
          <img
            className={classes.logoMobile}
            src="pictures\logo.png"
            alt="logo"
          />
          <img className={classes.img} src="pictures\favicon-black.png" alt="" />
          {error !== "none" && <h2 className={classes.error}>{error}</h2>}
          <div className={classes.form}>{formComponent}</div>
        </div>
      </div>
    </div>
  );
}
