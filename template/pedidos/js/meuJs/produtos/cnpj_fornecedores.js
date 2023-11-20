document.addEventListener('DOMContentLoaded', ()=>{
    let inpt_cnpj = document.getElementById('fornecedor_cnpj')
    inpt_cnpj.addEventListener("blur", async () => {
    let parametros = {'campo_cnpj':'fornecedor_cnpj','cnpj':inpt_cnpj.value}
        componente_cnpj(parametros,popula_cnpj_fornecedor_produto)
    })

  });

const popula_cnpj_fornecedor_produto = async(response)=>{
    document.getElementById("fornecedor_cnpj").value = response.fornecedor.cnpj_fornecedor
    document.getElementById("fornecedor_raz_soc").value = response.fornecedor.raz_soc_fornecedor
}