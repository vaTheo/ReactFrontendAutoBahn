import React, { useState } from "react";
import "./autobahn.scss";
import { useNavigate } from "react-router-dom";
import { getRandomCard, initializeCardDeck } from "../function/cardsFunction";
import Cards from "../components/card"; // Import the Cards component

const Autobahn: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<number>(0); // Use state to store the card number
  const [cardColorName, setCardColorName] = useState<string>(""); // Use state to store the card color name
  const [deckEmpty, setDeckEmpty] = useState<boolean>(false); // Use state to store the card color name
  const [isModalOpenDeckEmpty, setIsModalOpenDeckEmpty] =
    useState<boolean>(false); //modal for deck empty reinit

  const selectCard = async () => {
    try {
      const arrayResult = getRandomCard(1, 13);
      if (arrayResult[0] === 0 && arrayResult[1] === 0) {
        //The entier deck has been discovered
        setIsModalOpenDeckEmpty(true);
      }
      console.log(arrayResult);
      let colorName = "";

      switch (arrayResult[0]) {
        case 1:
          colorName = "heart";
          break;
        case 2:
          colorName = "spade";
          break;
        case 3:
          colorName = "diamonds";
          break;
        case 4:
          colorName = "clubs";
          break;
        default:
          console.log("Switch select card color wrong number enter");
          break;
      }

      setCardColorName(colorName); // Update the card color name state
      setCardNumber(arrayResult[1]); // Update the card number state
    } catch (error: any) {
      if (error) {
      } else {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <div>
      <div className="autbahn-container">
        <button className="DisplayCard" onClick={selectCard}>
          Display Card
        </button>
        {/* Render the Cards component and pass cardNumber and cardColorName as props */}
        <Cards cardNumber={cardNumber} cardColorName={cardColorName} />
      </div>
      {isModalOpenDeckEmpty && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => setIsModalOpenDeckEmpty(false)}
            >
              &times;
            </span>
            <p>
              Le deck de cartes a été terminé, voulez vous remelanger les
              cartes?
            </p>
            <div className="container-choose-yes-no">
              <span
                className="choose-yes-no"
                onClick={() => {
                  initializeCardDeck();
                  setIsModalOpenDeckEmpty(false);
                }}
              >
                OUI
              </span>
              <span
                className="choose-yes-no"
                onClick={() => setIsModalOpenDeckEmpty(false)}
              >
                NON
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Autobahn;
