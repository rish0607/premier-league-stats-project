import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";


import "./PlayerDetails.css";
import ChartCard from "../components/ChartCard";
import AnalyticsChart from "../components/AnalyticsChart";
import { countryMap } from "../data/countryMap";


export default function PlayerDetails() {
  const { playerName } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    Papa.parse("/players_data-2024_2025.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        const foundPlayer = results.data.find(
          (p) =>
            p.Player === decodeURIComponent(playerName)
        );

        setPlayer(foundPlayer);
      }
    });
  }, [playerName]);

  if (!player) return <h2>Loading...</h2>;
  

  const chartData = [
    {
      metric: "Goals",
      value: Number(player.Gls || 0)
    },
    {
      metric: "xG",
      value: Number(player.xG || 0)
    },
    {
      metric: "Assists",
      value: Number(player.Ast || 0)
    },
    {
      metric: "xA",
      value: Number(player.xA || 0)
    }
  ];


const attackData = [
  { name: "Goals", value: Number(player.Gls || 0) },
  { name: "Assists", value: Number(player.Ast || 0) },
  { name: "G+A", value: Number(player["G+A"] || 0) }
];

const radarData = [
  { metric: "Goals", value: Number(player.Gls || 0) },
  { metric: "Assists", value: Number(player.Ast || 0) },
  { metric: "Passing", value: Number(player["Cmp%"] || 0) },
  { metric: "Defense", value: Number(player.Tkl || 0) },
  { metric: "Carries", value: Number(player.PrgC || 0) },
  { metric: "Creativity", value: Number(player.KP || 0) }
];

const playingTimeData = [
  { name: "Minutes", value: Number(player.Min || 0) },
  { name: "90s", value: Number(player["90s"] || 0) },
  { name: "Starts", value: Number(player.Starts || 0) }
];

const attackingData = [
  { metric: "Goals", value: Number(player.Gls || 0) },
  { metric: "Assists", value: Number(player.Ast || 0) },
  { metric: "G+A", value: Number(player["G+A"] || 0) }
];

const advancedData = [
  { metric: "xG", value: Number(player.xG || 0) },
  { metric: "xA", value: Number(player.xA || 0) },
  { metric: "xAG", value: Number(player.xAG || 0) }
];

const shootingData = [
  { metric: "Shots", value: Number(player.Sh || 0) },
  { metric: "On Target", value: Number(player.SoT || 0) },
  { metric: "Conversion", value: Number(player["G/Sh"] || 0) * 100 }
];

const passingData = [
  { metric: "Completed", value: Number(player.Cmp || 0) },
  { metric: "Attempted", value: Number(player.Att || 0) },
  { metric: "Accuracy", value: Number(player["Cmp%"] || 0) }
];

const progressionData = [
  { metric: "Prog Passes", value: Number(player.PrgP || 0) },
  { metric: "Prog Carries", value: Number(player.PrgC || 0) },
  { metric: "Prog Receives", value: Number(player.PrgR || 0) }
];

const defenseData = [
  { metric: "Tackles", value: Number(player.Tkl || 0) },
  { metric: "Interceptions", value: Number(player.Int || 0) },
  { metric: "Blocks", value: Number(player.Blocks || 0) },
  { metric: "Clearances", value: Number(player.Clr || 0) }
];

const disciplineData = [
  { metric: "Yellow", value: Number(player.CrdY || 0) },
  { metric: "Red", value: Number(player.CrdR || 0) }
];

const chanceData = [
  { metric: "KP", value: Number(player.KP || 0) },
  { metric: "SCA", value: Number(player.SCA || 0) },
  { metric: "GCA", value: Number(player.GCA || 0) }
];

const possessionData = [
  { metric: "Touches", value: Number(player.Touches || 0) },
  { metric: "Carries", value: Number(player.Carries || 0) },
  { metric: "Take-ons", value: Number(player.Succ || 0) }
];

const teamImpactData = [
  { metric: "+/-", value: Number(player["+/-"] || 0) },
  { metric: "xG+/-", value: Number(player["xG+/-"] || 0) },
  { metric: "On-Off", value: Number(player["On-Off"] || 0) }
];

