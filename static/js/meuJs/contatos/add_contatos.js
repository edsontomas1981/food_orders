document.addEventListener('DOMContentLoaded',()=>{
    const btn_add_contatos = document.getElementById('btn_add_contatos');

    btn_add_contatos.addEventListener('click',async ()=>{
        let dados = form_to_dicionario('form_contatos');
        let url = '/contatos/create/'
        dados.id_proprietario = document.getElementById('fornecedor_id').value
        let conexao = new Conn(url,dados)
        let response = await conexao.sendPostRequest()
        popula_tabela_contatos(response)
    })

})