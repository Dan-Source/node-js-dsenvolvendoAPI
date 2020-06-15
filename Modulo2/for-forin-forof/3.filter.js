const { obterPokemon } = require('./service')

Array.prototype.meuFilter = function (callback){
    const list = []
    for (index in this){
        const item = this[index]
        const result = callback(item, index, this)
        if(!result) continue;
        list.push(item)
    }
    return list
}

async function main(){
    try {
        const [...resultado ] = await obterPokemon()
        // const familySaurs = resultado.filter(function(pokemon){
        //     console.log(pokemon)
        //     const filterPokemon = pokemon.name.toLowerCase().indexOf('saur') !== -1
        //     return filterPokemon
        // })

        const familySaurs =  resultado.meuFilter((pokemon, index, resultado) => {
            console.log(`index: ${index}`, resultado.length)
            return pokemon.name.toLowerCase().indexOf('saur') !== -1
        })
        console.log(familySaurs)

        const pokemons = familySaurs.map((pokemon)=> pokemon.name)

        console.log(pokemons)
        
        
        // .filter(function(pokemon){
        //     const pokemonFilter = item.toLowerCase().indexOf(`saurs`)
        //     console.log(pokemonFilter)
        //     return   -1
        // })
    } catch (error) {

        console.error('Olha o erro aqui', error)
        
    }
        
}

main()