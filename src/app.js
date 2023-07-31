import './global.css';
import { grab, render, onClick } from './utils/utils.js';

// Render the Inital App Layout
import renderLayout from './views/layout.js';

// Add Page Routing
import { router, addRoute } from './controllers/router.js';
// Import the layout Elements
const home = '<div>THIS IS THE HOME PAGE VIEW</div>';
const about = '<div>this is the about page view</div>';
renderLayout(home);
addRoute('', home); // param1 = name of the page, param 2 = the pages markup
addRoute('about', about);
router();

// Controls

// Grab Elements
const navHome = grab('.home');
const navAbout = grab('.about');
const page = grab('.page');

// Add Listeners
onClick(navHome, () => render(page, home));
onClick(navAbout, () => render(page, about));
