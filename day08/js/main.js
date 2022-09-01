// import * as dataTypes from './data-types.js';
// import { primitiveTypes } from './data-types.js';
// import * as strings from './strings.js';
// import * as math from './date-math-popups.js';
// import * as controlFlow from './control-flow.js';
// import * as classes from './classes.js';

class Pokemon {
  constructor(name) {
    this.name = name;
    this.createPokemon();
  }
  createPokemon() {
    fetch("http://pokeapi.co/api/v2/pokemon/" + this.name)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const img = document.createElement("img");
        img.src = data.sprites.front_default;


        document.body.appendChild(img);
        this.height = data.height;


        img.addEventListener('click', () => {
            alert(this.height);
        })
      });
  }
}

const pikachu = new Pokemon("pikachu");
const charmander = new Pokemon("charmander");
const squirtle = new Pokemon("squirtle");
const bulbasaur = new Pokemon("bulbasaur");
const pidgey = new Pokemon("pidgey");


