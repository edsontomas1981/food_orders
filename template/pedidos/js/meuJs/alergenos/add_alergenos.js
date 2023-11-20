document.addEventListener('DOMContentLoaded',()=>{
    let criar_alergenos = document.getElementById('criar_alergenos')

    criar_alergenos.addEventListener('click',async(e)=>{
    let alergenoNome = document.getElementById('alergenos').value
    try {
        let url = '/produtos/alergenos/create/'
        let dados = {
            'item': alergenoNome
        }
        let conexao = new Conn(url, dados)
        let result = await conexao.sendPostRequest()
        if (result.status == 200){
            console.log(result)
            popula_tbody('tbody_alergenos',result.alergenos,false,add_botao_remover_alergeno)
            msgOK("Alergeno criado com sucesso!")
            popula_cmb('cmb_alergenos',result.alergenos)
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
    e.preventDefault();
    })
})