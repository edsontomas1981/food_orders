document.addEventListener("DOMContentLoaded", function() {
    const txt_cep = document.getElementById('cep')
    txt_cep.addEventListener('blur',async (e)=>{
        if(valida_cep(txt_cep.value)){
            let cep_json = await pesquisar_cep(txt_cep.value)
            txt_cep.classList.remove('campo-erro')
            popula_cep(cep_json)
        }else{
            txt_cep.classList.add('campo-erro')
            msgErro('CEP inválido. ❌')
        }
    })
})

const popula_cep = (cep_json)=>{
    document.getElementById('logradouro').value = cep_json.logradouro
    document.getElementById('bairro').value = cep_json.bairro
    document.getElementById('cidade').value = cep_json.localidade
    document.getElementById('estado').value = cep_json.uf
}


    //evento blur
    //evento focus
    //evento keydown
    //evento keyup
    //evento keypress
    //evento click
    //evento change
    //evento submit
    //evento mouseover
    //evento mouseout
    //evento mousemove
    //evento mousedown
    //evento mouseup


    //evento blur
    //evento focus
    //evento keydown
    //evento keyup
    //evento keypress
    //evento click
    //evento change
    //evento submit
    //evento mouseover
    //evento mouseout
    //evento mousemove
    //evento mousedown
    //evento mouseup


    //evento blur
    //evento focus
    //evento keydown