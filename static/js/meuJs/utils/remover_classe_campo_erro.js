function removerClasseDoFormulario(formId, classeParaRemover) {
    // Obtém o formulário pelo ID
    var formulario = document.getElementById(formId);

    // Obtém todos os elementos do formulário
    var elementos = formulario.querySelectorAll('.'+classeParaRemover);

    // Percorre os elementos e remove a classe específica
    elementos.forEach(function(elemento) {
        elemento.classList.remove(classeParaRemover);
    });
}

document.getElementById('btn_descartar_produto').addEventListener('click',()=>{
    removerClasseDoFormulario('modal_cadastro_produtos','campo-erro')
})