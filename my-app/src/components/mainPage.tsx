// import dotenv from 'dotenv';
// dotenv.config();
import React, { useState } from "react";
import axios from "axios";
import { IlogoutReq } from "../types/typesRequest";

const LINK_BACKEND = "http://localhost:3001";

const mainPage: React.FC = () => {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const userName = localStorage.getItem("userID");
      const response = await axios.post(
        LINK_BACKEND + "/user/logout",
        {//No payload send, only headers
        },

        {
          headers: {
            'authorization': `Bearer ${token}`,
            'userid':userName,

          },
        }
      );

      if (response.status === 200) {
        console.log(`Logout backend successufull :` + { userName });
      }
    } catch (err) {
      console.log("handleLogout" + err);
    }
    //In nay case remove the token from the web application and relaoad page
     localStorage.removeItem("userToken");
     window.location.reload(); // Reload the page
  };

  return (
    <div>
      <h1>You are logged in.</h1>
      <h2> Would you like to play ?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default mainPage;
