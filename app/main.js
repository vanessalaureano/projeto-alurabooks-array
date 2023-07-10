let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI); // espere por uma promessa
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}

