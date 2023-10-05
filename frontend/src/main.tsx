import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import SignIn from "./routes/SignIn";
import Home from "./routes/Home";
import Explore from "./routes/Explore";
// import App from "./components/App";
import User from "./routes/User";
import {z} from "zod"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "explore",
    element: <Explore />,
  },
  {
    path: "register",
    element: <SignIn />,
  },
  {
    path: "login",
    element: <SignIn />,
  },
  {
    path: "users/:id",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);


const userSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  hobby: z.enum(["football", "basketball", "tennis"])
})

const user = userSchema.parse({
  username: "bob",
  email: "muhammadwaleed4943@gmail.com",
  hobby: "football"
})

console.log(userSchema.parse(user));