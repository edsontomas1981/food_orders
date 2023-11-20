document.addEventListener('DOMContentLoaded',async()=>{
    let lista_tamanhos  = await carregaTabelaTamanhos()
    popula_tbody('tbody_tamanhos',lista_tamanhos.tamanhos,false,add_botao_remover_tamanho)
})

const add_botao_remover_tamanho=(id)=>{
    deleta_tamanho(id)
}

const carregaTabelaTamanhos = async()=>{
    try {
        let url ='/produtos/tamanho/read/'
        let dados = {}
        let conn = new Conn(url, dados)
        let result = await conn.sendPostRequest()
        return result
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
  }