// import dotenv from 'dotenv';
// dotenv.config();
import "./loginRegister.css";

import React, { useState } from "react";
import axios from "axios";
import { IregisterReq } from "../types/typesRequest";

const LINK_BACKEND = "http://localhost:3001";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registerSuccessfull, setRegisterSuccessfull] =
    useState<boolean>(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const registerUser = async () => {
    console.log("testconsole in register user?");
    try {
      console.log(LINK_BACKEND + "/user/login");
      const response = await axios.post(LINK_BACKEND + "/user/register", {
        username: username,
        password: password,
        userPoints: {},
      } as IregisterReq);
      if (response.status === 200) {
        setRegisterSuccessfull(true);
      } else if (response.status === 201) {
      } else {
        // Any other 2XX status
      }
      console.log("Registration successful:", response.data);
    } catch (error) {
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
        <h1 className="loginRegister-Header">Register</h1>
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
        <button className="loginRegister button" onClick={registerUser}>
          Register
        </button>
      </div>
      {registerSuccessfull && <h3>{username} est inscrit, prêt à dicave</h3>}{" "}
    </div>
  );
};

export default Register;
