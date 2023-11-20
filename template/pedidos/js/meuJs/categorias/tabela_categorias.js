document.addEventListener('DOMContentLoaded',async ()=>{
    let lista_categorias  = await carregaTabelaCategorias()
    popula_tbody('tbody_categorias',lista_categorias.categorias,false,add_botao_remover)
})

// Exemplo de uso com funções de callback:
const add_botao_remover=(id)=> {
    deleta_categoria(id)
}

const deleta_categoria = async (id)=>{
    try {
        let deseja_continuar = await msgYesNo()
        switch (deseja_continuar) {
            case 1:
                let url = '/produtos/categorias/delete/'
                let data = {'categoria_id':id}
                let conn = new Conn(url, data)
                let result = await conn.sendPostRequest()
                if (result.status == 200){
                    popula_tbody('tbody_categorias',result.categorias,false,add_botao_remover)                
                    popula_cmb('cmb_categorias',result.categorias)
                    msgOK('Feito !')
                }
                break;
        
            default:
                break;
        }
        
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}
  
