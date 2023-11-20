const popula_tbody = (id_tbody,dicionario_dados,add_botao_alterar = false, add_botao_remover = false)=>{
    // Obtém a referência ao elemento tbody da tabela
    var tbody = document.getElementById(id_tbody);

    limpa_tabelas(id_tbody)

    dicionario_dados.forEach(element => {
        var tr = document.createElement("tr");
        tr.setAttribute('data-id',element.id)
       
        // Loop através do dicionário de dados para criar as células <td> dinamicamente
        for (const chave in element) {
            if (element.hasOwnProperty(chave)) {
            var td = document.createElement("td");
            td.textContent = element[chave]; // Define o conteúdo da célula com o valor da propriedade
            tr.appendChild(td); // Adiciona a célula à linha
            }
        }

        var tdAlterar = document.createElement("td");
        var tdRemover = document.createElement("td");

        if(add_botao_alterar){
            var btn_alterar = document.createElement("a");
            btn_alterar.setAttribute('data-id', element.id);
            btn_alterar.id = 'btn_altera'+element.id ;
            btn_alterar.className = "btn btn-primary btn-sm";
            btn_alterar.textContent = "Alterar";

            // Adicionar evento de clique ao botão "Alterar"
            btn_alterar.addEventListener('click', function(event) {
                const id = event.target.getAttribute('data-id');
                // Aqui, você pode realizar a lógica para lidar com o botão "Alterar" na linha com o ID 'id'
                add_botao_alterar(id);
            });

            tdAlterar.appendChild(btn_alterar);
            tr.appendChild(tdAlterar);
        }
        
        if(add_botao_remover){        
            var btn_remover = document.createElement("a");
            btn_remover.setAttribute('data-id', element.id);
            btn_remover.id = 'btn_altera'+element.id ;
            btn_remover.className = "btn btn-danger btn-sm";
            btn_remover.textContent = "Remover";
    
            // Adicionar evento de clique ao botão "Remover"
            btn_remover.addEventListener('click', function(event) {
                const id = event.target.getAttribute('data-id');
                // Aqui, você pode realizar a lógica para lidar com o botão "Remover" na linha com o ID 'id'
                add_botao_remover(id);
            });

            tdRemover.appendChild(btn_remover);
            tr.appendChild(tdRemover);
            }

        tbody.appendChild(tr);
    });
}

