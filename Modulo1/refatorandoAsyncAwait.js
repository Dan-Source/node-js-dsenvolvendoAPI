function obterUsuario(resolve) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            return resolve({
              id: 1,
              nome: "Daniel",
              dataNascimento: new Date(),
            });
        }, 100);

    })
    
  }
  
  function obterTelefone(idUsuario) {
    return new Promise( function resolvePromise(resolve, reject){
      setTimeout(() => {
        return resolve({
          telefone: '99003242',
          ddd: 86,
        });
      }, 200); 
    })

  }
  
  function obterEndereco(idUsuario) {
      return new Promise( function resolvePromise(resolve, reject){
        setTimeout(function (){
            return resolve({
              rua: "Dos bobos",
              numero: 230,
            }, 300);
          });
      })
      
    }

    async function main(){
        try {
            console.time('medida-promise')
            const usuario = await obterUsuario()
            // const telefone = await obterTelefone(usuario.id)
            // const endereco = await obterEndereco(usuario.id)

            const resultado = await Promise.all(
                [ obterTelefone(usuario.id),
                    obterEndereco(usuario.id)]
            )

            const telefone = resultado[0];
            const endereco = resultado[1];



            console.log(`
                nome: ${usuario.nome}
                telefone: ${telefone.ddd} - ${telefone.telefone}
                endereço: Rua ${endereco.rua} n °${endereco.numero}
            `)
            console.timeEnd('medida-promise')
        } catch (error) {
            console.log("Deu ruim: xabu", error)
        }
    }

    main();