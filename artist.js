const url = "https://musikliste-8db4.restdb.io/rest/musikliste";

const options = {
  headers: {
    "x-apikey": "63edf385478852088da68348",
  },
};

async function hentData() {
  const resspons = await fetch(`https://musikliste-8db4.restdb.io/rest/musikliste`, options);
  const json = await resspons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  json.forEach((song) => {
    console.log(song._id);
    const klon = template.cloneNode(true);
    klon.querySelector("p").textContent = song.kunstner;
    klon.querySelector("a").href = "artist_afspilning.html?artist=" + song.kunstner;

    main.appendChild(klon);
  });
}

hentData();
