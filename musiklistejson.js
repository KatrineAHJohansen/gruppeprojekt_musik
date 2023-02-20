const urlParams = new URLSearchParams(window.location.search);
console.log("params", urlParams);

const cat = urlParams.get("cat");
console.log("cat", cat);

document.querySelector("h1").textContent = cat;

const url = "https://musikliste-8db4.restdb.io/rest/musikliste";

const options = {
  headers: {
    "x-apikey": "63edf385478852088da68348",
  },
};

async function hentData() {
  const resspons = await fetch(`https://musikliste-8db4.restdb.io/rest/musikliste?genre=${cat}`, options);
  const json = await resspons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  console.log(json);
  json.forEach((song) => {
    const klon = template.cloneNode(true);
    klon.querySelector("h2").textContent = song.sang;
    klon.querySelector("h3").textContent = song.kunstner;
    klon.querySelector("source").src = `lydfil/` + song.lydfil;
    main.appendChild(klon);
  });
}

hentData();
