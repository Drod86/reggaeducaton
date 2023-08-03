import header from './sections/header.js';

const renderLayout = (homePage) => {
  const BODY = document.querySelector('.container');
  const app = `
    ${header()}
    <div class="page">
      ${homePage}
    </div>
    `;
  BODY.innerHTML = app;
};

export default renderLayout;