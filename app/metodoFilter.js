const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

/* const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros); */

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados);
}
