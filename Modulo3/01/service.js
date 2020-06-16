const {
    get
} = require('axios');

const URL = `https://pokeapi.co/api/v2/pokemon`

async function obterPokemon(){
        // const url = `${URL}/search=${name}&format=json`
        const result = await get(URL)
        // console.log(result.data.results)
        return result.data.results.map(mapearPokemon)
}

// obterPokemon()

function mapearPokemon(pokemon){
    return {
        nome: pokemon.nome
    }
}

module.export = {
    obterPokemon
}