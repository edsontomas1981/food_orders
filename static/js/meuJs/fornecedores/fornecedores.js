document.addEventListener('DOMContentLoaded', async ()=> {
    let btn_save_fornecedores = document.getElementById('btn_save_fornecedores');
    let fornecedor_id = document.getElementById('fornecedor_id')
    btn_save_fornecedores.addEventListener('click', async () => {
        
        let lista_campos = ['cnpj','raz_soc_fornecedor','cep','logradouro','numero','bairro','cidade','estado']
        remover_classes('campo-erro',lista_campos)
       
        if (fornecedor_id.value == ""){
            let form = form_to_dicionario('form_fornecedores');
            let url = '/produtos/fornecedor/create/';
            let conexao = new Conn(url, form);
            const response = await conexao.sendPostRequest()
            if (response.error){
                response.error.forEach(e => {
                    document.getElementById(e).classList.add('campo-erro')
                });
            }else{
                fornecedor_id.value = response.fornecedor.id
                msgOK("Feito !")
            }
        }else{
            let form = form_to_dicionario('form_fornecedores');
            let url = '/produtos/fornecedor/update/';
            let conexao = new Conn(url, form);
            const response = await conexao.sendPostRequest()
            if (response.error){
                response.error.forEach(e => {
                    document.getElementById(e).classList.add('campo-erro')
                });
            }else{
                fornecedor_id.value = response.fornecedor.id
                msgOK("Feito !")
            }
        }

    });
});

const remover_classes = (classe,lista_campos_obrigatorios)=>{
    lista_campos_obrigatorios.forEach(e => {
        document.getElementById(e).classList.remove(classe)
    });
}

const popula_fornecedor = (response) =>{
    document.getElementById("cnpj").value = response.fornecedores.cnpj_fornecedor
    document.getElementById("raz_soc_fornecedor").value = response.fornecedores.raz_soc_fornecedor
    document.getElementById('cep').value = response.fornecedores.endereco.cep
    document.getElementById('logradouro').value = response.fornecedores.endereco.logradouro
    document.getElementById('numero').value = response.fornecedores.endereco.numero
    document.getElementById('bairro').value = response.fornecedores.endereco.bairro
    document.getElementById('cidade').value = response.fornecedores.endereco.cidade
    document.getElementById('estado').value = response.fornecedores.endereco.estado
    document.getElementById('complemento').value = response.fornecedores.endereco.complemento
    document.getElementById('observacao').value = response.fornecedores.endereco.observacao
    document.getElementById('fornecedor_id').value =response.fornecedores.id
}
