"use client";

import React, { useEffect, useState } from "react";

const AuthRouter = ({ children }) => {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    const value = localStorage.getItem("login");
    setLogin(value);
  }, []);

  if (login == null) {
    return <div>Verifying Authentication...</div>;
  }

  if (login === "true") {
    return <>{children}</>;
  }

  return <div>You are unauthorized to access this page Login link</div>;
};

export default AuthRouter;
