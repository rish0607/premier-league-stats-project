import React, { useState } from 'react';
import './TeamCard.css';
import { useNavigate } from "react-router-dom";

export default function TeamCard({ team }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const winPercentage = (
    (team.stats.wins / team.stats.played) * 100
  ).toFixed(1);

  return (
    <div className={`team-card ${expanded ? 'expanded' : ''}`}>

      <div className="team-header" onClick={toggleExpand}>

        <div className="team-logo-section">

          <div className={`rank-number rank-${team.position}`}>
            #{team.position}
          </div>

          <div
            className="team-logo"
            style={{ backgroundColor: team.color }}
          >
            <img
              src={team.logo}
              alt={team.name}
              className="logo-image"
            />
          </div>

          <div className="team-info">
            <h3 className="team-name">
              {team.name}
            </h3>
          </div>

        </div>

        <div className="team-stats-preview">

          <div className="stat-item">
            <span className="stat-label">PTS</span>
            <span className="stat-value">
              {team.stats.points}
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-label">GD</span>
            <span className="stat-value">
              {team.stats.goalDifference > 0 ? "+" : ""}
              {team.stats.goalDifference}
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-label">W</span>
            <span className="stat-value">
              {team.stats.wins}
            </span>
          </div>

        </div>

        <div className="expand-icon">
          {expanded ? "▼" : "▶"}
        </div>

      </div>

      {expanded && (
        <div className="team-details">

          {/* Player Stats Button */}

          <div className="player-stats-btn-container">
            <button
              className="player-stats-btn"
              onClick={() => navigate(`/team/${team.id}`)}
            >
              View Player Statistics
            </button>
          </div>

          {/* Team Statistics */}

          <div className="stats-section">

            <h4>Team Statistics</h4>

            <div className="stats-grid">

              <div className="stat-card">
                <div className="stat-title">
                  Played
                </div>
                <div className="stat-content">
                  {team.stats.played}
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-title">
                  Wins
                </div>
                <div className="stat-content">
                  {team.stats.wins}
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-title">
                  Draws
                </div>
                <div className="stat-content">
                  {team.stats.draws}
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-title">
                  Losses
                </div>
                <div className="stat-content">
                  {team.stats.losses}
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-title">
                  Goals For
                </div>
                <div className="stat-content">
                  {team.stats.goalsFor}
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-title">
                  Goals Against
                </div>
                <div className="stat-content">
                  {team.stats.goalsAgainst}
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-title">
                  Goal Difference
                </div>
                <div className="stat-content">
                  {team.stats.goalDifference > 0 ? "+" : ""}
                  {team.stats.goalDifference}
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-title">
                  Points
                </div>
                <div className="stat-content">
                  {team.stats.points}
                </div>
              </div>

            </div>

            {/* Win Rate */}

            <div className="win-rate-section">

              <p>
                Win Rate: {winPercentage}%
              </p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${winPercentage}%`,
                    backgroundColor: team.color
                  }}
                />
              </div>

            </div>

          </div>

          {/* CSV-Based Player Analytics Message */}

          <div className="players-section">

            <h4>Player Analytics</h4>

            <p className="player-analytics-text">
              Detailed player statistics for this team
              are available on the Player Statistics page.
              Click the button above to view all players,
              goals, assists, appearances, xG, xA and
              advanced metrics loaded from the CSV dataset.
            </p>

          </div>

        </div>
      )}

    </div>
  );
}