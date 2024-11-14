
const listaPokemon = document.querySelector('#listaPokemon')
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// document.addEventListener('DOMContentLoaded', obtenerDatos);

        
        for( let i = 1; i <= 30; i++ ) {
          fetch(apiUrl + i)
          .then( (response) => response.json() )
          .then( data => mostrarPokemon(data)) 
        }
        
      
function mostrarPokemon (poke) {
  const div = document.createElement("div")
  div.classList.add("pokemon");
  div.innerHTML = `
                <div class="pokemon-imagen">
                  <img src="${poke.sprites.other["official-artwork"].front_default}" alt=${poke.name}>
                </div>
                <div class="pokemon-info">
                  <div class="nombre-contenedor">
                    <h2 class="pokemon-nombre">${poke.name}</h2>
                  </div>
                </div>
  `

  listaPokemon.append(div);
}