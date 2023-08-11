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
    artistData('Daddy Yankee', ['Con Calma', 'Dura', 'Gasolina'], "Daddy Yankee: The reggaeton icon who ignited the genre's explosion with his irresistible beats and influential style. A trailblazer whose music continues to set dance floors ablaze and inspire fans around the globe.", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIut3_uFlFlHyefmX05o9H3E-WRHMbKskUKdBwxHRitZZxNnWvnqjuFPX3ZKmTEpcZx7VK&s'),
    artistData('Nicky Jam', ['Hasta el Amanecer', 'El Perdón (with Enrique Iglesias)', 'X (with J Balvin)'], 'A reggaeton sensation who has conquered hearts with his captivating melodies and magnetic stage presence. His music resonates worldwide, uniting cultures and sparking a rhythmic revolution.', 'https://i.scdn.co/image/ab67616100005174f9301ee82e1eee3128eff931'),
    artistData('Tego Calderon', ["Pa' Que Retozen", 'Metele Sazon', 'Dando Break'], 'A reggaeton pioneer known for his distinctive sound and socially conscious lyrics.', 'https://yt3.googleusercontent.com/kLvlPYWMrnvQVW6ObEtgjL5m5aZwBXaXTeGX6cxIOIV12iobB-kdfouBoXqIfsTH1tXcH-0mXg=s900-c-k-c0x00ffffff-no-rj'),
    artistData('Carol G', ['Bichota', 'Tusa (with Nicki Minaj)', 'Ay, DiOs Mío!'], 'A rising reggaeton star celebrated for her dynamic vocals and empowering presence.', 'https://remezcla.com/wp-content/uploads/2023/07/header-GettyImages-1529560337-1424x1068.jpg'),
    artistData('Bad Bunny', ['Dákiti (with Jhay Cortez)', 'Vete', 'Mía (with Drake)'], "A genre-defying phenomenon who's reshaped Latin music with his genre-blending creativity and chart-topping hits.", 'https://yt3.googleusercontent.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj'),
  ],
};

// Dynamically add featured artists
const artistCard = (artistData, index) => {
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
    <div class="card card--${index}">
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
const featuredArtists = artists.reduce((acc, artist, i) => acc + artistCard(artist, i), '');
render(featuredCards, featuredArtists);

// Show only 2 artists in mobile
const artistCards = Object.values(grab('.cards').children);
const visibleCards = [0, 1];
const renderMobileCards = () => {
  artistCards.forEach((card, i) => {
    if (visibleCards.includes(i)) {
      card.classList.remove('hide');
    } else {
      card.classList.add('hide');
    }
  });

  if (visibleCards[0] === 4) {
    visibleCards[0] = 0;
    visibleCards[1] = 1;
  } else {
    visibleCards[0] += 2;
    visibleCards[1] += 2;
  }
};

renderMobileCards();

// activate button to cicle through featured artists on mobile version
const moreArtists = grab('.more');
onClick(moreArtists, renderMobileCards);

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
    const mainNavItems = Object.values(grab('.main').children);
    const pageName = window.location.hash.substring(1);
    if (pageName.includes('home') || pageName.includes('about')) page.className = `${pageName}Page`;
    mainNavItems.forEach((item) => {
      if (item.innerText.toLowerCase() === pageName) {
        item.classList.add('current');
      } else {
        item.classList.remove('current');
      }
    });
  });
};
router();