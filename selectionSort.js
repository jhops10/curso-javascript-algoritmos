const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual += 1) {
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  console.log('posicao atual', atual);
  console.log('livro atual', livros[atual]);
  let livroMenorPreco = livros[menor];
  console.log('livro menor preco', livros[menor]);

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;

}

console.log(livros);


// livros.forEach((_, indice) => {
//   let menor = menorValor(livros, indice)

//   let livroAtual = livros[indice];
//   let livroMenorPreco = livros[menor];

//   livros[indice] = livroMenorPreco
//   livros[menor] = livroAtual
//  })

// console.log(livros);