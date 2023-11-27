function gerarBlocosHTML(lista) {
    var conteudoDiv = document.getElementById("div_atendimento");

    lista.forEach(function(item) {
      var blocoHTML = document.createElement("div");
      blocoHTML.className = "col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6 mb-4";
      
      // Adiciona a classe se 'vazia' for falsa
      const cardBodyClass = item.vazia ? "" : "bg-warning";
      console.log(item.vazia)

      blocoHTML.innerHTML = `
        <div class="card ">
          <div class="card-body ${cardBodyClass}  ">
            <h7 class="card-title text-info">Mesa nº ${item.codigo}</h7>
            <h7 class="mb-4 token-mesa"> ${item.descricao}</h7>
            <a href="#" class="btn btn-outline-info btn-sm" onclick="redirecionarParaOutraPagina('${item.codigo}')">View Order</a>
          </div>
        </div>
      `;
      conteudoDiv.appendChild(blocoHTML);
    });
  }

  $(document).ready(function(){
    $('.your-class').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // Adicione outras opções conforme necessário
    });
  });

  // Função para redirecionar para outra página com o código como parâmetro
  function redirecionarParaOutraPagina(codigo) {
    // Substitua 'outra_pagina.html' pela URL da sua outra página
    window.location.href = `atendimento.html?mesa=${codigo}`;
  }

  // Exemplo de dicionário
  var exemploDicionario = 
    [
    {"codigo": "1", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "2", "descricao": "", "progresso": 80,'vazia':false},
    {"codigo": "3", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "4", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "5", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "6", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "7", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "8", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "9", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "10", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "11", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "12", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "13", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "14", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "15", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "16", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "17", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "18", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "19", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "20", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "21", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "22", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "23", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "25", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "26", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "27", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "28", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "29", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "30", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "31", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "32", "descricao": "", "progresso": 80,'vazia':true},
    {"codigo": "33", "descricao": "", "progresso": 80,'vazia':true},    
]
    
  ;

  // Chamar a função com o exemplo de dicionário
  gerarBlocosHTML(exemploDicionario);