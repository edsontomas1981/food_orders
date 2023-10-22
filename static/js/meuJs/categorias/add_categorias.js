let criaCategoria  = document.getElementById('criaCategoria')

criaCategoria.addEventListener('click', async (e) => {
    let categoriaNome = document.getElementById('categoria').value
    try {
        let url = '/produtos/categorias/create/'
        let dados = {
            'item': categoriaNome
        }
        let conexao = new Conn(url, dados)
        let result = await conexao.sendPostRequest()
        if (result.status == 200){
          popula_tbody('tbody_categorias',result.categorias,false,add_botao_remover)
          msgOK("Categoria cadastrada com sucesso!")
          popula_cmb_categorias('cmb_categorias',result.categorias)


        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
    e.preventDefault();
})

