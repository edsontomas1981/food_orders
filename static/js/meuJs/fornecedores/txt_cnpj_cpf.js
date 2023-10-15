let inpt_cnpj_cpf = document.getElementById("cnpj")

inpt_cnpj_cpf.addEventListener("blur", async () => {
    let cnpj_cpf_valido = validar_cpf_cnpj(inpt_cnpj_cpf.value)
    if (cnpj_cpf_valido) {
        response = await busca_cnpj_fornecedor()
        popula_fornecedor(response)
        inpt_cnpj_cpf.classList.remove('campo-erro');
    } else {
        inpt_cnpj_cpf.value = ""
        inpt_cnpj_cpf.classList.add('campo-erro');
        msgErro("CNPJ ou CPF inválido! ❌")
    }
})

const busca_cnpj_fornecedor = async () => {
    let form = formToDictionary('form_fornecedores');
    let url = '/produtos/fornecedor/read/';
    let conexao = new Conn(url, form);
    let response = await conexao.sendPostRequest()
    return response
} 

