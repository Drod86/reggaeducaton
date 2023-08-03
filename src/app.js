import './global.scss';
import { grab, onClick } from './utils/utils.js';
import home from './views/pages/home.js';
import about from './views/pages/about.js';

// Render the Inital App Layout
import renderLayout from './views/layout.js';

// Add Page Routing
import { router, addRoute } from './controllers/router.js';

renderLayout(home());

// Place SVGs
const instaLink = grab('.insta-link');
const instaIcon = grab('.instagram');
const twitterLink = grab('.twitter-link');
const twitter = grab('.twitter');
instaLink.appendChild(instaIcon);
twitterLink.appendChild(twitter);
const logoBox = grab('.logoBox');
const logo = grab('.circle-waveform-lines');
logoBox.insertBefore(logo, logoBox.firstChild);
const mobileNav = grab('.mobileNav');
const menuBurger = grab('.menu-burger');
mobileNav.appendChild(menuBurger);
addRoute('', home()); // param1 = name of the page, param 2 = the pages markup
addRoute('about', about());
router();

// Controls

// Toggle mobile menu
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