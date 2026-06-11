import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { teamsData } from "../data/teams";
import Papa from "papaparse";
import "./PlayerStats.css";

export default function PlayerStats() {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const team = teamsData.find(
    (t) => t.id === Number(teamId)
  );

  const [players, setPlayers] = useState([]);
  const [sortBy, setSortBy] = useState("goals");

  if (!team) {
    return <h1>Team Not Found</h1>;
  }

  const teamMap = {
    "Newcastle United": "Newcastle Utd",
    "Manchester United": "Manchester Utd",
    "Tottenham": "Tottenham Hotspur",
    "Wolves": "Wolverhampton Wanderers"
  };

  const csvTeam = teamMap[team.name] || team.name;

  const teamBackgrounds = {
  Arsenal: "/team-backgrounds/arsenal-2.jpg"
  };

  useEffect(() => {
    Papa.parse("/players_data-2024_2025.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,

      complete: (result) => {
        
        const teamPlayers = result.data.filter(
          (player) => 
            player.Squad?.trim() === csvTeam.trim()
        );

        setPlayers(teamPlayers);
        console.log(result.data[0]);
      }
    });
  }, [csvTeam]);

  const sortedPlayers = [...players].sort((a, b) => {
    switch (sortBy) {
      case "goals":
        return Number(b.Gls || 0) - Number(a.Gls || 0);

      case "assists":
        return Number(b.Ast || 0) - Number(a.Ast || 0);

      case "appearances":
        return Number(b.MP || 0) - Number(a.MP || 0);

      default:
        return 0;
    }
  });

  return (
    <div className="player-page"
      style={{
      backgroundImage: `url(${teamBackgrounds[team.name]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh"
        }}>

      <header className="player-header">
        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <img
          src={team.logo}
          alt={team.name}
          className="team-page-logo"
        />

        <h1>{team.name}</h1>

        <p className="player-subtitle">
          2024-25 Player Statistics
        </p>
      </header>

      <div className="player-filter-section">
        <h2>Player Table</h2>

        <div className="filter-buttons">
          <button onClick={() => setSortBy("goals")}>
            GOALS
          </button>

          <button onClick={() => setSortBy("assists")}>
            ASSISTS
          </button>

          <button onClick={() => setSortBy("appearances")}>
            APPEARANCES
          </button>
        </div>
      </div>

    <div className="players-grid">
    {sortedPlayers.map((player, index) => (
    <div
      key={index}
      className="player-tile"
      style={{
        background: `linear-gradient(
        135deg,
        ${team.color},
        rgba(255,255,255,0.15)
          )`
      }}
      onClick={() =>
        navigate(
          `/player/${team.id}/${encodeURIComponent(
            player.Player
          )}`
        )
      }
    >
      <img
        src={`/player-images/${player.Player}.png`}
        alt={player.Player}
        className="player-image"
        onError={(e) => {
          e.target.src =
            "/player-images/default-player.png";
        }}
      />

      <h3>{player.Player}</h3>

      <div className="player-mini-stats">
        <div>
          <span>Goals</span>
          <strong>{player.Gls || 0}</strong>
        </div>

        <div>
          <span>Assists</span>
          <strong>{player.Ast || 0}</strong>
        </div>

        <div>
          <span>Apps</span>
          <strong>{player.MP || 0}</strong>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}