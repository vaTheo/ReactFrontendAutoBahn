import React from "react";
import "./ScoreCard.scss";

// Define a type for the score object
interface BestScore {
  field: string;
  username: string;
  score: number;
}

// Define props for the BestScores component
export interface BestScoresProps {
  scoresArray: BestScore[];
}

// The BestScores component receives an array of scores as a prop
const BestScores: React.FC<BestScoresProps> = ({ scoresArray }) => {

    const keyTranslation: Record<string, string> = {
        nbPeage : 'Nombre de fois passer dans un péage',
        nbCardFail : 'Nombre de mauvaise réponse à la selection',
        nbCardWin : 'Nombre de bonne réponse à la selection',
        nbgameWin : 'Nombre de partie gagné',
        nbGameAbandoned :'Nombre de partie perdu ou abandonnée' ,
        nbArriveToLastCard : 'Nombre de fois arrivé à la dernière carte' ,
        percentRedSelected : 'Pourcentage de rouge sélectionné',
        percentBlackSelected : 'Pourcentage de noir sélectionné',
    };
  return (
    <div className="scores-container">
        <div>
          {/* Loop through the scores array and display each score */}
          {scoresArray.map((score, index) => (
            
            <div className="score-card" key={index}>
              {keyTranslation[score.field]||score.field } : {score.score} -- {score.username}
            </div>
          ))}
        </div>
    </div>
  );
};

export default BestScores;
