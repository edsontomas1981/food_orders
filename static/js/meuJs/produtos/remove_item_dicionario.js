function removeItemAlergeno(idParaRemover) {
    let alergenos = localStorage.getItem('alergenos');

    if (alergenos) {
        let items = JSON.parse(alergenos);

        const indexParaRemover = items.findIndex(item => item.id === idParaRemover);

        if (indexParaRemover !== -1) {
            items.splice(indexParaRemover, 1);
            localStorage.setItem('alergenos', JSON.stringify(items));
            console.log(JSON.stringify(items))
            console.log("Item removido com sucesso!");

            // Atualizar o tbody APÓS a remoção do item no localStorage
            popula_tbody('row_prod_alergeno', items, false, removeItemAlergeno);
        } else {
            console.log("Não foi encontrado nenhum item com o ID especificado.");
        }
    } else {
        console.log("Não há dados armazenados para a chave 'alergenos'.");
    }
}

function removeItemTamanho(idParaRemover) {
    array_tamanho = array_tamanho.filter(item => item.id !== idParaRemover);
    popula_tbody('row_prod_tamanho', array_tamanho, false, removeItemTamanho);

}
