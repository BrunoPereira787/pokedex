const pokemonDiv = ({id, name, types}) => {
    const li = document.createElement('li');
    
    id = String(id).padStart(3, '0')

    li.setAttribute('class', `card ${types[0]}`)
    li.innerHTML = ` 
        <img class="card-image" alt="${name}" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png"/>
        <h2 class="card-title">${id}. ${name}</h2>
        <p class="card-subtitle">${types.join(' | ')}</p>
    `
    document.querySelector('[data-js="pokedex"]').appendChild(li)

}

const createPokemon = (pokemon) => {

    const pokemons = {
        id:  pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map(pokemon => pokemon.type.name)
    }
    
    pokemonDiv(pokemons)
    
}

const urlPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resultado = await fetch(url)
    const pokemonJson = await resultado.json()
    return pokemonJson
}    

const fetchPokemon = async () => {
    const numberPokemon = 150

    for(let i = 1; i <= numberPokemon; i++){
       const pokemon = await urlPokemon(i)
       createPokemon(pokemon)
    }
    
}

fetchPokemon()

