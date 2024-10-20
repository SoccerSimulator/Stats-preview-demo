import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './player.css';
import { PlayerCard } from '../components/PlayerCard';
import { Player } from '../types';
import { BASE_TEAM_URL } from '../api';
import { PlayerLevels } from '../types/player';

const NormalPlayer: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Define fetchPlayers outside of useEffect
  const fetchPlayers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<Player[]>(BASE_TEAM_URL);
      if (response.data) {
        const normalPlayers = response.data.filter(player => player.Level === PlayerLevels.Normal);
        setPlayers(normalPlayers);
      } else {
        setError('No players found in response');
      }
    } catch (err) {
      setError('Failed to fetch players');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  if (loading) {
    return <p>Loading players...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button className="refresh-button" onClick={fetchPlayers}>
        Refresh Players
      </button>
      {players.length > 0 ? (
        players.map(player => <PlayerCard key={player.ID} player={player} />)
      ) : (
        <p>No players available.</p>
      )}
    </div>
  );
};

export default NormalPlayer;
