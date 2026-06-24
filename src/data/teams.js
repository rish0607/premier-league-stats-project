
import ManCityLogo from "../assets/team-logos/Man city.jpeg";
import ArsenalLogo from "../assets/team-logos/Arsenal.png";
import LiverpoolLogo from "../assets/team-logos/Liverpool.png";
import AstonVillaLogo from "../assets/team-logos/villa.jpeg";
import TottenhamLogo from "../assets/team-logos/Spurs.png";
import ChelseaLogo from "../assets/team-logos/Chelsea.jpeg";
import BrightonLogo from "../assets/team-logos/brighton.jpeg";
import ManUnitedLogo from "../assets/team-logos/Man UTD.png";
import FulhamLogo from "../assets/team-logos/Fulham.png";
import BrentfordLogo from "../assets/team-logos/brentford.jpeg";
import WestHamLogo from "../assets/team-logos/West Ham.png";
import CrystalPalaceLogo from "../assets/team-logos/Palace.png";
import IpswichTownLogo from "../assets/team-logos/Ipswich.png";
import LeicesterCityLogo from "../assets/team-logos/leicester.jpeg";
import EvertonLogo from "../assets/team-logos/Everton.png";
import NottinghamForestLogo from "../assets/team-logos/Forrest.png";
import BournemouthLogo from "../assets/team-logos/Bournemouth.png";
import WolvesLogo from "../assets/team-logos/wolves.png";
import SouthamptonLogo from "../assets/team-logos/Southampton.jpeg";
import LutonTownLogo from "../assets/team-logos/Luton.png";
import NewcastleUnitedLogo from "../assets/team-logos/Newcastle.png";


