let btn_add = document.getElementById('add_alergeno');
let select = document.getElementById('cmb_alergenos');

// Adicione a captura do evento de clique ao botão btn_add
btn_add.addEventListener('click', () => {
    // Obtém os dados do localStorage
    let dictionaryStringFromStorage = localStorage.getItem('alergenos');
    let array = [];

    console.log(dictionaryStringFromStorage)

    if (dictionaryStringFromStorage) {
        // Se existirem dados no localStorage, converte a string para um array
        array = JSON.parse(dictionaryStringFromStorage);
    }

    const selectedIndex = select.selectedIndex;
    const selectedOption = select.options[selectedIndex];
    const selectedValue = selectedOption.value;
    const isValuePresent = array.some(item => item.id === selectedValue);

    if (!isValuePresent) {
        // Adiciona o novo item ao array
        array.push({ 'id': selectedValue, 'nome': selectedOption.textContent });

        // Salva a lista atualizada no localStorage
        localStorage.setItem('alergenos', JSON.stringify(array));

        // Popula a tabela (presumindo que a função popula_tbody faz isso)
        popula_tbody('row_prod_alergeno', array, false, removeItemAlergeno);
    }
});



