import { Outlet } from "react-router-dom";
import { createContext } from "react";

export const AuthContext = createContext();

const storeTokenInLS = (serverToken) => {
  return localStorage.setItem("token", serverToken);
};

function App() {
  return (
    <AuthContext.Provider value={{ storeTokenInLS }}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
