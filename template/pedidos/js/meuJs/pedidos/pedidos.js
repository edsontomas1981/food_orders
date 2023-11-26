let obj_estoque = new Estoque;
let obj_pedido = new Pedido(5) ;
let item = new Item ;

obj_pedido.iniciarPedido()

document.addEventListener('DOMContentLoaded',()=>{
  gera_pedidos()
  limpa_localStorage()
  obj_estoque.criaEstoque()
})

const limpa_localStorage=()=>{
  localStorage.clear()
}

// Função para obter a quantidade em estoque de um item
const obterQuantidadeEmEstoque = (id) => {
  return consultarEstoque(id);
};

// Função para adicionar um item ao array de pedidos
const adicionarItemAoPedido = async(novoItem) => {
  let response =  await obj_pedido.adicionarItem(novoItem.id,novoItem.qtde)

  switch (response) {
    case 1:
      msgInfo(`"${novoItem.descricao}" foi adicionado ao pedido. Quantidade: ${novoItem.qtde}`);
      popula_subtotal(obj_pedido.subtotal)
      obj_estoque.alterarQuantidadeItem(novoItem.id,-novoItem.qtde)
      obj_estoque.salvaEstoqueLocalStorage()
      break;

    case 2:
        msgInfo(`"${novoItem.descricao}" foi adicionado ao pedido. Quantidade: ${novoItem.qtde}`);
        break;
  
    default:
      break;
  }

};
// Função para atualizar o localStorage com os itens de pedido
const atualizarLocalStorage = (pedidoArray) => {
  localStorage.setItem('itens_pedidos', JSON.stringify(pedidoArray));
};

// Função principal para gerar a tabela de pedidos
const gera_tabela_pedido = async (elemento) => {
  const dataId = elemento.getAttribute("data-id");
  const dataCategoria = elemento.getAttribute("data-categoria");
  const qtdeInput = document.getElementById("inpt_qtde" + dataId);
  const item = obterItemPorIdECategoria(dataCategoria, dataId);
  const qtdeEmEstoque = obterQuantidadeEmEstoque(dataId);

  if (qtdeInput.value >0){
    item.qtde = parseInt(qtdeInput.value);

    if (parseFloat(qtdeInput.value)<=qtdeEmEstoque){
      // Adiciona o item ao array de pedidos
      adicionarItemAoPedido(item);

    }else {
      msgAviso(`A quantidade do pedido excede o estoque disponível (${qtdeEmEstoque}). Por favor, ajuste sua seleção.`)
    }
    // Popula a tabela de pedidos
    popula_tabela_pedidos(obj_pedido.itens);
    }else{
      msgAviso('A quantidade do pedido deve ser um número positivo.')  
    }
};

const remove_tbody_pedidos=(element)=>{
  const dataId = element.getAttribute("data-id");
  obj_pedido.removerItem(dataId)
  popula_tabela_pedidos(obj_pedido.itens)
  popula_subtotal(obj_pedido.subtotal)
}

const popula_subtotal = (subtotal)=>{
  const td_subtotal = document.getElementById('subtotal')
  td_subtotal.textContent ='R$ ' + parseFloat(subtotal).toFixed(2)
  console.log(obj_pedido)
}

70
const popula_tabela_pedidos =(pedidos)=>{
  console.log(pedidos)
  const tabelaCorpo = document.getElementById('tbody_itens_pedido');
  tabelaCorpo.innerHTML = ''; // Limpar o conteúdo atual

    pedidos.forEach(item => {
      const newRow = tabelaCorpo.insertRow();
      const cellId = newRow.insertCell(0);
      const cellDescricao = newRow.insertCell(1);
      const cellQuantidade = newRow.insertCell(2);
      const cellPrecoUnitario = newRow.insertCell(3);
      const cellPrecoTotal = newRow.insertCell(4);
      const cellBotaoMenos = newRow.insertCell(5);
      const cellBotaoMais = newRow.insertCell(6);

      cellId.textContent = item.produto.id;
      cellDescricao.textContent = item.produto.descricao;
      cellPrecoUnitario.textContent = parseFloat(item.produto.preco).toFixed(2);
      cellQuantidade.textContent = item.quantidade;
      cellPrecoTotal.textContent =(parseFloat(item.produto.preco).toFixed(2)*parseFloat(item.quantidade).toFixed(2)); // Preencher conforme necessário
      cellBotaoMenos.innerHTML = `<button type="button" data-id="${item.produto.id}" data-categoria="${item.produto.categoria}" class="btn btn-outline-danger btn-qtde-produtos" onclick="remove_tbody_pedidos(this)"><i class="fa fa-minus" aria-hidden="true"></i></button>`;
      // cellBotaoMais.innerHTML = ''; // Preencher conforme necessário

      cellId.classList.add('d-none', 'd-sm-table-cell', 'sua-classe-id');
      cellPrecoUnitario.classList.add('d-none', 'd-sm-table-cell', 'sua-classe-preco-unitario');
  });
  
}

const gera_linhas_produtos = (categoria)=>{
  let linha_categoria_ped = ''
  obj_estoque.estoque[categoria].forEach(element => {
    linha_categoria_ped += `                  
    <div class="col-4 ms-auto pl-4" >
      <h7 class="qtde_produtos">${element.descricao}</h7>
    </div>
    <div class="col-5 ms-auto">
      <div class="input-group mb-3">
        <button type="button" class="btn btn-outline-danger btn-qtde-produtos" data-id="${element.id}" onclick="btn_subtrai_qtde(this)"><i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <input type="text" class="form-control qtde_produtos" id="inpt_qtde${element.id}" placeholder="Quantidade" value="1">
        <button type="button" class="btn btn-outline-secondary btn-qtde-produtos" data-id="${element.id}" onclick="btn_add_qtde(this)" ><i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="col-2 ms-auto">
      <button class="btn btn-outline-primary" type="button" data-categoria=${categoria} data-id="${element.id}" onclick=(gera_tabela_pedido(this))><i class="fa fa-cart-plus" aria-hidden="true"></i>
      </button>
    </div>  
    <div class="col-12">
    <hr class="linha"/>
    </div>  
    `
});
  var div_pedidos = document.getElementById("linha_produtos");
  div_pedidos.innerHTML = linha_categoria_ped
}

const gera_pedidos = ()=>{
  var div_pedidos = document.getElementById("div_modal_pedidos");
    div_pedidos.innerHTML = `
      <!-- Modal -->
      <div class="modal fade" id="modal_gera_pedidos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-xxl-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Adicionar Produtos</h5>
            </div>
            <div class="modal-body">
              <div class="row" id="linha_produtos"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  const impressao = ()=>{
    obj_pedido.imprimirPedido()
  }