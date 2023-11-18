document.addEventListener('DOMContentLoaded',()=>{
  carrega_carrossel_pedidos()
  gera_offcanvas()
})

const carrega_carrossel_pedidos=()=>{
  $('.your-class').slick({
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

// Adicione um ouvinte de evento de clique à div com a classe car-categoria
document.getElementById('sobremesas').addEventListener('click', function () {
    var meuModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    meuModal.show();
});

const gera_offcanvas = ()=>{
  var div_offcanvas = document.getElementById("offcanvas_pedidos");
  div_offcanvas.innerHTML = `
      <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
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

const clicar_categoria = (teste)=>{
    console.log(teste)
}
