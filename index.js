// Utility functions
const grab = (selector) => document.querySelector(selector);
const render = (node, markup) => { node.innerHTML = markup; };
const listen = (node, event, callback) => node.addEventListener(event, callback);
const onClick = (node, callback) => listen(node, 'click', callback);

// Fake Database
const artistData = (fullName, songs, blurb, imgUrl) => ({
  fullName,
  songs,
  blurb,
  imgUrl,
});

const db = {
  artists: [
    artistData('Ivy Queen', ['Quiero Bailar', 'CELEBRANDO', 'Quiero Saber'], 'Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.', 'https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg'),
    artistData('Ivy Queen', ['Quiero Bailar', 'CELEBRANDO', 'Quiero Saber'], 'Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.', 'https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg'),
    artistData('Ivy Queen', ['Quiero Bailar', 'CELEBRANDO', 'Quiero Saber'], 'Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.', 'https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg'),
    artistData('Ivy Queen', ['Quiero Bailar', 'CELEBRANDO', 'Quiero Saber'], 'Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.', 'https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg'),
    artistData('Ivy Queen', ['Quiero Bailar', 'CELEBRANDO', 'Quiero Saber'], 'Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.', 'https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg'),
    artistData('Ivy Queen', ['Quiero Bailar', 'CELEBRANDO', 'Quiero Saber'], 'Ivy Queen is Reggaeton royalty, her empowering lyrics and electrifying beats have left an indelible mark on the music scene. A true trailblazer inspiring a global wave of fans.', 'https://i.pinimg.com/474x/8a/b0/5d/8ab05d648464d4023039ff23fe988998.jpg'),
  ],
};

// Dynamically add featured artists
const artistCard = (artistData) => {
  const {
    fullName, songs, blurb, imgUrl,
  } = artistData;
  const songsString = songs.reduce((acc, song, i) => {
    if (i === songs.length - 1) {
      return `${acc + song} `;
    }
    return `${acc + song}, `;
  }, '');

  return `
    <div class="card">
      <figure class="portrait">
        <svg viewBox="0 0 100 100" class="checkers">
          <use xlink:href="sprite.svg#checkers"></use>
        </svg>
        <img src="${imgUrl}" alt="${fullName}">
      </figure>
      <div class="profile">
        <h3>${fullName}</h3>
        <h5>Hits: ${songsString}</h5>
        <p class="description">${blurb}</p>
      </div>
    </div>
  `;
};
const featuredCards = grab('.cards');
const { artists } = db;
const featuredArtists = artists.reduce((acc, artist) => acc + artistCard(artist), '');
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

// Page routing
const router = () => {
  window.addEventListener('popstate', () => {
    const page = grab('#page');
    const pageName = window.location.hash.substring(1);
    if (pageName.includes('home') || pageName.includes('about')) page.className = `${pageName}Page`;
  });
};
router();