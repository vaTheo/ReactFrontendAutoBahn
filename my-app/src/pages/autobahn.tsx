// import dotenv from 'dotenv';
// dotenv.config();
// import "./CreateGame.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const LINK_BACKEND = "http://localhost:3001";

const Autobahn: React.FC = () => {
    const navigate = useNavigate();

  // Error modal (popin)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [nbCard, setNbcard] = useState<number>(2);


  const startGame = async () => {
    try {
        
    } catch (error: any) {
      if (error) {
        setErrorMessage(error.message|| "An error occurred.");
      } else {
        console.error("Error during login:", error);
        setErrorMessage("An unexpected error occurred.");
      }
      setIsModalOpen(true);
    }
  };
  return (
    <div className="autbahn-container">
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

export default Autobahn;
