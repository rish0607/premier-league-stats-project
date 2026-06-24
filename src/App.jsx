import React, { useState , useEffect } from 'react';
import TeamCard from './components/TeamCard';
import { teamsData } from './data/teams';
import './App.css';
import pllogo from "./assets/Premier_League_Logo.svg";
import { Route, Routes } from 'react-router-dom';
import PlayerStats from './pages/PlayerStats';
import PlayerDetails from './pages/PlayerDetails';
import { useNavigate } from 'react-router-dom';
import Awards from "./pages/Awards";

function App() {
  const [sortBy, setSortBy] = useState('position');
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  

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

  useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 400);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <Routes>

      <Route
      path="/"
      element={
        <div className="app">

          {/* HERO SECTION */}

          <section className="hero-section">

            <div className="hero-overlay"></div>

            <div className="hero-content">

              <img
                src={pllogo}
                alt="Premier League"
                className="hero-logo"
              />

              <h1 className="hero-title">
                PREMIER LEAGUE
              </h1>

              <div className="blinking-year">
                YEAR 2024-2025
              </div>

              <div className="hero-buttons">

                <button
                  className="hero-btn"
                  onClick={() =>
                    document
                      .getElementById("points-table")
                      ?.scrollIntoView({
                        behavior: "smooth"
                      })
                  }
                >
                  POINTS TABLE
                </button>

                <button
                  className="hero-btn secondary"
                  onClick={() =>
                    navigate("/awards")
                  }
                >
                  INDIVIDUAL AWARDS
                </button>

              </div>

            </div>

          </section>

          {/* POINTS TABLE */}

          <section
            id="points-table"
            className="points-section"
          >

            <div className="section-heading">
              PREMIER LEAGUE TABLE
            </div>

            <div className="teams-container">
              {sortedTeams.map((team) => (
                <TeamCard
                  key={team.id}
                  team={team}
                />
              ))}
            </div>

          </section>

          <footer className="footer">
            <p>
              © 2024-25 Premier League Statistics Dashboard
            </p>
          </footer>


              {
  showScrollTop && (
    <button
      className="scroll-top-btn"
      onClick={scrollToTop}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M18 15L12 9L6 15"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    ) }

        </div>
      }
    />  

  <Route path="/team/:teamId" element={<PlayerStats />} />

  <Route
    path="/player/:teamId/:playerName"
    element={<PlayerDetails />}
  />

  <Route
    path="/awards"
    element={<Awards />}
  />

  </Routes>
  );
}
export default App;
