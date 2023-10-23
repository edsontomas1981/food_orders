const add_botao_remover_alergeno = (id)=>{
    deleta_alergeno(id)
}

document.addEventListener('DOMContentLoaded',async()=>{
    let result = await carregaTabelaAlergenos()
    console.log(result)
    popula_tbody('tbody_alergenos',result.alergenos,false,add_botao_remover_alergeno)
    popula_cmb('cmb_alergenos',result.alergenos)

})

const carregaTabelaAlergenos = async()=>{
    try {
        let url ='/produtos/alergenos/read/'
        let dados = {}
        let conn = new Conn(url, dados)
        let result = await conn.sendPostRequest()
        return result
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
  }

const deleta_alergeno = async (id)=>{
try {
    let deseja_continuar = await msgYesNo()
    switch (deseja_continuar) {
        case 1:
            let url = '/produtos/alergenos/delete/'
            let data = {'alergeno_id':id}
            let conn = new Conn(url, data)
            let result = await conn.sendPostRequest()
            if (result.status == 200){
                popula_tbody('tbody_alergenos',result.alergenos,false,add_botao_remover_alergeno)                
                popula_cmb('cmb_alergenos',result.alergenos)
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