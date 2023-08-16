import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import classes from "./Home.module.css";
import StartingContent from "../components/StartingContent";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div className={classes.container}>
      <Navbar />
      <StartingContent />
      <MainContent />
      <Footer />
    </div>
  )
}
