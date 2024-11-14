
const listaPokemon = document.querySelector('#listaPokemon')
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function obtenerDatos() { 
      try { 
        for( let i = 1; i <= 40; i++ ){ 
            const response = await fetch(apiUrl + i); 
            const data = await response.json(); 
            mostrarPokemon(data);
        } 

        // throw new Error("API Error");
        console.log(results); 
    } catch (error) {  
        // console.log(error)
} 
} 

obtenerDatos(); 

function mostrarPokemon (poke) {
  // const pokemon = data; ok
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
