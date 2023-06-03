import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

export default function PrivateOutlet() {
  const navigate = useNavigate();
  const auth = useAuth();
  const accessToken = JSON.parse(localStorage.getItem("usertoken"));
 
//   const checkExpiryDate = () => {
//     const accessToken = JSON.parse(localStorage.getItem("usertoken"));
//     console.log(accessToken?.expiryDate,'this is access tokens expirydate form services')
    
//     const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
//     console.log(refreshToken,'this is refresh token')
//     const currentDateTime = Math.floor(new Date().getTime() / 1000); // Calculate current date in seconds
//     const expiryDateTime = Math.floor(
//       new Date(accessToken.expiryDate).getTime() / 1000
//     );
    
//       console.log("hellooooooooooo")
//       if (currentDateTime >= expiryDateTime) {
//         localStorage.clear();
//         // Perform any additional actions when the token expires
//         // For example, show a notification or redirect to the login page
//         notification.warning("Your session has expired. Please login again.");
//         navigate("/");
//       }
    
//   };

  useEffect(() => {
    const checkExpiryDate = () => {
        const currentDateTime = Math.floor(new Date().getTime() / 1000); // Calculate current date in seconds
        const expiryDateTime = Math.floor(
          new Date(accessToken?.expiryDate).getTime() / 1000
        );
        console.log(currentDateTime,'this is current date')
        console.log(expiryDateTime,'this is ex date')
  
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

  console.log(accessToken, "this is access");

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
