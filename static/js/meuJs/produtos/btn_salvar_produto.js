let btn_salvar_produto = document.getElementById('btn_salvar_produtos')

btn_salvar_produto.addEventListener('click',async ()=>{
   let data = await form_to_dicionario('form_produtos')
   data.categoria = data.cmb_categorias
   data.alergeno = array_alergeno
   data.tamanho = array_tamanho

   let url = '/produtos/create/'

   let conexao  = new Conn(url,data)

   let request = await conexao.sendPostRequest()

   if (request.campos_vazios){
      request.campos_vazios.forEach(element => {
         inserir_classe_campo_erro(element)
      });
   }

})