var codigo_produto = document.getElementById('codigo_produto')
let estoque = new Estoque()
codigo_produto.addEventListener('blur',()=>{
    lista_itens_caixa.push(estoque.obterItemPorId(1))
    popula_item_por_comanda(lista_itens_caixa)
})