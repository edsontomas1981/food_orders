let produtos = [{'descricao':'Corona 600 ml','preco':30.00},
                {'descricao':'Amstel 600 ml','preco':30.00},
                {'descricao':'Heineken 600 ml','preco':30.00},
                {'descricao':'Budweiser 600 ml','preco':30.00},
                {'descricao':'Brahma 600 ml','preco':30.00},
                {'descricao':'Imperio 600 ml','preco':30.00},
                {'descricao':'Eisenbahn','preco':30.00},
                {'descricao':'Skol 600 ml','preco':30.00}
              ]


document.addEventListener('DOMContentLoaded',()=>{
  carrega_carrossel_pedidos()
  gera_pedidos()
  gera_linhas_produtos(produtos)
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








const abrir_modal_gera_pedidos = ()=>{
  var myModal = new bootstrap.Modal(document.getElementById('modal_gera_pedidos'));
  myModal.show();
}


const gera_linhas_produtos = (produtos)=>{
  let linha_produtos_ped = ''
  produtos.forEach(element => {
    linha_produtos_ped += `                  
    <div class="col-4 ms-auto" >
      <h7 class="qtde_produtos">${element.descricao}</h7>
    </div>
    <div class="col-5 ms-auto">
      <div class="input-group mb-3">
        <button class="btn btn-outline-danger btn-qtde-produtos" type="button"><i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <input type="text" class="form-control qtde_produtos" id="qtde_produtos" placeholder="Quantidade" value="1">
        <button class="btn btn-outline-secondary btn-qtde-produtos" type="button"><i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="col-2 ms-auto">
      <button class="btn btn-outline-primary" type="button"><i class="fa fa-cart-plus" aria-hidden="true"></i>
      </button>
    </div>     
    `
});
  var div_pedidos = document.getElementById("linha_produtos");
  div_pedidos.innerHTML = linha_produtos_ped
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
                <div class="row" id="linha_produtos"> 
                             
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    `
  }

