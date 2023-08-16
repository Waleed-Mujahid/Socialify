import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useContext } from "react";
import UserContext from "./UserContext";

const Navbar = ( ) => {
  const userContext = useContext(UserContext);

  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
        <Link to="/" className={classes.logoLink}>
          <img
            src="pictures\icon.png"
            alt="Socialify Logo"
            className={classes.logo}
          />
          <span className={classes.logoText}>SOCIALIFY</span>
        </Link>
      </div>
      <ul className={classes.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to='/explore' > Explore </Link>
        </li>
        <li>
          <Link to="/">Notifications</Link>
        </li>
        <li>
          <Link to="/">Messages</Link>
        </li>
      </ul>
      <div className={classes.userProfile}>
        <img
          src="pictures\default_user.png"
          alt="User Profile"
          className={classes.userIcon}
        />
      </div>
    </nav>
  );
};

export default Navbar;
