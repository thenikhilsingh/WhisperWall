import { Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

function App() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT Authentication - to get the currently logged in  user data
  const userAuthentication = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.userData);
      if (response.status === 200) {
        setUser(response.data.userData);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);
  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, token }}
    >
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
