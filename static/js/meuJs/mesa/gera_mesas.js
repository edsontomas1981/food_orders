function gerarBlocosHTML(lista) {
    var conteudoDiv = document.getElementById("div_atendimento");

    lista.forEach(function(item) {
      var blocoHTML = document.createElement("div");
      blocoHTML.className = "col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6 mb-4";

      blocoHTML.innerHTML = `
        <div class="card em-uso">
          <div class="card-body">
            <h7 class="card-title text-info">Mesa nº ${item.codigo}</h7>
            <h7 class="card-subtitle mb-4 text-muted"> Token ${item.descricao}</h7>
            <a href="#" class="btn btn-outline-success btn-sm">View Order</a>
          </div>
        </div>
      `;
      conteudoDiv.appendChild(blocoHTML);
    });
  }

  $(document).ready(function(){
    $('#div_pedidos div[data-slick]').slick({
      slidesToShow: 4,
      slidesToScroll: 4
    });
  });

  // Exemplo de dicionário
  var exemploDicionario = 
    [
    {"codigo": "1234", "descricao": "Item A", "progresso": 80},
    {"codigo": "1234", "descricao": "Item B", "progresso": 80},
    {"codigo": "1234", "descricao": "Item C", "progresso": 80},
    {"codigo": "1234", "descricao": "Item D", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item E", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item F", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item G", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item H", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item I", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item J", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item K", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item L", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item M", "progresso": 80},  
    {"codigo": "1234", "descricao": "Item A", "progresso": 80},
    {"codigo": "1234", "descricao": "Item B", "progresso": 80},
    {"codigo": "1234", "descricao": "Item C", "progresso": 80},
    {"codigo": "1234", "descricao": "Item D", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item E", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item F", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item G", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item H", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item I", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item J", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item K", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item L", "progresso": 80},        
    {"codigo": "1234", "descricao": "Item M", "progresso": 80},      

]
    
  ;

  // Chamar a função com o exemplo de dicionário
  gerarBlocosHTML(exemploDicionario);