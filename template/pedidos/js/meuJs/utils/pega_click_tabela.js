const pega_click_tabela=(tabela, classe)=> {
    const botoes = tabela.querySelectorAll('.' + classe);
    botoes.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const valorAtributo = e.target.getAttribute('data-id');
            console.log(valorAtributo)
        });
    });
}