import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useEffect } from "react";

const Navbar = ({ setHeight }: { setHeight: Function }) => {

  useEffect(() => {
    const handleResize = () => {
      const newNavbarHeight = document.querySelector('nav')?.clientHeight || 0;
      setHeight(newNavbarHeight);
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
        <Link to="/" className={classes.logoLink}>
          <img
            src="pictures\favicon-white.png"
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
          src="pictures\default-user.png"
          alt="User Profile"
          className={classes.userIcon}
        />
      </div>
    </nav>
  );
};

export default Navbar;
