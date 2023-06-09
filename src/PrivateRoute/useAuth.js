import { useState,useEffect } from "react";
const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("usertoken"));

    if (accessToken && typeof accessToken === "object") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return authenticated;
};

export default useAuth;
