const service = require('./service')

async  function main(){
    try {
        const resultado = await service.obterPokemon('b')
        const pokemonsList = []
        console.time('for')
        for(let i = 0; i < resultado.length - 1; i++){
            const pokemon = resultado[i]
            pokemonsList.push(pokemon.name);
        }
        console.timeEnd('for')

        console.time('for-in')
        for(let i in resultado){
            const pokemon = resultado[i]
            pokemonsList.push(pokemon.name);
        }
        console.timeEnd('for-in')
        console.time('for-of')
        for(pokemon of resultado){
            pokemonsList.push(pokemon.name)
        }
        console.timeEnd('for-of')
        console.log("pokemons: ", pokemonsList)
    } catch (error) {
        console.error('ERROR INTERNO: ', error)
    }
}

main();