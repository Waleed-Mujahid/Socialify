import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useEffect, useRef } from "react";
import UserOptions from "./UserOptions";

const Navbar = ({ setHeight }: { setHeight: Function }) => {
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const newNavbarHeight = document.querySelector("nav")?.clientHeight || 0;
      if (optionsRef.current)
        optionsRef.current.style.paddingTop = `${newNavbarHeight}px`;
      setHeight(newNavbarHeight);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showOptions = () => {
    if (!optionsRef.current) return;
    optionsRef.current.style.display = "block";
  };

  const hideOptions = () => {
    if (!optionsRef.current) return;
    optionsRef.current.style.display = "none";
  };

  return (
    <>
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
            <Link to="/explore"> Explore </Link>
          </li>
          <li>
            <Link to="/">Notifications</Link>
          </li>
          <li>
            <Link to="/">Messages</Link>
          </li>
        </ul>
        <div onMouseLeave={hideOptions} onMouseEnter={showOptions} className={classes.userProfile}>
          <div onMouseDown={showOptions} >
            <img
              src="pictures\default-user.png"
              alt="User Profile"
              className={classes.userIcon}
            />
          </div>
          <div
            ref={optionsRef}
            className={classes.userOptionsContainer}
          >
            <UserOptions />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
