let btn_salvar_produto = document.getElementById('btn_salvar_produtos')

btn_salvar_produto.addEventListener('click', async () => {
   removerClasseDoFormulario('modal_cadastro_produtos', 'campo-erro');
   let data = await form_to_dicionario('form_produtos');
   data.categoria = data.cmb_categorias;
   data.alergeno = array_alergeno;
   data.tamanho = array_tamanho;
   let url = '/produtos/create/';
   let conexao = new Conn(url, data);
   
   try {
       let request = await conexao.sendPostRequest();

       if (request.campos_vazios && request.campos_vazios.length > 0) {
           request.campos_vazios.forEach(element => {
               msgErro('Por favor, preencha todos os campos obrigatórios.');
               inserir_classe_campo_erro(element);
           });
       } else {
           // Limpar mensagens de erro e estilização de campos, pois o envio foi bem-sucedido.
           limparMensagensErro();
           limparEstilizacaoCamposErro();
           // Adicione aqui o código para lidar com o sucesso do envio do formulário.
       }
   } catch (error) {
       msgErro('Ocorreu um erro durante o envio do formulário. Por favor, tente novamente mais tarde.');
       console.error('Erro:', error);
   }
});
