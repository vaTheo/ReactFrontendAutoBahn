import React, { useState } from "react";
import "./autobahn.scss";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getRandomCard,
  initializeCardDeck,
  isChoiceOK,
} from "../function/cardsFunction";
import Cards from "../components/card"; // Import the Cards component
import { looseGame, winGame } from "../function/gameWinLoose";

const Autobahn: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [card1Number, setCard1Number] = useState<number>(14); // Use state to store the card number
  const [card2Number, setCard2Number] = useState<number>(14); // Use state to store the card number
  const [card3Number, setCard3Number] = useState<number>(14); // Use state to store the card number
  const [card4Number, setCard4Number] = useState<number>(14); // Use state to store the card number
  const [card5Number, setCard5Number] = useState<number>(14); // Use state to store the card number
  const [card1ColorName, setCard1ColorName] = useState<string>(""); // Use state to store the card color name
  const [card2ColorName, setCard2ColorName] = useState<string>(""); // Use state to store the card color name
  const [card3ColorName, setCard3ColorName] = useState<string>(""); // Use state to store the card color name
  const [card4ColorName, setCard4ColorName] = useState<string>(""); // Use state to store the card color name
  const [card5ColorName, setCard5ColorName] = useState<string>(""); // Use state to store the card color name
  const [nbWinInARow, setnbWinInARow] = useState<number>(0);

  //Modal management
  const [isModalOpenDeckEmpty, setIsModalOpenDeckEmpty] =
    useState<boolean>(false); //modal for deck empty reinit
  const [isModalOpenGameWin, setIsModalOpenGameWin] = useState<boolean>(false); //modal for deck empty reinit

  const [nbCardFail, setnbCardFail] = useState<number>(0);
  const [nbCardWin, setnbCardWin] = useState<number>(0);
  const [nbRedSelected, setnbRedSelected] = useState<number>(0);
  const [nbBlackSelected, setnbBlackSelected] = useState<number>(0);
  const [nbArriveToLastCard, setnbArriveToLastCard] = useState<number>(0);

  let intnbWinInARow = nbWinInARow; //Better to use internal value for logic ?? to ensure have probleme with synch of value
  let colorName = "";
  let playerGuessGood = false;
  //Execute code when page is unload
  window.addEventListener("beforeunload", (event) => {
    console.log("try");
    looseGame(
      nbCardFail,
      nbCardWin,
      nbRedSelected,
      nbBlackSelected,
      nbArriveToLastCard
    );
    console.log("API call before page reload");
  });
  window.addEventListener("unload", (event) => {
    console.log("try");
    looseGame(
      nbCardFail,
      nbCardWin,
      nbRedSelected,
      nbBlackSelected,
      nbArriveToLastCard
    );

    console.log("API call after page reload");
  });

  const incrementCounter = () => {
    intnbWinInARow = intnbWinInARow + 1;
  };
  const restCounter = async () => {
    intnbWinInARow = 0;
    setCard1Number((prev) => 14);
    setCard2Number((prev) => 14);
    setCard3Number((prev) => 14);
    setCard4Number((prev) => 14);
    setCard5Number((prev) => 14);
  };
  const selectCard = async (colorSelected: string) => {
    try {
      //Get the radom card
      const arrayResult = getRandomCard(1, 13); // Random card btw 1 and 13

      //Management of the deck and set the right color
      if (arrayResult[0] === 0 && arrayResult[1] === 0) {
        //Tha values are valid
        //The entier deck has been discovered
        setIsModalOpenDeckEmpty(true);
      } else {
        const mapColor: Record<number, string> = {
          1: "heart",
          2: "diamonds",
          3: "spade",
          4: "clubs",
        };
        colorName = mapColor[arrayResult[0]];

        playerGuessGood = isChoiceOK(colorSelected, colorName); //Verify if the player guess the good color
        if (playerGuessGood) {
          setnbCardFail((prev) => prev + 1);
          incrementCounter();
          switch (intnbWinInARow) {
            case 0:
              restCounter();
              break;
            case 1:
              setCard1Number(arrayResult[1]);
              setCard1ColorName(colorName);
              break;
            case 2:
              setCard2Number(arrayResult[1]);
              setCard2ColorName(colorName);
              break;
            case 3:
              setCard3Number(arrayResult[1]);
              setCard3ColorName(colorName);
              break;
            case 4:
              setCard4Number(arrayResult[1]);
              setCard4ColorName(colorName);
              setnbArriveToLastCard((prev) => prev + 1);
              break;
            case 5:
              setCard5Number(arrayResult[1]);
              setCard5ColorName(colorName);
              winGame(
                nbCardFail,
                nbCardWin,
                nbRedSelected,
                nbBlackSelected,
                nbArriveToLastCard
              )
                .then(() => {
                  setIsModalOpenGameWin(true);
                })
                .catch((err) => console.log(err));
              break;

            default:
              restCounter();

              console.log("default case");
              break;
          }
        } else {
          setnbCardWin((prev) => prev + 1);
          restCounter();
        }
        setnbWinInARow(intnbWinInARow);
        setnbCardFail((prev) => prev + 1);
        console.log(intnbWinInARow);
      }
    } catch (error: any) {
      if (error) {
      } else {
        console.error("Error during selectCard:", error);
      }
    }
  };

  return (
    <div>
      <div className="autbahn-container">
        <button
          className="DisplayCard-Button"
          onClick={() => {
            looseGame(
              nbCardFail,
              nbCardWin,
              nbRedSelected,
              nbBlackSelected,
              nbArriveToLastCard
            );
            navigate("/score");
          }}
        >
          J'abandone c'est trop dur...
        </button>
        <div className="cards-container">
          {/* Render the Cards component and pass cardNumber and cardColorName as props */}
          <div className="cards">
            <Cards cardNumber={card1Number} cardColorName={card1ColorName} />
          </div>
          <div className="cards">
            <Cards cardNumber={card2Number} cardColorName={card2ColorName} />
          </div>
          <div className="cards">
            <Cards cardNumber={card3Number} cardColorName={card3ColorName} />
          </div>
          <div className="cards">
            <Cards cardNumber={card4Number} cardColorName={card4ColorName} />
          </div>
          <div className="cards">
            <Cards cardNumber={card5Number} cardColorName={card5ColorName} />
          </div>
        </div>
        <div className="FlexBoxRedBlack">
          <button
            className="DisplayCard-Red"
            onClick={() => {
              selectCard("red");
              setnbRedSelected((prev) => prev + 1);
            }}
          >
            C'est rouge !
          </button>
          <button
            className="DisplayCard-Black"
            onClick={() => {
              selectCard("black");
              setnbBlackSelected((prev) => prev + 1);
            }}
          >
            C'est noir !
          </button>
        </div>
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
                onClick={() => {
                  looseGame(
                    nbCardFail,
                    nbCardWin,
                    nbRedSelected,
                    nbBlackSelected,
                    nbArriveToLastCard
                  );
                  setIsModalOpenDeckEmpty(false);
                }}
              >
                NON
              </span>
            </div>
          </div>
        </div>
      )}

      {isModalOpenGameWin && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => setIsModalOpenGameWin(false)}
            >
              &times;
            </span>
            <p>C'EST LA WIN !!</p>
            <div className="pyro">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            <div className="container-choose-yes-no">
              <span
                className="choose-yes-no"
                onClick={() => {
                  navigate("/CreateGame");
                }}
              >
                UNE NOUVELLE !
              </span>
              <span
                className="choose-yes-no"
                onClick={() => {
                  navigate("/score");
                }}
              >
                FAIT PETER LES SCORES
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Autobahn;
