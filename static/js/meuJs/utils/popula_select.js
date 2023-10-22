const popula_cmb_categorias = async (id_elemento,lista_opcoes)=>{
    // Obtém o elemento select pelo ID (ou pode ser passado diretamente como argumento)
    const select = document.getElementById(id_elemento);

    // Limpa o select, removendo todas as opções atuais
    select.innerHTML = '';

    lista_opcoes.forEach(element => {
        const option = document.createElement('option');
        option.value = element.id;
        option.text = element.nome;
        select.appendChild(option);
    });
}