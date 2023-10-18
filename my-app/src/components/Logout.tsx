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
      const userName = localStorage.getItem("userID");
      console.log("Axios logout");
      const response = await axios.post(
        LINK_BACKEND + "/user/logout",
        {
          //No payload send, only headers
        },

        {
          headers: {
            authorization: `Bearer ${token}`,
            userid: userName,
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
    <div>
      <h1>You are logged in.</h1>
      <h2> Would you like to logout ?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
