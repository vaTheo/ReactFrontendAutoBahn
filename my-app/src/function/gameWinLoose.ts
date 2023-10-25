import axios from "axios";
import { initializeCardDeck } from "./cardsFunction";
import {IUserPoints} from '../types/typesRequest' 
const LINK_BACKEND = "http://localhost:3001";

export const winGame = async (
  nbCardFail: number,
  nbCardWin: number,
  nbRedSelected: number,
  nbBlackSelected:number,
  nbArriveToLastCard: number
) => {
  //Code for win game
  const response = await axios.post(
    LINK_BACKEND + "/game/endGame",
    {

      gameID: localStorage.getItem("gameID"),
      IDPlaying:localStorage.getItem("userID"),
      nuberCardAutobahn:[Number(localStorage.getItem("nbCardAutoBahn"))],
      userPoints: {
        nbCardFail: nbCardFail,
        nbCardWin: nbCardWin,
        nbRedSelected: nbRedSelected,
        nbBlackSelected: nbBlackSelected,
        nbArriveToLastCard: nbArriveToLastCard,
        nbgameWin:1,
        nbGameStarted:1,
      },
    },
    {
      headers: {},
    }
  );
  if (response.status === 200) {
    const gameID = response.data.gameID;
    localStorage.setItem("gameID", "");
  }
};

export const looseGame = async (
  nbCardFail: number,
  nbCardWin: number,
  nbRedSelected: number,
  nbArriveToLastCard: number,
  nbBlackSelected:number,
) => {
  //Code for win game
  const response = await axios.post(
    LINK_BACKEND + "/game/endGame",
    {

      gameID: localStorage.getItem("gameID"),
      IDPlaying:localStorage.getItem("userID"),
      nuberCardAutobahn:[Number(localStorage.getItem("nbCardAutoBahn"))],
      userPoints: {
        nbCardFail: nbCardFail,
        nbCardWin: nbCardWin,
        nbRedSelected: nbRedSelected,
        nbBlackSelected: nbBlackSelected,
        nbArriveToLastCard: nbArriveToLastCard,
        nbGameAbandoned:1,
        nbGameStarted:1,
      },
    },
    {
      headers: {},
    }
  );
  if (response.status === 200) {
    const gameID = response.data.gameID;
    localStorage.setItem("gameID", "");
  }
};

