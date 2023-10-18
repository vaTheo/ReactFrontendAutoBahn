// import dotenv from 'dotenv';
// dotenv.config();
import "./loginRegister.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IloginReq } from "../types/typesRequest";

const LINK_BACKEND = "http://localhost:3001";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

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
        navigate("/CreateGame");
      } else if (response.status === 201) {
      } else {
        // any other 2XX status
        //
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Server responded with an error:", error.response?.data);
        setErrorMessage(error.response?.data || "An error occurred.");
      } else {
        console.error("Error during login:", error);
        setErrorMessage("An unexpected error occurred.");
      }
      setIsModalOpen(true);
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
        <button className="loginRegister-button" onClick={loginUser}>
          Login
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
