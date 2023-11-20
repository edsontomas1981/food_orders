const deleta_tamanho = async (id)=>{
    try {
        let deseja_continuar = await msgYesNo()
        console.log(deseja_continuar)
        switch (deseja_continuar) {
            case 1:
                let url = '/produtos/tamanho/delete/'
                let data = {'tamanho_id':id}
                let conn = new Conn(url, data)
                let result = await conn.sendPostRequest()
                if (result.status == 200){
                    popula_tbody('tbody_tamanhos',result.tamanhos,false,add_botao_remover_tamanho)                
                    popula_cmb('cmb_tamanhos',result.tamanhos)
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