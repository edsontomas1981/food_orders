const popula_tabela_contatos = (response) =>{
    // Obtém a referência ao elemento tbody da tabela
    var tbody = document.getElementById("row_contatos");

    tbody.innerHTML = "";

    response.lista_contatos.forEach(element => {
        var tr = document.createElement("tr");
        var tdTelefone = document.createElement("td");
        var tdTipoContato = document.createElement("td");
        var tdNome = document.createElement("td");
        var tdAlterar = document.createElement("td");
        var tdRemover = document.createElement("td");

        tdTelefone.textContent = element.contato;
        tdTipoContato.textContent = element.tipo_contato;
        tdNome.textContent = element.nome_contato;

        var btn_alterar = document.createElement("a");

        btn_alterar.setAttribute('data-id', element.id); // Defina o atributo data-id
        btn_alterar.id = 'btn_altera'+element.id ;
        btn_alterar.className = "btn btn-primary btn-sm tabela";
        btn_alterar.textContent = "Alterar";

        var btn_remover = document.createElement("a");
        btn_remover.setAttribute('data-id', element.id); // Defina o atributo data-id
        btn_remover.id = 'btn_altera'+element.id ;
        btn_remover.className = "btn btn-danger btn-sm tabela";
        btn_remover.textContent = "Remover";      
        
        tdAlterar.appendChild(btn_alterar);
        tdRemover.appendChild(btn_remover);

        tr.appendChild(tdTelefone);
        tr.appendChild(tdTipoContato);
        tr.appendChild(tdNome);
        tr.appendChild(tdAlterar);
        tr.appendChild(tdRemover);

        tbody.appendChild(tr);        
    });
}

// Função para lidar com o clique no botão "Alterar"
function onClickAlterar(event) {
    const id = event.target.getAttribute('data-id');
    console.log(`Clicou em Alterar, id=${id}`);
    // Faça o que desejar com o valor 'id'
}

// Função para lidar com o clique no botão "Remover"
function onClickRemover(event) {
    const id = event.target.getAttribute('data-id');
    console.log(`Clicou em Remover, id=${id}`);
    // Faça o que desejar com o valor 'id'
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




