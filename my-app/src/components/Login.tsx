// import dotenv from 'dotenv';
// dotenv.config();
import "./loginRegister.css";
import React, { useState } from "react";
import axios from "axios";
import { IloginReq } from "../types/typesRequest";

const LINK_BACKEND = "http://localhost:3001";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const loginUser = async () => {
    try {
      const response = await axios.post(LINK_BACKEND + "/user/login", {
        username: username,
        password: password,
      } as IloginReq);

      if (response.status === 200) {
        console.log(username);
        localStorage.setItem(
          "userToken",
          response.headers.authorization.split(" ")[1]
        );
        localStorage.setItem("userID", response.headers.userid);
        localStorage.setItem("userName", username);
        console.log("Login successful:", response.data);
        // window.location.reload(); // Reload the page
      } else if (response.status === 201) {
      } else {
        // any other 2XX status
        //
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Server responded with an error:", error.response?.data);
      } else {
        console.error("Error during login:", error);
      }
    }
  };
  return (
    <div className="loginRegister-container">
      <div className="loginRegister-form">
        <h1 className="loginRegister-Header">Login</h1>
        <input
          className="loginRegister-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          className="loginRegister-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="loginRegister button" onClick={loginUser}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
