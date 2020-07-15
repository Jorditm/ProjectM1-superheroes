"use strict";
let filtered = [];
let allHeroes = [];
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", filterHeroes);
function filterHeroes(event) {
  const heroNames = searchInput.value.toLowerCase();
  filtered = allHeroes.filter((oneObj) => {
    if (!oneObj.name) {
      return false;
    }
    if (oneObj.name.toLowerCase().includes(heroNames)) {
      return true;
    }
  });
  const section = document.querySelector(".superhero-list");
  section.innerHTML = "";
  filtered.forEach((oneObj) => {
    const article = document.createElement("article");
    article.classList.add("hero-article");
    article.innerHTML = `
    <h3>${oneObj.name}</h3>
    <div class="hero-article-wrapper"><div><img src="${oneObj.images.sm}" alt ="${oneObj.name}"/></div>
    <div><p class= "title">Full Name</p>
    <p>${oneObj.biography.fullName}</p>
    <p class= "title">First Appearance</p>
    <p>${oneObj.biography.firstAppearance}</p>
    <p class= "title">Publisher</p>
    <p>${oneObj.biography.publisher}</p>
    <p class= "title">POWERSTATS</p>
    <ul><li>Intellingece ->${oneObj.powerstats.intelligence}</li>
    <li>Strength ->${oneObj.powerstats.strength}</li>
    <li>Speed ->${oneObj.powerstats.speed}</li>
    <li>Durability ->${oneObj.powerstats.durability}</li>
    <li>Power ->${oneObj.powerstats.power}</li>
    <li>Combat ->${oneObj.powerstats.combat}</li></ul>
    <p class= "title">APPEARENCE</p>
    <ul><li>Gender -> ${oneObj.appearance.gender}</li>
    <li>Race -> ${oneObj.appearance.race}</li>
    <li>Height -> ${oneObj.appearance.height}</li>
    <li>Weight -> ${oneObj.appearance.weight}</li></ul></div></div>
    `;

    section.appendChild(article);
  });
}
function superHeroes() {
  const section = document.querySelector(".superhero-list");

  for (let i = 0; i < 600; i++) {
    fetch(`https://superheroapi-m1.herokuapp.com/heroes/${i + 1}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        allHeroes.push(data);
        const article = document.createElement("article");
        article.classList.add("hero-article");
        article.innerHTML = `
        <h3>${data.name}</h3>
        <div class="hero-article-wrapper"><div><img src="${data.images.sm}" alt ="${data.name}"/></div>
        <div><p class= "title">Full Name</p>
        <p>${data.biography.fullName}</p>
        <p class= "title">First Appearance</p>
        <p>${data.biography.firstAppearance}</p>
        <p class= "title">Publisher</p>
        <p>${data.biography.publisher}</p>
        <p class= "title">POWERSTATS</p>
        <ul><li>Intellingece ->${data.powerstats.intelligence}</li>
        <li>Strength ->${data.powerstats.strength}</li>
        <li>Speed ->${data.powerstats.speed}</li>
        <li>Durability ->${data.powerstats.durability}</li>
        <li>Power ->${data.powerstats.power}</li>
        <li>Combat ->${data.powerstats.combat}</li></ul>
        <p class= "title">APPEARENCE</p>
        <ul><li>Gender -> ${data.appearance.gender}</li>
        <li>Race -> ${data.appearance.race}</li>
        <li>Height -> ${data.appearance.height}</li>
        <li>Weight -> ${data.appearance.weight}</li></ul></div></div>
        `;

        section.appendChild(article);
      })
      .catch((err) => console.log(err));
  }
}
superHeroes();
