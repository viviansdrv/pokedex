// https://pokeapi.co/api/v2/pokemon?offset=0&limit=10

const offset = 0
const limit = 20
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                    </div>
        </li>
        ` 
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    /* .then(function (response){
            return response.json()
    }) mesma coisa que a de baixo*/
    
    .then ((response) => response.json()) 
    .then((jsonBody) => jsonBody.results)
    //.then((pokemonList) => console.log(pokemonList[0]))
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)

        }
    })

