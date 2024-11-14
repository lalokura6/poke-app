
const listaPokemon = document.querySelector('#listaPokemon')
const apiUrl = 'https://pokeapi.co/api/v2/pokemon-species/';

function mostrarPokemon (poke) {
    // const pokemon = data; ok
    const div = document.createElement("div")
    div.classList.add("pokemon");
    div.innerHTML = `
                  <div class="pokemon-imagen">
                    <img src="" alt=${poke.name}>
                  </div>
                  <div class="pokemon-info">
                    <div class="nombre-contenedor">
                      <h2 class="pokemon-nombre">${poke.name}</h2>
                    </div>
                  </div>
    `
  
    listaPokemon.append(div);

}

async function obtenerDatos() { 
      try { 
        const response = await fetch(apiUrl); 
        const {results} = await response.json(); 

        for(let i = 0; i < results.length; i++){ 
            mostrarPokemon(results[i]);  
        } 
        

        // throw new Error("API Error");
        console.log(results); 
    } catch (error) {  
        // console.log(error)
} 
} 

obtenerDatos(); 