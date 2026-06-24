import React from "react";
import { useNavigate } from "react-router-dom";
import { teamsData } from "../data/teams";
import "./Awards.css";

export default function Awards() {
  const navigate = useNavigate();

  const awards = [
    {
      title: "Player of the Season",
      player: "Mohamed Salah",
      team: "Liverpool",
      image: "/player-images/Mohamed Salah.png"
    },

    {
      title: "Goal of the Season",
      player: "Omar Marmoush",
      team: "Manchester City",
      image: "/player-images/Omar Marmoush.png"
    },

    {
      title: "Golden Glove",
      player: "David Raya",
      team: "Arsenal",
      image: "/player-images/David Raya.png"
    },

    {
      title: "Save of the Season",
      player: "Emiliano Martínez",
      team: "Aston Villa",
      image: "/player-images/Emiliano Martínez.png"
    },

    {
      title: "Playmaker",
      player: "Mohamed Salah",
      team: "Liverpool",
      image: "/player-images/Mohamed Salah.png"
    },

    {
      title: "Golden Boot",
      player: "Mohamed Salah",
      team: "Liverpool",
      image: "/player-images/Mohamed Salah.png"
    },

    {
      title: "Young Player of the Season",
      player: "Ryan Gravenberch",
      team: "Liverpool",
      image: "/player-images/Ryan Gravenberch.png"
    },

    {
      title: "Most Powerful Goal of the Season",
      player: "Alexander Isak",
      team: "Newcastle United",
      image: "/player-images/Alexander Isak.png"
    }
  ];

  const openPlayerPage = (award) => {
    const team = teamsData.find(
      (t) => t.name === award.team
    );

    if (!team) return;

    navigate(
      `/player/${team.id}/${encodeURIComponent(
        award.player
      )}`
    );
  };

  return (
    <div className="awards-page"
        style={{
      backgroundImage: `url(/player-backgrounds/player-bg-3.png)`
        }}>

      <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      <header className="awards-header">

        <div className="awards-header-card">

          <h1>SEASON AWARDS</h1>

          <p>
            Premier League 2024-25
          </p>

        </div>

      </header>

      <div className="awards-grid">

        {awards.map((award, index) => (

          <div
            key={index}
            className="award-card"
            onClick={() => openPlayerPage(award)}
          >

            <h3>{award.title}</h3>

            <div className="award-content">

              <img
                src={award.image}
                alt={award.player}
                className="award-player-img"
                onError={(e) => {
                  e.target.src =
                    "/player-images/default-player.png";
                }}
              />

              <div className="award-info">

                <h4>{award.player}</h4>

                <p>{award.team}</p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}