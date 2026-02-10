const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const body = document.querySelector(`body`)
const ul = document.createElement(`ul`)
ul.innerHTML = albums.map(a => `<li>${a}</li>`).join(``)
body.appendChild(ul)
