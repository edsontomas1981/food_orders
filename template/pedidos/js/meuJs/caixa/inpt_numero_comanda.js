let pedido = new Pedido()
let numero_comanda = document.getElementById('numero_comanda')
    numero_comanda.addEventListener('blur',()=>{
    let itens = JSON.parse(pedido.recuperaPedidoLocalStoragePorMesa(12))
    carrega_items_pedido_lista(itens.itens)
    popula_item_por_comanda(itens.itens)
})




