document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('titulo_pedido').textContent = "Atendimento Mesa : " + obterMesaDaURL()

})

const obterMesaDaURL = () =>{
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get('mesa');
}