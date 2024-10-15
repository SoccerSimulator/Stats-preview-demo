import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {PlayerCard} from './components/PlayerCard';
import { Player } from './types';

const API=true? 'https://soccer-simulation.onrender.com/api/team':'http://127.0.0.1:8000/api/team'



const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get<Player[]>(API);
        // console.log('idan -  fetchPlayers  response.data:', response.data)
        if (response.data) {
          setPlayers(response.data); 
        } else {
          setError('No players found in response');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch players');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

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
      {players.length > 0 ? (
        players.map(player => <PlayerCard key={player.ID} player={player} />)
      ) : (
        <p>No players available.</p>
      )}
    </div>
  );
};

export default App;