document.addEventListener('DOMContentLoaded',()=>{
    let select_tipo_contato = document.getElementById("tipo_contato")

    select_tipo_contato.addEventListener('change',()=>{
        inpt_contato.value = ""    
    })


})


