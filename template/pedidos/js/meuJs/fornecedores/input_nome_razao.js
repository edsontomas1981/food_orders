let inpt_nome_razao = document.getElementById("raz_soc_fornecedor")

inpt_nome_razao.addEventListener('blur',()=>{
    if (inpt_nome_razao.value != "" && inpt_nome_razao.value.length >= 3 ){
        inpt_nome_razao.classList.remove('campo-erro')

    }else{
        inpt_nome_razao.classList.add('campo-erro')
        if(inpt_nome_razao.value == ""){
            msgErro('Campo Nome/Razão Social não pode ficar vazio. ❌');
            return 
        }
        if (inpt_nome_razao.value.length < 3) {
            msgErro('O campo Nome/Razão Social deve ter pelo menos 3 caracteres. ❌');
        }
    }
})