const nationCode = player.Nation?.split(" ").pop();

const nation = countryMap[nationCode] || {
  name: nationCode || "Unknown",
  code: "un"
};

 const playerInfo = [
  {
    label: "Age",
    value: player.Age
    ? Math.floor(Number(player.Age))
    : "N/A"
  },
  {
    label: "Position",
    value: player.Pos || "N/A"
  },
  {
    label: "Nation",
    value: `${nation.flag} ${nation.name}`
  },
  {
    label: "Birth Year",
    value: player.Born || "N/A"
  }
];

  return (
  <div className="player-details-page"
    style={{
      backgroundImage: `url(/player-backgrounds/player-bg-3.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh"
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

    <div className="player-hero">

  {/* Left Section */}
  <div className="player-overview">

  <div className="player-image-section">
    <img
      src={`/player-images/${player.Player}.png`}
      alt={player.Player}
      className="player-detail-image"
      onError={(e) => {
        e.target.src = "/player-images/default-player.png";
      }}
    />

    <h1>{player.Player}</h1>

    <h3>{player.Squad}</h3>
  </div>

</div>

{/* Center Section */}
<div className="player-info-card">

  <h2>Player Information</h2>

  <div className="player-info-grid">

    <div className="info-item">
      <span>Age</span>
      <strong>
        {player.Age
          ? Math.floor(Number(player.Age))
          : "N/A"}
      </strong>
    </div>

    <div className="info-item">
      <span>Position</span>
      <strong>{player.Pos || "N/A"}</strong>
    </div>

    <div className="info-item">
      <span>Nation</span>

      <div className="nation-display">
        <img
          src={`https://flagcdn.com/24x18/${nation.code}.png`}
          alt={nation.name}
          className="nation-flag"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        <strong>{nation.name}</strong>
      </div>
    </div>

    <div className="info-item">
      <span>Birth Year</span>
      <strong>{player.Born || "N/A"}</strong>
    </div>

  </div>

  <div className="stats-grid">

    <div className="stat-card">
      <span>Goals: </span>
      <strong><p>{player.Gls}</p></strong>
    </div>

    <div className="stat-card">
      <span>Assists: </span>
      <strong><p>{player.Ast}</p></strong>
    </div>

    <div className="stat-card">
      <span>Apps: </span>
      <strong><p>{player.MP}</p></strong>
    </div>

    <div className="stat-card">
      <span>Minutes: </span>
      <strong><p>{player.Min}</p></strong>
    </div>

  </div>

</div>

{/* Right Section */}
  <div className="profile-radar-card">

    <h2>Player Profile</h2>

    <ResponsiveContainer width="100%" height={320}>
      <RadarChart data={radarData}>
        <Tooltip
        contentStyle={{
          background: "#111827",
          border: "1px solid #374151",
          borderRadius: "12px",
          color: "#fff"
        }}
      />
      <PolarGrid />

      <PolarAngleAxis
        dataKey="metric"
        stroke="#fff"
      />

            <Radar
            dataKey="value"
            stroke="#7c3aed"
            fill="#7c3aed"
            fillOpacity={0.6}
          />
        </RadarChart>
        </ResponsiveContainer>

      </div>

    </div>

    <div className="dashboard-grid">

  {/* Playing Time */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Playing Time</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={playingTimeData} layout="vertical">
          <CartesianGrid stroke="rgba(255,255,255,0.08)" />
          <XAxis type="number" stroke="#fff" />
          <YAxis type="category" dataKey="name" stroke="#fff" />
          <Tooltip />

          <Bar
            dataKey="value"
            fill="#3b82f6"
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Playing Time Analysis</h3>
      <p>
        Displays total minutes played, starts and 90-minute
        equivalents. Higher values indicate greater trust
        from the manager and squad importance.
      </p>
    </div>

  </div>

  {/* Discipline */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Discipline</h2>

      <div className="discipline-cards">

          <div className="yellow-card-box">
            <span className="card-label">
              Yellow Cards
            </span>

            <strong>
              {player.CrdY || 0}
            </strong>
          </div>

          <div className="red-card-box">
            <span className="card-label">
              Red Cards
            </span>

            <strong>
              {player.CrdR || 0}
            </strong>
          </div>

        </div>
    </div>

    <div className="graph-description">
      <h3>Discipline Analysis</h3>
      <p>
        Shows yellow and red card accumulation throughout
        the season, highlighting disciplinary tendencies.
      </p>
    </div>

  </div>

  {/* Attacking */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Attacking Output</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={attackingData}>
          <XAxis dataKey="metric" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />

          <Bar
            dataKey="value"
            fill="#22c55e"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Attacking Contribution</h3>
      <p>
        Compares goals, assists and total goal contributions
        (G+A) to measure direct offensive impact.
      </p>
    </div>

  </div>

  {/* Advanced Attacking */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Advanced Attacking</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={advancedData}>
          <XAxis dataKey="metric" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#8b5cf6"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Expected Metrics</h3>
      <p>
        Compares xG, xA and xAG to evaluate expected
        attacking output beyond raw goals and assists.
      </p>
    </div>

  </div>

  {/* Shooting */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Shooting</h2>

      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={shootingData}>
          <Tooltip
            contentStyle={{
              background: "#111827",
              border: "1px solid #374151",
              borderRadius: "12px",
              color: "#fff"
            }}
          />
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" stroke="#fff" />

          <Radar
            dataKey="value"
            fill="#ef4444"
            stroke="#ef4444"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Shooting Profile</h3>
      <p>
        Visualizes shot volume, shots on target and
        finishing efficiency.
      </p>
    </div>

  </div>

  {/* Passing */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Passing</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={passingData}>
          <XAxis dataKey="metric" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />

          <Bar
            dataKey="value"
            fill="#06b6d4"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Passing Analysis</h3>
      <p>
        Compares pass completion, attempts and overall
        passing accuracy.
      </p>
    </div>

  </div>

  {/* Progression */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Progression</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={progressionData}>
          <XAxis dataKey="metric" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />

          <Bar
            dataKey="value"
            fill="#f97316"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Ball Progression</h3>
      <p>
        Measures progressive passes, carries and receives,
        showing how effectively the player advances play.
      </p>
    </div>

  </div>

  {/* Chance Creation */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Chance Creation</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chanceData}>
          <XAxis dataKey="metric" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />

          <Bar
            dataKey="value"
            fill="#14b8a6"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Creative Output</h3>
      <p>
        Evaluates key passes, shot-creating actions and
        goal-creating actions.
      </p>
      <p>KP: Key Passes</p>
      <p>SCA: Shot-Creating Actions</p>
      <p>GCA: Goal-Creating Actions</p>
    </div>

  </div>

  {/* Possession */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Possession</h2>

      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={possessionData}>
          <Tooltip
            contentStyle={{
              background: "#111827",
              border: "1px solid #374151",
              borderRadius: "12px",
              color: "#fff"
            }}
          />
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" stroke="#fff" />

          <Radar
            dataKey="value"
            fill="#6366f1"
            stroke="#6366f1"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Possession Metrics</h3>
      <p>
        Highlights touches, carries and successful
        take-ons when in possession.
      </p>
    </div>

  </div>

  {/* Defense */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Defense</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={defenseData}>
          <XAxis dataKey="metric" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />

          <Bar
            dataKey="value"
            fill="#eab308"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Defensive Contribution</h3>
      <p>
        Compares tackles, interceptions, blocks and
        clearances to assess defensive activity.
      </p>
    </div>

  </div>

  {/* Team Impact */}
  <div className="analytics-section">

    <div className="dashboard-card">
      <h2>Team Impact</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={teamImpactData}>
          <XAxis dataKey="metric" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    <div className="graph-description">
      <h3>Overall Team Impact</h3>
      <p>
        Measures on/off influence, goal difference impact
        and expected goal contribution to team performance.

        <p>On-Off: Team performance difference</p>
        <p>+/- : Goal difference with player</p>
        <p>xG+/- : Expected goal difference with player</p>

      </p>
    </div>

  </div>

  </div>
</div>
);
}
