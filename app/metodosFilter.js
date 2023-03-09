const botoes = document.querySelectorAll(".btn")

botoes.forEach(btn =>
    btn.addEventListener('click', filtraLivros))

    function filtraLivros(){
        const elementoBtn = document.getElementById(this.id)
        const elementoCat = elementoBtn.value;
        console.log("teste, ", elementoBtn.value)

        let livrosFiltrados = elementoCat == 'disponivel'? livros.filter(livro => livro.quantidade >0) : livros.filter(livro => livro.categoria == elementoCat)

        exibirOsLivrosNaTela(livrosFiltrados)

        if(elementoCat == 'disponivel'){
            const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
            exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
        }


} 


function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML =`
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}