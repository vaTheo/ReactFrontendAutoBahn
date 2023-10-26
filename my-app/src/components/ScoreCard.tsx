import React from "react";
import "./ScoreCard.scss";
import { IUserPoints } from "../types/typesRequest";

interface ScoreCardProps {
  title: string;
  value: number | string;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ title, value }) => {
  return (
    <div className="score-card">
      <h3 className="score-title">{title}</h3>
      <p className="score-value">{value}</p>
    </div>
  );
};

interface ScoresProps {
  scores: Record<string, any>;
}

const Scores: React.FC<ScoresProps> = ({ scores }) => {
    
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
      {Object.entries(scores)
       .filter(([key, _]) => key in keyTranslation)
      .map(([key, value]) => (
        <ScoreCard key={key} title={keyTranslation[key]} value={value} />
      ))}
    </div>
  );
};


export default Scores;
