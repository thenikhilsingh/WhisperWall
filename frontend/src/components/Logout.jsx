import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

export default function Logout() {
  const { LogoutUser } = useContext(AuthContext);
  
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
}
