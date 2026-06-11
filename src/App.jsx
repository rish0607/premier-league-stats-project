import React, { useState } from 'react';
import TeamCard from './components/TeamCard';
import { teamsData } from './data/teams';
import './App.css';
import pllogo from './assets/public/pl-logo3.jpeg';
import { Route, Routes } from 'react-router-dom';
import PlayerStats from './pages/PlayerStats';


function App() {
  const [sortBy, setSortBy] = useState('position');

  const sortedTeams = [...teamsData].sort((a, b) => {
    switch (sortBy) {
      case 'position':
        return a.position - b.position;
      case 'points':
        return b.stats.points - a.stats.points;
      case 'goalDiff':
        return b.stats.goalDifference - a.stats.goalDifference;
      case 'wins':
        return b.stats.wins - a.stats.wins;
      default:
        return a.position - b.position;
    }
  });

  return (
    <Routes>

    <Route 
      path="/" 
      element={
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="main-title">
              <img alt="Premier League Logo" className="main-logo" src={pllogo}/>
            </div>
            <p className="subtitle">2024-25 Season Statistics</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          

          {/* Teams Grid */}
          <div className="teams-container">
            {sortedTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>

        </div>
      </main>

      <footer className="footer">
        <p>© 2024-25 Premier League Stats. Click on any team to view detailed statistics and player information.</p>
      </footer>
    </div>
  }

  />  
  <Route path="/team/:teamId" element={<PlayerStats />} />

  </Routes>
  );
}
export default App;
