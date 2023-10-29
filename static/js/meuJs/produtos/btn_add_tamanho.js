let btn_add_tamanho = document.getElementById('add_tamanho')
let select_tamanho = document.getElementById('cmb_tamanho')
let dictionaryStringFromStorage_tamanho = localStorage.getItem('tamanho');
let array_tamanho = []

// Adicione a captura do evento de clique ao botão btn_add_tamanho
btn_add_tamanho.addEventListener('click', () => {
    const selectedIndex = select_tamanho.selectedIndex;
    const selectedOption = select_tamanho.options[selectedIndex];
    const selectedValue = selectedOption.value;
    const isValuePresent = array_tamanho.some(item => item.id === selectedValue);

    if (!isValuePresent) {
        array_tamanho.push({'id': selectedValue, 'nome': selectedOption.textContent});

        // Salvar a lista atualizada no localStorage
        localStorage.setItem('tamanho', JSON.stringify(array_tamanho));

        // Recuperar os dados do localStorage
        let dictionaryStringFromStorage_tamanho = localStorage.getItem('tamanho');
        let arrayFromStorage = JSON.parse(dictionaryStringFromStorage_tamanho);

        // Popula a tabela (presumo que a função popula_tbody faz isso)
        popula_tbody('row_prod_tamanho', arrayFromStorage, false, true);
    }
});
