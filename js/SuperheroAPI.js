"use strict";

function superHeroes() {
  fetch("https://superheroapi-m1.herokuapp.com/heroes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => console.log(err));
}
