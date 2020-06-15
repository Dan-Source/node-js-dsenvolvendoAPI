// const {
//     obterPokemon
// } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial){

    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]

    for(let index = 0; index <= this.length; index ++){
        valorFinal = callback(valorFinal, this[index], this)
    }

    return valorFinal

}

async function main(){
    try {

        const sequenciaDeNumeros = [1, 2, 3,  4, 5, 6, 7, 8, 9, 10]
        
        // const totalDaSequencia = sequenciaDeNumeros.reduce((anterior, proximo) => {
        //     return anterior + proximo
        // })

        const sequeciaDeNomesEComunidades = [['Daniel', 'Maiury'], [ 'python', 'django']]

        const totalDaSequencia = sequeciaDeNomesEComunidades.meuReduce((anterior, proximo)=> {
            return anterior.concat(proximo)
        }, [])
        .join(', ')

        console.log("Total da Sequencia: ", totalDaSequencia)
    } catch (error) {
        console.error("Olha o erro aqui: ", error)        
    }
}

main()