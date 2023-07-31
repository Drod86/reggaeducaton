import header from './components/header.js';

const renderLayout = (homePage) => {
  const BODY = document.querySelector('body');
  const app = `
    <a href="#" class="home">HOME</a>
    <a href="#about" class="about">ABOUT</a>
    ${header(1, 'This template is set up to use ES6 modules and scss in css modules format  to use a component focused approach to build a static web app for github pages. Microverse student linter configurations are in place.')}
    <div class="page">
    ${homePage}
    </div>`;
  BODY.innerHTML = app;
};

export default renderLayout;