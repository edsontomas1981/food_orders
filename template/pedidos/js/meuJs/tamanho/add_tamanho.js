let criar_tamanho = document.getElementById('criar_tamanho')

criar_tamanho.addEventListener('click',async()=>{
    let tamanhoNome = document.getElementById('tamanho').value
    try {
        let url = '/produtos/tamanho/create/'
        let dados = {
            'item': tamanhoNome
        }
        let conexao = new Conn(url, dados)
        let result = await conexao.sendPostRequest()
        if (result.status == 200){
          popula_tbody('tbody_tamanhos',result.tamanhos,false,add_botao_remover_tamanho)
          msgOK("Tamanho criado com sucesso!")
          popula_cmb('cmb_tamanho',result.tamanhos)
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
    e.preventDefault();
})