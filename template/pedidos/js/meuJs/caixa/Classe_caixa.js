var lista_itens_caixa = []

const add_item_lista = (item)=>{
    lista_itens_caixa.push(item)
}   

const carrega_items_pedido_lista = (pedidos)=>{
    pedidos.forEach(item => {
        add_item_lista(item)
    })
}
