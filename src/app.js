// import './global.scss';
import router from './controllers/router.js';
import { grab, onClick, render } from './utils/utils.js';
import db from './models/db.js';

// Dynamically add featured artists
import artistCard from './views/components/artistCard.js';
const featuredCards = grab('.cards');
const { artists } = db;
const featuredArtists = artists.reduce((acc, artist) => acc + artistCard(artist), ``);
render(featuredCards, featuredArtists);

// Toggle mobile menu
const menuBurger = grab('.menu-burger');
const header = grab('header');
const toggleMenu = () => {
  const { className } = header;
  if (className === 'header') {
    header.className = 'openNav';
  } else {
    header.className = 'header';
  }
};

onClick(menuBurger, toggleMenu);

// // Grab Elements
// const navHome = grab('.home');
// const navAbout = grab('.about');
// const page = grab('.page');

// // Add Listeners
// onClick(navHome, () => render(page, home));
// onClick(navAbout, () => render(page, about));

router();