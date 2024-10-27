import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './player.css'
import { PlayerCard } from '../components/PlayerCard';
import { Player } from '../types';
import { TEAM_YOUNGER } from '../api';
import { PlayerLevels } from '../types/player';

const PerfectPlayer: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Define fetchPlayers outside of useEffect
    const fetchPlayers = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get<Player[]>(TEAM_YOUNGER);
            if (response.data) {
                const youngerPlayers = response.data.filter(player => player.Level === PlayerLevels.Excellent || player.Level === PlayerLevels.Normal || player.Level === PlayerLevels.Weaker);
                setPlayers(youngerPlayers);
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
            <button className="refresh-button" onClick={() => fetchPlayers()}>
                Refresh Players
            </button>

            {players.length > 0 ? (
                players.map(player => (
                    <PlayerCard key={player.ID} player={player} />
                ))
            ) : (
                <p>No players available.</p>
            )}
        </div>
    );
};

export default PerfectPlayer;
