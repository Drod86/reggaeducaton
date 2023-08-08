// import './global.scss';
import router from './controllers/router.js';
import { grab, onClick } from './utils/utils.js';

// Initial render of home
// grab('.about').style.display = 'none';

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