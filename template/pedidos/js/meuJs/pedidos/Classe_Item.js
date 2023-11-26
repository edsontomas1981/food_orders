class Item {
    constructor() {
        // Inicializa a classe Estoque
        this.estoque = new Estoque();
    }

    adicionarProduto(novoProduto) {
        // Adiciona o produto ao estoque
        this.estoque.adicionarProduto(novoProduto);
    }

    removerProduto(itemId) {
        // Remove o produto do estoque
        this.estoque.removerProduto(itemId);
    }

    aumentarQuantidadeItem(itemId, quantidade) {
        // Aumenta a quantidade do item no estoque
        this.estoque.alterarQuantidadeItem(itemId, quantidade);
    }

    diminuirQuantidadeItem(itemId, quantidade) {
        // Diminui a quantidade do item no estoque
        this.estoque.alterarQuantidadeItem(itemId, -quantidade);
    }
}
