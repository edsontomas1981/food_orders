let obj_estoque = new Estoque;

const consultarEstoque = (id) => {
  // Procura o item com o ID correspondente em todas as categorias
  const itemEncontrado = Object.values(obj_estoque.estoque)
    .flat()
    .find(item => item.id == id);

  if (itemEncontrado) {
    // Retorna a quantidade em estoque do item encontrado
    return itemEncontrado.qtde_estoque;
  } else {
    return 'Item não encontrado no estoque.';
  }
};

function removerDoEstoque(id, quantidade) {
  // Procura o item com o ID correspondente em todas as categorias
  const item = Object.values(obj_estoque.estoque)
    .flat()
    .find(item => item.id == id);

  if (item) {
    // Verifica se há quantidade suficiente em estoque
    if (item.qtde_estoque >= quantidade) {
      // Remove a quantidade especificada do estoque
      item.qtde_estoque = Math.max(0, item.qtde_estoque - quantidade);
      obj_estoque.salvaEstoqueLocalStorage(obj_estoque.estoque)
      return true; // Operação bem-sucedida
    } else {
      return false; // Quantidade em estoque insuficiente
    }
  } else {
    return false; // Item não encontrado no estoque
  }
}

function adicionarAoEstoque(id, quantidade) {
  const item = Object.values(obj_estoque.estoque)
    .flat()
    .find(item => item.id == id);

  if (item) {
    // Adiciona a quantidade especificada ao estoque
    item.qtde_estoque += quantidade;
    obj_estoque.salvaEstoqueLocalStorage(obj_estoque.estoque)
    return true; // Operação bem-sucedida
  } else {
    return false; // Item não encontrado no estoque
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  gera_pedidos()
  limpa_localStorage()
  obj_estoque.criaEstoque()
})

const limpa_localStorage=()=>{
  localStorage.removeItem('itens_pedidos');
  localStorage.removeItem('estoque');

}


const abrir_modal_gera_pedidos = (element)=>{
  var dataId = element.getAttribute("data-id");

  gera_linhas_produtos(dataId)

  var myModal = new bootstrap.Modal(document.getElementById('modal_gera_pedidos'));
  myModal.show();
}

const btn_subtrai_qtde = (elemento)=>{
  var dataId = elemento.getAttribute("data-id");
  let qtde = document.getElementById("inpt_qtde"+dataId)

  if(parseInt(qtde.value)>0){
    qtde.value-=1
  }
}

const btn_add_qtde = (elemento)=>{
  var dataId = elemento.getAttribute("data-id");
  let qtde = document.getElementById("inpt_qtde"+dataId)
  qtde.value = 1 + parseInt(qtde.value)
  
}

const obterItemPorIdECategoria=(categoria, categoriaId)=> {
  if (obj_estoque.estoque[categoria]) {
      const itens = obj_estoque.estoque[categoria];
      const itemEncontrado = itens.find(item => item.id == categoriaId);

      if (itemEncontrado) {
          // console.log(`Item encontrado na categoria ${categoria}:`, itemEncontrado);
          return itemEncontrado
      } else {
          console.log(`Item com ID ${categoriaId} não encontrado na categoria ${categoria}.`);
      }
  } else {
      console.log(`Categoria ${categoria} não encontrada.`);
  }
}

var itens_pedidos = []

// Função para obter a quantidade em estoque de um item
const obterQuantidadeEmEstoque = (id) => {
  return consultarEstoque(id);
};

// Função para adicionar um item ao array de pedidos
const adicionarItemAoPedido = (pedidoArray, novoItem) => {
  const itemExistente = pedidoArray.find(item => item.id === novoItem.id && item.categoria === novoItem.categoria);

  if (itemExistente) {
    // Se o item já existe, adiciona a quantidade ao item existente
    itemExistente.qtde += novoItem.qtde;
  } else {
    // Se o item não existe, adiciona o novo item ao array
    pedidoArray.push(novoItem);
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

  // Obtém os itens já pedidos do localStorage
    let itensPedidosLocalStorage = JSON.parse(localStorage.getItem('itens_pedidos')) || [];

    if (parseFloat(qtdeInput.value)<=qtdeEmEstoque){
    // Adiciona o item ao array de pedidos

      adicionarItemAoPedido(itensPedidosLocalStorage, item);
      removerDoEstoque(dataId,parseFloat(qtdeInput.value))
    }else {
      msgAviso(`A quantidade do pedido excede o estoque disponível (${qtdeEmEstoque}). Por favor, ajuste sua seleção.`)
    }
    // Atualiza o localStorage com os itens de pedido
    atualizarLocalStorage(itensPedidosLocalStorage);

    // Popula a tabela de pedidos
    popula_tabela_pedidos(itensPedidosLocalStorage);
  }else{
  msgAviso('A quantidade do pedido deve ser um número positivo.')  
}
};


const popula_tabela_pedidos =(pedidos)=>{
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

      cellId.textContent = item.id;
      cellDescricao.textContent = item.descricao;
      cellPrecoUnitario.textContent = item.preco.toFixed(2);
      cellQuantidade.textContent = item.qtde;
      cellPrecoTotal.textContent = (parseFloat(item.preco.toFixed(2))*parseFloat(item.qtde)).toFixed(2); // Preencher conforme necessário
      cellBotaoMenos.innerHTML = '<button type="button" class="btn btn-outline-danger btn-qtde-produtos"><i class="fa fa-minus" aria-hidden="true"></i></button>';
      // cellBotaoMais.innerHTML = ''; // Preencher conforme necessário
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

