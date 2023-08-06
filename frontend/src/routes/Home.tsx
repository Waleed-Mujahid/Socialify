import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const userData = location.state; // This will contain the user data passed from the SignIn component


  return (
    <div>Welcome {userData.username}</div>
  )
}
