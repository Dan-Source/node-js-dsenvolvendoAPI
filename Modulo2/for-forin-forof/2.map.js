const service = require('./service')

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []

    for(let indice = 0; indice <= this.length - 1; indice++){
        const resultado  = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado
}

async function main(){
    try{
        const results = await service.obterPokemon('b')
        // const pokemonList = []

        // results.forEach(function(pokemon){
        //     pokemonList.push(pokemon.name)
            
        // });

        // const pokemonList = results.map( function(pokemon){
        //     return pokemon.name
        // })

        // const pokemonList = results.map((pokemon) => pokemon.name)

        const pokemonList = results.meuMap(function( pokemon, indice){
            return `[${indice}] ${pokemon.name}`
        })

        console.log("Lista de Nomes de Pokemons: ", pokemonList)

    }catch(error){
        console.error("Olha o erro: ", error)
    }
}

main();