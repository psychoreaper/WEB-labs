import addName from "./name.js";
import getPokemonInfo from "./pokemon.js";

const url = "https://pokeapi.co/api/v2/pokemon/slowpoke";
onload = function loadPage() {
  document.getElementById("name").onclick = addName;
  document.getElementById("pokemon").onclick = addPokemon;
};

function addPokemon() {
  return getPokemonInfo(url);
}
