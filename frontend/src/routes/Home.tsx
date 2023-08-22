import { useState } from "react";
import Navbar from "../components/Navbar";
import classes from "./Home.module.css";
import StartingContent from "../components/StartingContent";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Home() {
 const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <div className={classes.container}>
      <Navbar setHeight={setNavbarHeight} />
      <StartingContent />
      <MainContent />
      <Footer />
    </div>
  )
}
