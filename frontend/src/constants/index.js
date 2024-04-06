import { createCampaign, dashboard, logout, payment, profile, Quiz, Leaderboard, Duel, Atom } from '../assets';

export const navlinks = [
  {
    name: 'Home',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Diagram',
    imgUrl: Atom,
    link: '/docs',
  },
  {
    name: 'Quiz',
    imgUrl: Quiz,
    link: '/quiz',
  },
  {
    name: 'Duel',
    imgUrl: Duel,
    link: '/duel',
  },
  {
    name: 'Leaderboard',
    imgUrl: Leaderboard,
    link: '/leaderboard',
  },
  {
    name: 'Logout',
    imgUrl: logout,
    link: '/',
    disabled: false,
  },
];
