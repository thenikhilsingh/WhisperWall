import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function App() {
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const [token, setToken] = useState(localStorage.getItem("token"));

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn }}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
