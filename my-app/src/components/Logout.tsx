// import dotenv from 'dotenv';
// dotenv.config();
import "./Logout.css";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LINK_BACKEND = "http://localhost:3001";
const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const userID = localStorage.getItem("userID");
      const userName = localStorage.getItem("userName");
      console.log("Axios logout");
      const response = await axios.post(
        LINK_BACKEND + "/user/logout",
        {
          //No payload send, only headers
        },

        {
          headers: {
            authorization: `Bearer ${token}`,
            userid: userID,
          },
        }
      );

      if (response.status === 200) {
        console.log(`Logout successful for user: ${userName}`);
      }
    } catch (err) {
      console.log("handleLogout" + err);
    } finally {
      //In nay case remove the token from the web application and relaoad page
      localStorage.removeItem("userToken");
      localStorage.removeItem("userID");
      localStorage.removeItem("userName");
      navigate("/"); // Navigate to the login page after logoutn
    }
  };

  return (
    <div className="logout-container">
      <div className="logout-form">
      <h1 className="logout-text">You are logged in.</h1>
      <h1 className="logout-text"> Would you like to logout ?</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div></div>
  );
};

export default Logout;
