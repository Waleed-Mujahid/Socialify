import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import classes from "./Home.module.css";
import StartingContent from "../components/StartingContent";
import MainContent from "../components/MainContent";

export default function Home() {
  const location = useLocation();
  const userData = location.state; 
  const username: string = userData ? userData.username : "Anonymous";

  return (
    <div className={classes.container}>
      <Navbar username={username}/>
      <StartingContent />
      <MainContent />
    </div>
  )
}