// Premier League Teams Data with Statistics
export const teamsData = [
  {
    id: 1,
    name: "Manchester City",
    position: 3,
    logo: ManCityLogo,
    color: "#6CABDE",
    stats: {
      played: 38,
      wins: 21,
      draws: 8,
      losses: 9,
      goalsFor: 72,
      goalsAgainst: 44,
      goalDifference: 28,
      points: 71
    }
  },
  {
    id: 2,
    name: "Arsenal",
    position: 2,
    logo: ArsenalLogo,
    color: "#EF0107",
    stats: {
      played: 38,
      wins: 20,
      draws: 14,
      losses: 4,
      goalsFor: 69,
      goalsAgainst: 34,
      goalDifference: 35,
      points: 74
    }
    
  },
  {
    id: 3,
    name: "Liverpool",
    position: 1,
    logo: LiverpoolLogo,
    color: "#C8102E",
    stats: {
      played: 38,
      wins: 25,
      draws: 9,
      losses: 4,
      goalsFor: 86,
      goalsAgainst: 41,
      goalDifference: 45,
      points: 84
    }
    
  },
  {
    id: 4,
    name: "Aston Villa",
    position: 6,
    logo: AstonVillaLogo,
    color: "#670E36",
    stats: {
      played: 38,
      wins: 19,
      draws: 9,
      losses: 10,
      goalsFor: 58,
      goalsAgainst: 51,
      goalDifference: 7,
      points: 66
    }
    
  },
  {
    id: 5,
    name: "Tottenham",
    position: 17,
    logo: TottenhamLogo,
    color: "#132257",
    stats: {
      played: 38,
      wins: 20,
      draws: 5,
      losses: 13,
      goalsFor: 66,
      goalsAgainst: 40,
      goalDifference: 26,
      points: 65
    }
  },
  {
    id: 6,
    name: "Chelsea",
    position: 4,
    logo: ChelseaLogo,
    color: "#2853ee",
     stats: {
      played: 38,
      wins: 20,
      draws: 9,
      losses: 9,
      goalsFor: 64,
      goalsAgainst: 43,
      goalDifference: 21,
      points: 69
    }
    
  },
  {
    id: 7,
    name: "Brighton",
    position: 8,
    logo: BrightonLogo,
    color: "#0087DC",
    stats: {
      played: 38,
      wins: 16,
      draws: 13,
      losses: 9,
      goalsFor: 66,
      goalsAgainst: 59,
      goalDifference: 7,
      points: 61
    }
   
  },
  {
    id: 8,
    name: "Manchester United",
    position: 15,
    logo: ManUnitedLogo,
    color: "#DA291C",
    stats: {
      played: 38,
      wins: 16,
      draws: 3,
      losses: 19,
      goalsFor: 57,
      goalsAgainst: 48,
      goalDifference: 9,
      points: 51
    }
    
  },
  {
    id: 9,
    name: "Fulham",
    position: 11,
    logo: FulhamLogo,
    color: "#000000",
    stats: {
      played: 38,
      wins: 15,
      draws: 9,
      losses: 14,
      goalsFor: 54,
      goalsAgainst: 54,
      goalDifference: 0,
      points: 54
    }
    
  },
  {
    id: 10,
    name: "Brentford",
    position: 10,
    logo: BrentfordLogo,
    color: "#E30613",
    stats: {
      played: 38,
      wins: 16,
      draws: 8,
      losses: 14,
      goalsFor: 66,
      goalsAgainst: 57,
      goalDifference: 9,
      points: 56
    }
    
  },
  {
    id: 11,
    name: "West Ham",
    position: 14,
    logo: WestHamLogo,
    color: "#7D2C2C",
    stats: {
      played: 38,
      wins: 13,
      draws: 7,
      losses: 18,
      goalsFor: 48,
      goalsAgainst: 58,
      goalDifference: -10,
      points: 46
    }
    
  },
  {
    id: 12,
    name: "Crystal Palace",
    position: 12,
    logo: CrystalPalaceLogo,
    color: "#003DA5",
    stats: {
      played: 38,
      wins: 12,
      draws: 9,
      losses: 17,
      goalsFor: 40,
      goalsAgainst: 50,
      goalDifference: -10,
      points: 45
    }
    
  },
  {
    id: 13,
    name: "Ipswich Town",
    position: 19,
    logo: IpswichTownLogo,
    color: "#0053A0",
    stats: {
      played: 38,
      wins: 12,
      draws: 8,
      losses: 18,
      goalsFor: 43,
      goalsAgainst: 52,
      goalDifference: -9,
      points: 44
    }
    
  },
  {
    id: 14,
    name: "Leicester City",
    position: 18,
    logo: LeicesterCityLogo,
    color: "#003DA5",
    stats: {
      played: 38,
      wins: 12,
      draws: 7,
      losses: 19,
      goalsFor: 48,
      goalsAgainst: 62,
      goalDifference: -14,
      points: 43
    }
    
  },
  {
    id: 15,
    name: "Everton",
    position: 13,
    logo: EvertonLogo,
    color: "#003DA5",
    stats: {
      played: 38,
      wins: 11,
      draws: 8,
      losses: 19,
      goalsFor: 40,
      goalsAgainst: 57,
      goalDifference: -17,
      points: 41
    }
    
  },
  {
    id: 16,
    name: "Nottingham Forest",
    position: 7,
    logo: NottinghamForestLogo,
    color: "#DD0000",
    stats: {
      played: 38,
      wins: 11,
      draws: 6,
      losses: 21,
      goalsFor: 39,
      goalsAgainst: 62,
      goalDifference: -23,
      points: 39
    }
    
  },
  {
    id: 17,
    name: "Bournemouth",
    position: 9,
    logo: BournemouthLogo,
    color: "#000000",
    stats: {
      played: 38,
      wins: 15,
      draws: 11,
      losses: 12,
      goalsFor: 58,
      goalsAgainst: 46,
      goalDifference: 12,
      points: 56
    }
    
  },
  {
    id: 18,
    name: "Wolves",
    position: 16,
    logo: WolvesLogo,
    color: "#FDB913",
    stats: {
      played: 38,
      wins: 9,
      draws: 5,
      losses: 24,
      goalsFor: 32,
      goalsAgainst: 71,
      goalDifference: -39,
      points: 32
    }
    
  },
  {
    id: 19,
    name: "Southampton",
    position: 20,
    logo: SouthamptonLogo,
    color: "#000000",
    stats: {
      played: 38,
      wins: 5,
      draws: 6,
      losses: 27,
      goalsFor: 27,
      goalsAgainst: 83,
      goalDifference: -56,
      points: 21
    }
    
  },
 
  {
  id: 21,
  name: "Newcastle United",
  position: 5,
  logo: NewcastleUnitedLogo,
  color: "#241F20",
  stats: {
    played: 38,
    wins: 20,
    draws: 6,
    losses: 12,
    goalsFor: 68,
    goalsAgainst: 47,
    goalDifference: 21,
    points: 66
  }
  
}
];

