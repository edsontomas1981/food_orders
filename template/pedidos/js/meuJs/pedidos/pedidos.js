let json_categorias = {'cervejas':[{'id':1,'descricao':'Corona 600 ml','preco':30.00,'qtde':0},
                {'id':2,'descricao':'Amstel 600 ml','preco':30.00,'qtde':0},
                {'id':3,'descricao':'Heineken 600 ml','preco':30.00,'qtde':0},
                {'id':4,'descricao':'Budweiser 600 ml','preco':30.00,'qtde':0},
                {'id':5,'descricao':'Brahma 600 ml','preco':30.00,'qtde':0},
                {'id':6,'descricao':'Imperio 600 ml','preco':30.00,'qtde':0},
                {'id':7,'descricao':'Eisenbahn','preco':30.00,'qtde':0},
                {'id':8,'descricao':'Skol 600 ml','preco':30.00,'qtde':0}],
              'pizzas':[{'id':9,'descricao':'Calabresa','preco':30.00,'qtde':0},
              {'id':10,'descricao':'Mussarela','preco':30.00,'qtde':0},
              {'id':11,'descricao':'Frango com Bacon','preco':30.00,'qtde':0},
              {'id':12,'descricao':'Baiana','preco':30.00,'qtde':0},
              {'id':13,'descricao':'Portuguesa','preco':30.00,'qtde':0},
              {'id':14,'descricao':'Atum','preco':30.00,'qtde':0},
              {'id':15,'descricao':'Frango com Catupiry','preco':30.00,'qtde':0},
              {'id':16,'descricao':'Calabresa c/ Queijo','preco':30.00,'qtde':0}]}

document.addEventListener('DOMContentLoaded',()=>{
  carrega_carrossel_pedidos()
  gera_pedidos()
})

const carrega_carrossel_pedidos=()=>{
  $('.carrossel_categorias').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
}

const teste = (element)=>{
  // Obtém o valor do atributo data-id
  var dataId = element.getAttribute("data-id");

  // Exibe o valor no console (você pode fazer o que quiser com o valor)
  console.log("Valor do data-id:", dataId);

  gera_linhas_produtos(dataId)

  var myModal = new bootstrap.Modal(document.getElementById('modal_gera_pedidos'));
  myModal.show();
}

const abrir_modal_gera_pedidos = ()=>{
  var myModal = new bootstrap.Modal(document.getElementById('modal_gera_pedidos'));
  myModal.show();
}

const subtrai_qtde = (elemento)=>{
  var dataId = elemento.getAttribute("data-id");
  let qtde = document.getElementById("inpt_qtde"+dataId)

  if(parseInt(qtde.value)>0){
    qtde.value-=1
  }
}

const adiciona_qtde = (elemento)=>{
  var dataId = elemento.getAttribute("data-id");
  let qtde = document.getElementById("inpt_qtde"+dataId)
  qtde.value = 1 + parseInt(qtde.value)
  
}

const obterItemPorIdECategoria=(categoria, categoriaId)=> {
  if (json_categorias[categoria]) {
      const itens = json_categorias[categoria];
      const itemEncontrado = itens.find(item => item.id == categoriaId);

      if (itemEncontrado) {
          console.log(`Item encontrado na categoria ${categoria}:`, itemEncontrado);
          return itemEncontrado
      } else {
          console.log(`Item com ID ${categoriaId} não encontrado na categoria ${categoria}.`);
      }
  } else {
      console.log(`Categoria ${categoria} não encontrada.`);
  }
}

var itens_pedidos = []

// Função para adicionar um item ao array ou somar a quantidade se já existir
function adicionarOuSomarQuantidade(item) {
  const index = itens_pedidos.findIndex(i => i.id === item.id);


  if (index !== -1) {
    let atual = parseInt(itens_pedidos[index].qtde)
    let novo_valor = parseInt(item.qtde)
    // O item já existe no array, então somamos a quantidade
    itens_pedidos[index].qtde = atual + novo_valor;
    
  } else {
    // O item não existe, então adicionamos ao array
    itens_pedidos.push(item);
  }
}

// Exemplo de uso na função gera_tabela_pedido
const gera_tabela_pedido = (elemento) => {
  var dataId = elemento.getAttribute("data-id");
  var dataCategoria = elemento.getAttribute("data-categoria");
  let qtde = document.getElementById("inpt_qtde" + dataId);
  let item = obterItemPorIdECategoria(dataCategoria, dataId);
  item['qtde'] = qtde.value;
  const index = itens_pedidos.findIndex(i => i.id === item.id);

  adicionarOuSomarQuantidade(item);
  popula_tabela_pedidos(itens_pedidos);
};

const popula_tabela_pedidos =(pedidos)=>{
  const tabelaCorpo = document.getElementById('tbody_itens_pedido');
  tabelaCorpo.innerHTML = ''; // Limpar o conteúdo atual

    pedidos.forEach(item => {
      const newRow = tabelaCorpo.insertRow();
      const cellId = newRow.insertCell(0);
      const cellDescricao = newRow.insertCell(1);
      const cellPrecoUnitario = newRow.insertCell(2);
      const cellQuantidade = newRow.insertCell(3);
      const cellPrecoTotal = newRow.insertCell(4);
      const cellBotaoMenos = newRow.insertCell(5);
      const cellBotaoMais = newRow.insertCell(6);

      cellId.textContent = item.id;
      cellDescricao.textContent = item.descricao;
      cellPrecoUnitario.textContent = item.preco.toFixed(2);
      cellQuantidade.textContent = item.qtde;
      cellPrecoTotal.textContent = ''; // Preencher conforme necessário
      cellBotaoMenos.innerHTML = '<button type="button" class="btn btn-outline-danger btn-qtde-produtos"><i class="fa fa-minus" aria-hidden="true"></i></button>';
      cellBotaoMais.innerHTML = ''; // Preencher conforme necessário
  });
  
}


const gera_linhas_produtos = (categoria)=>{
  let linha_categoria_ped = ''
  console.log(json_categorias)
  json_categorias[categoria].forEach(element => {
    linha_categoria_ped += `                  
    <div class="col-4 ms-auto pl-4" >
      <h7 class="qtde_produtos">${element.descricao}</h7>
    </div>
    <div class="col-5 ms-auto">
      <div class="input-group mb-3">
        <button type="button" class="btn btn-outline-danger btn-qtde-produtos" data-id="${element.id}" onclick="subtrai_qtde(this)"><i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <input type="text" class="form-control qtde_produtos" id="inpt_qtde${element.id}" placeholder="Quantidade" value="1">
        <button type="button" class="btn btn-outline-secondary btn-qtde-produtos" data-id="${element.id}" onclick="adiciona_qtde(this)" ><i class="fa fa-plus" aria-hidden="true"></i>
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

