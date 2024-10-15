import React from 'react';
import { Player } from '../../types';
// import { PentagonChart } from '../PentagonChart';
import { RadarChart } from '../PentagonChart/RadarChart';
import {CircularGauge} from '../CircularGauge'; // Assuming you have this component ready for the gauges
import './PlayerCard.css';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const {
    Name,
    Position,
    Age,
    Height,
    Stamina,
    Fitness,
    Nationality,
    Stats,
    Averages
  } = player;

  const categories = Object.keys(Stats);

  return (
    <div className="player-card">
      <div className="player-header">
        <h1>{Name}</h1>
        <h3>{Position}</h3>
        <p> Age: {Age} | Height: {Height} cm</p>
        <p>Stamina: {Stamina} | Fitness: {Fitness}</p>
        <p>Nationality: {Nationality}</p>
      </div>
      <div className="categories">
        {categories.map(category => (
          <div key={category} className="category">
            <CircularGauge value={Averages[category]} text={category} />
            <h2>{category}</h2>
            <ul>
              {Object.entries(Stats[category]).map(([statName, value]) => (
                <li key={statName}>{statName}: {value}</li>
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