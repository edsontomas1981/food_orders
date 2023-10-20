const popula_tabela_contatos = (response) =>{
    // Obtém a referência ao elemento tbody da tabela
    var tbody = document.getElementById("row_contatos");

    tbody.innerHTML = "";

    response.lista_contatos.forEach(element => {
        var tr = document.createElement("tr");
        
        var tdTelefone = document.createElement("td");
        tdTelefone.setAttribute('data-elemento','telefone')

        var tdTipoContato = document.createElement("td");
        tdTipoContato.setAttribute('data-elemento','tipo_contato')

        var tdNome = document.createElement("td");
        tdNome.setAttribute('data-elemento','nome')

        var tdRemover = document.createElement("td");

        tdTelefone.textContent = element.contato;
        tdTipoContato.textContent = element.tipo_contato;
        tdNome.textContent = element.nome_contato;

        var btn_remover = document.createElement("a");
        btn_remover.setAttribute('data-id', element.id);
        btn_remover.id = 'btn_altera'+element.id ;
        btn_remover.className = "btn btn-danger btn-sm tabela";
        btn_remover.textContent = "Remover";      
        
        tdRemover.appendChild(btn_remover);

        tr.appendChild(tdTelefone);
        tr.appendChild(tdTipoContato);
        tr.appendChild(tdNome);
        tr.appendChild(tdRemover);

        tbody.appendChild(tr);        
    });
}
  
// Função para lidar com o clique no botão "Remover"
const onClickRemover = async(event)=> {
  const button = event.target;
  const row = button.closest('tr');
  const cells = row.querySelectorAll('td');
  const id = button.getAttribute('data-id');

  // Crie um objeto (dicionário) para armazenar os dados da linha
  const dadosRow = {};

  cells.forEach((cell, index) => {
    const dataElemento = cell.getAttribute('data-elemento');
    if (dataElemento) {
      // Use o atributo data-elemento como chave do objeto
      // e o conteúdo da célula como valor associado
      dadosRow[dataElemento] = cell.textContent;
    }
  });

  dadosRow.id_contato = id

  try {
    let resposta = await msgYesNo();
    switch (resposta) {
      case 1:
        deleta_contato(dadosRow)
        break;
      default:
        break;
    }
    alert(resposta);
  } catch (error) {
    // Lidar com erros, se houver, aqui
  }
}

// Adicione os ouvintes de evento aos botões Alterar e Remover
document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('tabela')) {
        if (event.target.textContent === 'Alterar') {
            onClickAlterar(event);
        } else if (event.target.textContent === 'Remover') {
            onClickRemover(event);
        }
    }
});






