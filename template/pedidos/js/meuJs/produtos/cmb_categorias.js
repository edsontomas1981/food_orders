document.addEventListener('DOMContentLoaded',async()=>{
    let lista_categorias  = await carregaTabelaCategorias()
    popula_cmb('cmb_categorias',lista_categorias.categorias)
})

