
function removeItemAlergeno(idParaRemover) {
    array_alergeno = array_alergeno.filter(item => item.id !== idParaRemover);
    popula_tbody('row_prod_alergeno', array_alergeno, false, removeItemAlergeno);

}

function removeItemTamanho(idParaRemover) {
    array_tamanho = array_tamanho.filter(item => item.id !== idParaRemover);
    popula_tbody('row_prod_tamanho', array_tamanho, false, removeItemTamanho);
}
