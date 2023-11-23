document.addEventListener('DOMContentLoaded',()=>{
    gera_carrossel_pedidos(retorna_estoque())
    carrega_carrossel_pedidos();
})

const gera_carrossel_pedidos = (estoque) =>{
    const divCarrosselCategorias = document.getElementById('div_carrossel_categorias');

    for (const categoria in estoque) {
        if (estoque.hasOwnProperty(categoria)) {
            const card = document.createElement('div');
            card.className = 'card mb-3 car-categoria';
            card.setAttribute('data-id', categoria);
            card.setAttribute('onclick', 'abrir_modal_gera_pedidos(this)');

            const row = document.createElement('div');
            row.className = 'row g-0';

            const col = document.createElement('div');
            col.className = 'col-md-12';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerHTML = `<small class="text-primary">${categoria}</small>`;

            cardBody.appendChild(cardText);
            col.appendChild(cardBody);
            row.appendChild(col);
            card.appendChild(row);

            divCarrosselCategorias.appendChild(card);
        }
    }
}

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