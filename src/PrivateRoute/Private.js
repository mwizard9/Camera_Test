import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

export default function PrivateOutlet() {
  const navigate = useNavigate();
  const auth = useAuth();
  const accessToken = JSON.parse(localStorage.getItem("usertoken"));
 
  useEffect(() => {
    const checkExpiryDate = () => {
        const currentDateTime = Math.floor(new Date().getTime() / 1000); // Calculate current date in seconds
        const expiryDateTime = Math.floor(
          new Date(accessToken?.expiryDate).getTime() / 1000
        );
        
  
        if (currentDateTime >= expiryDateTime) {
          localStorage.clear();
         
          notification.warning("Your session has expired. Please login again.");
          navigate("/");
        }
      };
  
      const interval = setInterval(checkExpiryDate, 5000); // Check every 5 seconds
  
      return () => {
        clearInterval(interval); // Clean up the interval when the component unmounts
      };
  }, []);

 

  return auth ? <Outlet /> : <Navigate to="/category" />;
}
