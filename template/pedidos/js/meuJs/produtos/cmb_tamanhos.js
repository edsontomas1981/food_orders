document.addEventListener('DOMContentLoaded',async()=>{
    let response = await carregaTabelaTamanhos()
    popula_cmb('cmb_tamanho',response.tamanhos)
})