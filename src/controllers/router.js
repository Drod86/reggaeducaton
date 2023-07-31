import { render } from '../utils/utils.js';

const routes = {};

const addRoute = (path, page) => { routes[path] = page; };

const router = (container) => {
  window.addEventListener('popstate', () => {
    const pageName = window.location.hash.substring(1);
    render(container, routes[pageName]);
  });
};

export { router, addRoute, routes };