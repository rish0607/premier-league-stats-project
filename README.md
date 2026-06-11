# ⚽ Premier League Stats Dashboard

A beautiful, modern web application showcasing Premier League team statistics and player information for the 2024-25 season, built with React and Vite.

## 🎯 Features

- **Interactive Team Cards**: Click any team to expand and view detailed statistics
- **Real-time Sorting**: Sort teams by position, points, goal difference, or wins
- **Player Statistics**: View top players from each team with goals, assists, and appearances
- **Modern UI Design**: Responsive, fancy styling inspired by the official Premier League website
- **Persistent Teams**: Other teams remain visible when expanding a team (no removal from view)
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatically adapts to system color scheme preferences

## 📦 Project Structure

```
src/
├── components/
│   ├── TeamCard.jsx          # Main team card component with expand functionality
│   └── TeamCard.css          # Component-specific styling
├── data/
│   └── teams.js              # Team and player statistics data
├── App.jsx                   # Main application component
├── App.css                   # Application-level styling
├── index.css                 # Global styles and CSS variables
├── main.jsx                  # React entry point
└── assets/                   # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd premier-league-stats-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📊 Data Structure

### Team Object
```javascript
{
  id: 1,
  name: "Manchester City",
  position: 1,
  logo: "🔵",
  color: "#6CABDE",
  stats: {
    played: 38,
    wins: 28,
    draws: 7,
    losses: 3,
    goalsFor: 96,
    goalsAgainst: 34,
    goalDifference: 62,
    points: 91
  },
  players: [
    {
      name: "Player Name",
      position: "ST",
      goals: 27,
      assists: 8,
      appearances: 35
    }
  ]
}
```

## 🎨 Styling & Customization

### Color Variables
The app uses CSS custom properties for easy theming:
- `--primary-color`: Main brand color (#003d82)
- `--primary-light`: Lighter variant (#0066cc)
- `--accent`: Accent color (#ff6b35)
- Plus many more in `:root`

### Customizing Team Colors
Edit `src/data/teams.js` to change team logo colors and add custom styling.

## 📱 Responsive Breakpoints

- **Desktop**: Full-width layout (1024px+)
- **Tablet**: Optimized two-column layout (768px - 1024px)
- **Mobile**: Single-column layout (<768px)
- **Small Mobile**: Extra optimizations (<480px)

## 🔧 Adding New Data

To add new teams or update statistics:

1. Edit `src/data/teams.js`
2. Add or modify team objects in the `teamsData` array
3. Changes will auto-reload in development mode

Example:
```javascript
{
  id: 9,
  name: "Your Team Name",
  position: 9,
  logo: "🔶",
  color: "#FF6B35",
  stats: {
    played: 38,
    wins: 15,
    draws: 5,
    losses: 18,
    goalsFor: 55,
    goalsAgainst: 60,
    goalDifference: -5,
    points: 50
  },
  players: [
    // ... add player objects
  ]
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project. Contributions are welcome!

## 📞 Support

For issues or questions, please refer to the project documentation or create an issue in the repository.

---

**Built with ❤️ using React + Vite**
