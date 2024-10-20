import React from 'react';
import { Player } from '../../types';
import { RadarChart } from '../PentagonChart/RadarChart';
import { CircularGauge } from '../CircularGauge'; // Assuming you have this component ready for the gauges
import './PlayerCard.css';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const {
    Name,
    Position,
    Level,
    Preferred_Foot,
    Shirt_Number,
    Age,
    Height,
    Stamina,
    Fitness,
    Nationality,
    Stats,
    Averages,
  } = player;

  const categories = Object.keys(Stats);

  // Icon for dominant foot (left or right)
  const dominantFootIcon = Preferred_Foot["Dominant Foot"] === "Right" ? "🦵➡️" : "⬅️🦵";

  return (
    <div className="player-card">
      <div className="player-header">
        <h1>{Name}</h1>
        <h3>{Position}</h3>
        <p><strong>Level:</strong> {Level}</p>
        <p>
          <strong>Preferred Foot:</strong> {dominantFootIcon} {Preferred_Foot["Dominant Foot"]} Foot 
          <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Weak Foot Level:</span> {Preferred_Foot["Weak Foot Level"]}
        </p>
        <p><strong>Shirt Number:</strong> #{Shirt_Number}</p>
        <p><strong>Age:</strong> {Age} | <strong>Height:</strong> {Height} cm</p>
        <p><strong>Stamina:</strong> {Stamina} | <strong>Fitness:</strong> {Fitness}</p>
        <p><strong>Nationality:</strong> {Nationality}</p>
      </div>
      <div className="categories">
        {categories.map(category => (
          <div key={category} className="category">
            <CircularGauge value={Averages[category]} text={category} />
            <h2>{category}</h2>
            <ul>
              {Object.entries(Stats[category]).map(([statName, value]) => (
                <li key={statName}><strong>{statName}:</strong> {value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pentagon-chart">
        <RadarChart categories={categories} seriesData={Object.values(Averages)} />
      </div>
    </div>
  );
};
