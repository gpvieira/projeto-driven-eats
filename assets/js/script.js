function selecionarComida(botaoClicado) {
    const botaoSelecionadoAntes = document.querySelector('.comidaselecionado')

    if (botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove('comidaselecionado')
    }
    
        botaoClicado.classList.add('comidaselecionado')
}

function selecionarBebida(botaoClicado2) {
    const botaoSelecionadoAntes2 = document.querySelector('.bebidaselecionado')

    if (botaoSelecionadoAntes2 !== null){
        botaoSelecionadoAntes2.classList.remove('bebidaselecionado')
    }
    
        botaoClicado2.classList.add('bebidaselecionado')
}

function selecionarSobremesa(botaoClicado3) {
    const botaoSelecionadoAntes3 = document.querySelector('.sobremesaselecionado')

    if (botaoSelecionadoAntes3 !== null){
        botaoSelecionadoAntes3.classList.remove('sobremesaselecionado')
    }
    
        botaoClicado3.classList.add('sobremesaselecionado')
}