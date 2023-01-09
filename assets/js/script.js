function selecionarComida(botaoClicado) {
    const botaoSelecionadoAntes = document.querySelector('.comidaselecionado')

    if (botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove('comidaselecionado')
    }
    
        botaoClicado.classList.add('comidaselecionado')
}