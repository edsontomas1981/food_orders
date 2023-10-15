const limpar_campos_formulario = (formularioId) => {
    const form = document.getElementById(formularioId);

    if (form) {
        // Obtém todos os elementos de input, textarea e select dentro do formulário
        const elementos = form.querySelectorAll('input, textarea, select');

        elementos.forEach((element) => {
            if (element.type === 'text' || element.tagName === 'TEXTAREA') {
                element.value = '';
            } else if (element.tagName === 'SELECT') {
                // Redefine o select para o primeiro item
                element.selectedIndex = 0;
            }
        });
    }
}
