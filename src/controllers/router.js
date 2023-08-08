import { grab } from '../utils/utils.js';

const router = () => {
  window.addEventListener('popstate', () => {
    let page = grab('#page')
    const pageName = window.location.hash.substring(1);
    if (pageName === 'home' || pageName === 'about') page.className = pageName;
  });
};

export default router;