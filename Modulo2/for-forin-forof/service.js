const axios = require('axios');
const URL = `https://pokeapi.co/api/v2/pokemon`

// async function  obterPokemon(nome) {
//     const url = `${URL}`
//     const response = await axios.get(url)
//     return response.data.results
// }


obterPokemon('b')
     .then(function(resultado){
         console.log('resultado: ', resultado)
     })
     .catch(function(error){
         console.error('ERROR: ', error)
     })
obterPokemon()

module.exports = {
    obterPokemon
}
