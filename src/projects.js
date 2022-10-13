import SarafShot1 from './assets/saraf-screenshot.png'
import SarafShot2 from './assets/saraf-screenshot-1.png'
import SarafShot3 from './assets/saraf-screenshot-2.png'
import TrackMateShot1 from './assets/trackmate-screenshot.png'
import TrackMateShot2 from './assets/trackmate-screenshot-1.png'
import TrackMateShot3 from './assets/trackmate-screenshot-2.png'
import TicTacToeShot1 from './assets/tictactoe-screenshot.png'
import TicTacToeShot2 from './assets/tictactoe-screenshot-1.png'
import TicTacToeShot3 from './assets/tictactoe-screenshot-2.png'
import MobClockShot1 from './assets/mobclock-screenshot.png'
import MobClockShot2 from './assets/mobclock-screenshot-1.png'
import MobClockShot3 from './assets/mobclock-screenshot-2.png'
import FancychatShot1 from './assets/fancychat-screenshot.png'
import FancychatShot2 from './assets/fancychat-screenshot-1.png'
import FancychatShot3 from './assets/fancychat-screenshot-2.png'

export const projects = [{
    name: 'Saraf',
    description: "Saraf is a money exchange and money transfer management system built with Vue, Express and PostgreSQL. Some features of the application includes user management, accounts management, journal, deposite box, printable receipts, bookmarking, profit/loss report, telegram bot integration, telegram notifications, dark mode, quick search, filtering and lots more...",
    pageLink: 'https://saraf-app.netlify.app',
    gitLink: 'https://github.com/sayedmurtaza24',
    techStack: ['VueJS', 'Express', 'NodeJS', 'PrimeVue', 'PostgreSQL', 'Sequelize', 'JWT', 'AWS', 'Docker'],
    images: [SarafShot1, SarafShot2, SarafShot3],
    accentColor: "#c6d9d2"
}, {
    name: 'TrackMate',
    description: "TrackMate is a student academic and behavioral tracking system made to make the life of teachers easier and reduce paper work! Build on top of React and NodeJS in two weeks as graduation project in a team it offers many features including student timeline management, multiple class management, class overview, emergency contacts and many more... ",
    pageLink: 'https://track-mate.netlify.app',
    gitLink: 'https://github.com/sayedmurtaza24/final-project-client',
    techStack: ['React', 'Redux Toolkit', 'NodeJS', 'Express', 'PrimeReact', 'MongoDB', 'Mongoose', 'Google Auth'],
    images: [TrackMateShot1, TrackMateShot2, TrackMateShot3],
    accentColor: "#c5d4e0"
}, {
    name: 'FancyChat',
    description: "FancyChat is a realtime video calling application with filters made in one day during salt bootcamp using React, Express, P5-React and PeerJS. The Application features user signup and user authentication using JWT, friend management, call log with details, realtime effect selector, responsive UI that works on every device and more...",
    pageLink: 'https://jealous-fox-sunglasses.cyclic.app',
    gitLink: 'https://github.com/sayedmurtaza24/fancy-chat',
    techStack: ['React', 'Redux Toolkit', 'NodeJS', 'Express', 'MongoDB', 'JWT', 'Docker', 'PeerJS', 'P5-React', 'WebRTC', 'GLSL Shaders'],
    images: [FancychatShot1, FancychatShot2, FancychatShot3],
    accentColor: "#c5c5e0"
}, {
    name: 'Tic-Tac-Toe',
    description: "A cool single/multiplyer tic tac toe game written with vanilla javascript, with multiplayer connection made possible using long polling technique.\nAlso offering spectator mode, nice animations, current records and simple json file-system based data persistence.",
    pageLink: 'https://tic-tac-doe.herokuapp.com',
    gitLink: 'https://github.com/sayedmurtaza24/tic-tac-toe',
    techStack: ['HTML', 'CSS', 'Vanilla Javascript', 'Long Polling', 'NodeJS', 'SVG'],
    images: [TicTacToeShot1, TicTacToeShot2, TicTacToeShot3],
    accentColor: "#e5e5e5"
}, {
    name: 'MobClock',
    description: "A nice looking, funny sounding turn-based alarm clock for mob programming sessions written in plain vanilla javascript.\nIt also sends out a notification to remind who's turn it is, auto shuffles the names and even plays a funny sound on each turn (you gotta try it!).\n\nDon't forget to add your break times too...",
    pageLink: 'https://sayedmurtaza24.github.io/mobclock/',
    gitLink: 'https://github.com/sayedmurtaza24/mobclock',
    techStack: ['Vanilla Javascript'],
    images: [MobClockShot1, MobClockShot2, MobClockShot3],
    accentColor: "#e0dfc5"
}];