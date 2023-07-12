const livros = require('./listaLivros.js');

let maisBarato = 0;

for (let index = 0; index < livros.length; index += 1){
  if (livros[index].preco < livros[maisBarato].preco) {
    maisBarato = index;
  }
}

console.log(`O livro mais barato é ${livros[maisBarato].titulo} e custa R$ ${livros[maisBarato].preco}`);