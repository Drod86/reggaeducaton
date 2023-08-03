import logo from "../components/logo";
import {navbar, addNavItem} from "../components/navbar";
import button from "../components/button";

const top = [];
addNavItem(top, 'insta', '', '#instagram');
addNavItem(top, 'twitter', '', '#twitter');
addNavItem(top, 'eng', 'English', '#english');
addNavItem(top, 'myPage', 'My Page', '#myPage');
addNavItem(top, 'logout', 'Logout', '#logout');

const main = [];
addNavItem(main, 'about', 'About', '#about');
addNavItem(main, 'program', 'Program', '#program');
addNavItem(main, 'join', 'Join', '#join');
addNavItem(main, 'sponsor', 'Sponsor', '#sponsor');
addNavItem(main, 'news', 'News', '#news');

const header = () => {
  return `
    <header class="header">
      <div class="topNav">${navbar('top', top)}</div>
      <div class="mainNav">
        ${logo('<h3>Reggea<span class="red"><em>educa</em></span>ton</h3><h5>Concert Tour 2023</h5>')}
        ${navbar('main', main)}
        ${button('getTicket', 'Purchase Tickets')}
      </div>
      <div class="mobileNav"></div>
    </header>
  `
}

export default header;