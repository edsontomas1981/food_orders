const popula_itens_caixa =(item)=>{
    console.log(item)
    const tabelaCorpo = document.getElementById('itens_caixa');
    tabelaCorpo.innerHTML = ''; // Limpar o conteúdo atual

    const newRow = tabelaCorpo.insertRow();
    const cellDescricao = newRow.insertCell(0);
    const cellQuantidade = newRow.insertCell(1);
    const cellPrecoUnitario = newRow.insertCell(2);
    const cellPrecoTotal = newRow.insertCell(3);
    const cellBotaoMenos = newRow.insertCell(4);

    console.log(item.preco,item.quantidade)

    cellDescricao.textContent = item.descricao;
    cellPrecoUnitario.textContent = parseFloat(item.preco).toFixed(2);
    cellQuantidade.textContent = item.quantidade;
    cellPrecoTotal.textContent =(parseFloat(item.preco).toFixed(2)*parseFloat(item.quantidade).toFixed(2)); // Preencher conforme necessário
    cellBotaoMenos.innerHTML = `<button type="button" data-id="${item.id}" data-categoria="${item.categoria}" class="btn btn-outline-danger btn-qtde-produtos" onclick="remove_tbody_pedidos(this)"><i class="fa fa-minus" aria-hidden="true"></i></button>`;

}

const popula_item_por_comanda=(array_pedidos)=>{
    console.log(array_pedidos)
    lista_itens_caixa.forEach(item => {
        popula_itens_caixa(item)
    })

}



