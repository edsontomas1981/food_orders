function removeItemFromDictionary(key,dicionario) {
    // Recupere os dados do localStorage
    let dictionaryStringFromStorage = localStorage.getItem(dicionario);
    let arrayFromStorage = JSON.parse(dictionaryStringFromStorage);

    // Encontre o índice do item no array com base na chave (key)
    const indexToRemove = arrayFromStorage.findIndex(item => item.id === key);

    if (indexToRemove !== -1) {
        // Remove o item do array utilizando o índice identificado
        arrayFromStorage.splice(indexToRemove, 1);

        // Atualiza os dados no localStorage
        localStorage.setItem(dicionario, JSON.stringify(arrayFromStorage));
    } else {
        console.log('Item não encontrado no dicionário.');
    }
}
