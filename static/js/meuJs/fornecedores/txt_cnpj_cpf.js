const componente_cnpj = async (parametros,callback)=> {
    let cnpj_cpf = document.getElementById(parametros.campo_cnpj)
    let cnpj_cpf_valido = validar_cpf_cnpj(cnpj_cpf.value)
    if (cnpj_cpf_valido) {
        response = await busca_cnpj_fornecedor(parametros.cnpj)
        callback(response)
        cnpj_cpf.classList.remove('campo-erro');
        
    } else {
        cnpj_cpf.value = ""
        cnpj_cpf.classList.add('campo-erro');
        msgErro("CNPJ ou CPF inválido! ❌")
    }
}

document.addEventListener('DOMContentLoaded', async ()=> {
    let inpt_cnpj = document.getElementById("cnpj")

    inpt_cnpj.addEventListener("blur", async () => {
    let parametros = {'campo_cnpj':'cnpj','cnpj':inpt_cnpj.value}
    componente_cnpj(parametros,popula_fornecedor)
    })
})
    

const busca_cnpj_fornecedor = async (cnpj) => {
    let form = {'cnpj': cnpj};
    let url = '/produtos/fornecedor/read/';
    let conexao = new Conn(url, form);
    let response = await conexao.sendPostRequest()
    return response
} 

