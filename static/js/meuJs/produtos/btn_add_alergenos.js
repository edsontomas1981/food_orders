let btn_add = document.getElementById('add_alergeno')
let select = document.getElementById('cmb_alergenos')
let dictionaryStringFromStorage = localStorage.getItem('alergenos');
let array = []

// Adicione a captura do evento de clique ao botão btn_add
btn_add.addEventListener('click', () => {
    const selectedIndex = select.selectedIndex;
    const selectedOption = select.options[selectedIndex];
    const selectedValue = selectedOption.value;
    const isValuePresent = array.some(item => item.id === selectedValue);

    if (!isValuePresent) {
        array.push({'id': selectedValue, 'nome': selectedOption.textContent});

        // Salvar a lista atualizada no localStorage
        localStorage.setItem('alergenos', JSON.stringify(array));

        // Recuperar os dados do localStorage
        let dictionaryStringFromStorage = localStorage.getItem('alergenos');
        let arrayFromStorage = JSON.parse(dictionaryStringFromStorage);

        // Popula a tabela (presumo que a função popula_tbody faz isso)
        popula_tbody('row_prod_alergeno', arrayFromStorage, false, true);
    }
});


