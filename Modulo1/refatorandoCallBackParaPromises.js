const util = require(null);
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario(resolve) {
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            return resolve({
              id: 1,
              nome: "Daniel",
              dataNascimento: new Date(),
            });
        }, 1000);

    })
    
  }
  
  function obterTelefone(idUsuario) {
    return new Promise( function resolvePromise(resolve, reject){
      setTimeout(() => {
        return resolve({
          telefone: '1199003242',
          ddd: 86,
        });
      }, 2000); 
    })

  }
  
  function obterEndereco(idUsuario, callback) {
      setTimeout(function (){
        return callback(null,{
          rua: "Dos bobos",
          numero: 230,
        }, 3000);
      });
    }
  
// Manipulando a Promisse com .then() .catch()

const obtendoUsuarioPromise = obterUsuario()

obtendoUsuarioPromise
  .then(
    function (usuario){
      return obterTelefone(usuario.id)
        .then( function resolverTelefone(result){
          return {
            usuario: {
              nome: usuario.nome,
              id: usuario.id
                    },
            telefone: result
                }}
        )}
  )
  .then( function (resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(
          function resolverEndereco(result){
            return console.log("tem alguma coisa aqui")
          }
        )
  }
   
  )
  .then(
      function(resultado){
            console.log('Resultado: ',resultado)
      } 
  )
  .catch(
      function(error){
          console.log("Aconteceu um erro!", error)
      }
  )
  
//   obterUsuario(function resolverUsuario(error, usuario) {
//     if (error) {
//       console.log("deu ruim", error);
//       return;
//     }
  
  
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//       if (error1) {
//         console.log("deu ruim", error1);
//         return;
//       }
  
//       obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//         if (error2) {
//           console.log("deu ruim", error2);
//           return;
//         }
  
//         console.log(`
//         Nome:${ usuario.nome},
//         Endereco:${endereco.rua}, ${endereco.numero}
//         Telefone:(${telefone.ddd})${telefone.telefone}
//             `);
//       });
//     });
//   })