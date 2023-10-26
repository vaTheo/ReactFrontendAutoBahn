import axios from "axios";
import './Score.scss'
import React, { useEffect, useState } from "react";
import Scores from "../components/ScoreCard";
import BestScores from "../components/BestScoreCard"; // Import the BestScores component
interface ScoreData {
    field: string;
    username: string;
    score: number;
  }
const LINK_BACKEND = "http://localhost:3001";

const Score: React.FC = () => {
  const [playerSelected, setplayerSelected] = useState<string>("");
  const [arrayPlayer, setArrayPlayer] = useState<string[]>([]);
  const [scoreData, setscoreData] = useState<{}>({});
  const [arrayBestScoreData, setarrayBestScoreData] = useState<ScoreData[]>([]);

  const handleSetPlayerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setplayerSelected(e.target.value); // Convert the string value to a number
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultArrayPlayer = await axios.get(LINK_BACKEND + "/score/getAllUsers");
        setArrayPlayer(resultArrayPlayer.data);
        const resultBestCoreDate = await axios.get(LINK_BACKEND + '/score/bestScoreUsers');
        setarrayBestScoreData(resultBestCoreDate.data)
    } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const fetchScore = async () => {
    try {
      const result = await axios.get(
        LINK_BACKEND + `/score/getPointOfUser/${playerSelected}`
      );
      setscoreData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Voici les scores</h1>
      <div className="ScoreBoxes">
        <div className="PlayerSCore">
        <select value={playerSelected} onChange={handleSetPlayerChange}>
          {arrayPlayer.map((player, index) => (
            <option key={index} value={player}>
              {player}
            </option>
          ))}
        </select>{" "}
        <button className="NewGame-button" onClick={fetchScore}>
          Display Score
        </button>
        <Scores scores={scoreData} />
        </div>
        <div className="BestScore">
        <BestScores scoresArray={arrayBestScoreData} /> 

        </div>
      </div>
      {/* Any other content for the home page */}
    </div>
  );
};

export default Score;
