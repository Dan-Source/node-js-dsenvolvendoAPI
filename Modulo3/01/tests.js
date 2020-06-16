const assert = require('assert')


const {obterPokemon} = require('./service')

describe("Pokemon teste", function (){
    it('Buscar bulbasaur com nome e url no formato json', async () => {
        const expected = [
            { name: 'bulbasaur'}
        ]
        const [...resultado] = await obterPokemon()
        const pegarBulbasaurs = resultado.filter((pokemon) =>{
                return pokemon.name.toLowerCase().indexOf('bulbasaur') !== -1
        })
        console.log(pegarBulbasaurs)

        assert.deepEqual(resultado, expected)
    })
})