document.addEventListener('DOMContentLoaded', ()=> {
    let btn_save_fornecedores = document.getElementById('btn_save_fornecedores');
    let fornecedor_id = document.getElementById('fornecedor_id')
    btn_save_fornecedores.addEventListener('click', async () => {
        
        if (fornecedor_id.value == ""){
            let form = formToDictionary('form_fornecedores');
            let url = '/produtos/fornecedor/create/';
            let conexao = new Conn(url, form);
            let teste = await conexao.sendPostRequest()
            fornecedor_id.value = teste.fornecedor.id
        }else{
            let form = formToDictionary('form_fornecedores');
            let url = '/produtos/fornecedor/update/';
            let conexao = new Conn(url, form);
            let teste = await conexao.sendPostRequest()
            // fornecedor_id.value = teste.fornecedor.id
        }

    });
});