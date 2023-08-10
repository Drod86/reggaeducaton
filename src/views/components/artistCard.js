'use strict';

const artistCard = (artistData) => {
  const {fullName, songs, blurb, imgUrl} = artistData;
  const songsString = songs.reduce((acc, song, i) => {
    if (i === songs.length -1) {
      return acc + song + ' ';
    } else {
      return acc + song + ', ';
    }
  }, ``);

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
  `
}

export default artistCard;