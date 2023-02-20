const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");
const url = `https://musikliste-8db4.restdb.io/rest/musikliste/${id}`;
const options = {
  headers: {
    "x-apikey": "63edf385478852088da68348",
  },
};

async function getProduct() {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

getProduct();

function showProduct(song) {
  //   document.querySelector("h1").textContent = song.kunstner;
  document.querySelector("h2").textContent = song.sang;
  document.querySelector("h3").textContent = song.kunstner;
  document.querySelector("p").textContent = song.genre;
  //   document.querySelector("source").src = "lydfil/" + song.lydfil;
  document.querySelector("source").src = "lydfil/Rue.mp3";
}
