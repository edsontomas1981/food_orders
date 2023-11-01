let btn_add = document.getElementById('add_alergeno');
let select = document.getElementById('cmb_alergenos');
let array_alergeno = [];

// Adicione a captura do evento de clique ao botão btn_add
btn_add.addEventListener('click', () => {

    const selectedIndex = select.selectedIndex;
    const selectedOption = select.options[selectedIndex];
    const selectedValue = selectedOption.value;
    const isValuePresent = array_alergeno.some(item => item.id === selectedValue);

    if (!isValuePresent) {
        // Adiciona o novo item ao array
        array_alergeno.push({ 'id': selectedValue, 'nome': selectedOption.textContent });

        popula_tbody('row_prod_alergeno', array_alergeno, false, removeItemAlergeno);
    }
});



