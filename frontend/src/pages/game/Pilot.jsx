import React, { useState } from 'react';
import axios from 'axios';
import Game from './Game';
import Leaderboard from './Leaderboard';
import HomePage from './HomePage';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';

export default function Pilot() {
  // useState now checks localStorage for a saved player on initial load.
  const [player, setPlayer] = useState(() => {
    const savedPlayer = localStorage.getItem('flappyPlayer');
    return savedPlayer ? JSON.parse(savedPlayer) : null;
  });

  const [score, setScore] = useState(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  // This function now also saves the new player to localStorage.
  const handlePlayerCreated = (playerData) => {
    setPlayer(playerData);
    localStorage.setItem('flappyPlayer', JSON.stringify(playerData));
  };
  
  // A function to handle logging out.
  const handleLogout = () => {
    localStorage.removeItem('flappyPlayer');
    setPlayer(null);
  };

  const handleGameOver = async (finalScore) => {
    setScore(finalScore);
    setCurrentScore(0);
    setShowLeaderboard(true);

    if (player) {
      try {
        const response = await axios.patch(`http://127.0.0.1:8000/player/${player.id}/update_score/`, {
          score: finalScore,
        });
        
        // CHANGED: Update the player state and localStorage with the new score from the backend response.
        const updatedPlayer = response.data;
        setPlayer(updatedPlayer);
        localStorage.setItem('flappyPlayer', JSON.stringify(updatedPlayer));

        console.log('Score saved for player:', player.name);
      } catch (error) {
        console.error('Failed to save score:', error);
      }
    }
  };

  // If no player is set, show the HomePage
  if (!player) {
    return (
      <AppContainer>
        <GlobalStyle />
        <HomePage onPlayerCreated={handlePlayerCreated} />
      </AppContainer>
    );
  }

  // Otherwise, show the game
  return (
    <AppContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ width: '25%' }} onClick={handleLogout}>Switch User</button>
        </div>
      <GlobalStyle />
      <AppHeader>
        <h1>Flappy Bird (Player: {player.name})</h1>
        <HeaderControls>
          <div>Current score: <strong>{currentScore}</strong></div>
          <button onClick={() => setShowLeaderboard(true)}>Leaderboard</button>
        </HeaderControls>
      </AppHeader>

      <MainContent>
        <Game
          onGameOver={handleGameOver}
          onScoreUpdate={(s) => setCurrentScore(s)}
        />
        <Leaderboard
          visible={showLeaderboard}
          onClose={() => setShowLeaderboard(false)}
          lastScore={score}
          playerName={player.name}
        />
      </MainContent>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  /* Background handled by GlobalStyle #root now */
`;

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 15px 30px; /* More padding */
  background: rgba(0, 255, 255, 0.05); /* Subtle transparent cyan for header */
  border-bottom: 1px solid rgba(0, 255, 255, 0.2); /* Faint cyan separator */
  box-shadow: 0 2px 10px rgba(0, 255, 255, 0.1); /* Header glow */
`;

const TitleText = styled.h1`
  margin: 0;
  font-size: 1.7rem;
  color: #00FFFF;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
`;

const HeaderControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  div {
    font-size: 1.5rem;
    color: #FF00FF;
    text-shadow: 0 0 5px rgba(255, 0, 255, 0.5);
  }

  button {
    font-size: 1.1rem;
  }

  strong {
    color: #FF00FF;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;