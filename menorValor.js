const livros = require('./listaLivros.js');


function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let index = posicaoInicial; index < arrProdutos.length; index += 1){
    if (arrProdutos[index].preco < arrProdutos[maisBarato].preco) {
      maisBarato = index;
    }
  }
  return maisBarato;

}

module.exports = menorValor;