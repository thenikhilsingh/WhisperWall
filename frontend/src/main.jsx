import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import JoinClub from "./components/JoinClub.jsx";
import Error from "./components/Error.jsx";
import Logout from "./components/Logout.jsx";
import CreateMessage from "./components/CreateMessage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/join-club" element={<JoinClub />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/create-message" element={<CreateMessage />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
