class Estoque {
    constructor() {
        this.estoque = {
            'Bebidas': [
            {'id': 1, 'qtde_estoque': 45, 'descricao': 'Coca-Cola', 'preco': 3.00},
            {'id': 2, 'qtde_estoque': 45, 'descricao': 'Pepsi', 'preco': 2.50},
            {'id': 3, 'qtde_estoque': 45, 'descricao': 'Guaraná', 'preco': 2.00},
            {'id': 4, 'qtde_estoque': 45, 'descricao': 'Suco de Laranja', 'preco': 4.00},
            {'id': 5, 'qtde_estoque': 45, 'descricao': 'Água Mineral', 'preco': 1.50}
        ],
        'Pizzas': [
            {'id': 6, 'qtde_estoque': 45, 'descricao': 'Calabresa', 'preco': 25.00},
            {'id': 7, 'qtde_estoque': 45, 'descricao': 'Margherita', 'preco': 28.00},
            {'id': 8, 'qtde_estoque': 45, 'descricao': 'Frango com Catupiry', 'preco': 30.00},
            {'id': 9, 'qtde_estoque': 45, 'descricao': 'Quatro Queijos', 'preco': 26.00},
            {'id': 10, 'qtde_estoque': 45, 'descricao': 'Vegetariana', 'preco': 27.00}
        ],
        'Sanduiches': [
            {'id': 11, 'qtde_estoque': 45, 'descricao': 'Cheeseburger', 'preco': 15.00},
            {'id': 12, 'qtde_estoque': 45, 'descricao': 'X-Bacon', 'preco': 18.00},
            {'id': 13, 'qtde_estoque': 45, 'descricao': 'Frango Grelhado', 'preco': 16.00},
            {'id': 14, 'qtde_estoque': 45, 'descricao': 'Vegetariano', 'preco': 17.00},
            {'id': 15, 'qtde_estoque': 45, 'descricao': 'Atum com Maionese', 'preco': 20.00}
        ],
        'Sobremesas': [
            {'id': 16, 'qtde_estoque': 45, 'descricao': 'Pudim', 'preco': 8.00},
            {'id': 17, 'qtde_estoque': 45, 'descricao': 'Sorvete de Chocolate', 'preco': 10.00},
            {'id': 18, 'qtde_estoque': 45, 'descricao': 'Cheesecake', 'preco': 12.00},
            {'id': 19, 'qtde_estoque': 45, 'descricao': 'Mousse de Maracujá', 'preco': 9.00},
            {'id': 20, 'qtde_estoque': 45, 'descricao': 'Torta de Limão', 'preco': 11.00}
        ],
        'Pratos Quentes': [
            {'id': 21, 'qtde_estoque': 45, 'descricao': 'Feijoada', 'preco': 30.00},
            {'id': 22, 'qtde_estoque': 45, 'descricao': 'Strogonoff de Frango', 'preco': 25.00},
            {'id': 23, 'qtde_estoque': 45, 'descricao': 'Risoto de Funghi', 'preco': 28.00},
            {'id': 24, 'qtde_estoque': 45, 'descricao': 'Nhoque ao Molho Bolonhesa', 'preco': 26.00},
            {'id': 25, 'qtde_estoque': 45, 'descricao': 'Lasanha de Carne', 'preco': 27.00}
        ],
        'Saladas': [
            {'id': 26, 'qtde_estoque': 45, 'descricao': 'Salada Caesar', 'preco': 15.00},
            {'id': 27, 'qtde_estoque': 45, 'descricao': 'Salada Caprese', 'preco': 18.00},
            {'id': 28, 'qtde_estoque': 45, 'descricao': 'Salada de Frutas', 'preco': 10.00},
            {'id': 29, 'qtde_estoque': 45, 'descricao': 'Salada Grega', 'preco': 12.00},
            {'id': 30, 'qtde_estoque': 45, 'descricao': 'Salada de Camarão', 'preco': 20.00}
        ],
        'Bebidas Alcoólicas': [
            {'id': 31, 'qtde_estoque': 45, 'descricao': 'Caipirinha', 'preco': 12.00},
            {'id': 32, 'qtde_estoque': 45, 'descricao': 'Margarita', 'preco': 14.00},
            {'id': 33, 'qtde_estoque': 45, 'descricao': 'Cerveja Artesanal IPA', 'preco': 18.00},
            {'id': 34, 'qtde_estoque': 45, 'descricao': 'Vinho Tinto Seco', 'preco': 25.00},
            {'id': 35, 'qtde_estoque': 45, 'descricao': 'Whisky 12 anos', 'preco': 30.00}
        ],
        'Massas': [
            {'id': 36, 'qtde_estoque': 45, 'descricao': 'Espaguete à Bolonhesa', 'preco': 20.00},
            {'id': 37, 'qtde_estoque': 45, 'descricao': 'Fettuccine Alfredo', 'preco': 22.00},
            {'id': 38, 'qtde_estoque': 45, 'descricao': 'Ravioli de Queijo', 'preco': 18.00},
            {'id': 39, 'qtde_estoque': 45, 'descricao': 'Lasanha de Berinjela', 'preco': 24.00},
            {'id': 40, 'qtde_estoque': 45, 'descricao': 'Canelone de Frango', 'preco': 23.00}
        ]
        }
    };

    criaEstoque() {
        const estoqueExistente = localStorage.getItem('estoque');
        if (estoqueExistente === null) {
            localStorage.setItem('estoque', JSON.stringify(this.estoque));
        }
    }

    salvaEstoqueLocalStorage() {
        const estoqueString = JSON.stringify(this.recuperaEstoqueLocalStorage());
        localStorage.setItem('estoque', estoqueString);
    }

    recuperaEstoqueLocalStorage() {
        const estoqueString = localStorage.getItem('estoque');
        return JSON.parse(estoqueString);
    }

    salvaEstoqueLocalStorage() {
        // Salva o estoque no localStorage
        localStorage.setItem('estoque', JSON.stringify(this.estoque));
    }

    recuperaEstoqueLocalStorage() {
        // Recupera o estoque do localStorage
        const estoqueString = localStorage.getItem('estoque');
        this.estoque = JSON.parse(estoqueString) || {};
    }

    adicionarProduto(novoProduto) {
        // Adiciona o novo produto ao estoque
        const { id } = novoProduto;
        const categoria = novoProduto.categoria;

        // Verifica se a categoria existe, cria se não existir
        if (!this.estoque[categoria]) {
            this.estoque[categoria] = [];
        }

        // Verifica se o produto já existe na categoria
        const produtoExistente = this.estoque[categoria].find(item => item.id == id);

        if (!produtoExistente) {
            this.estoque[categoria].push(novoProduto);
            this.salvaEstoqueLocalStorage();
            console.log(`Produto adicionado com sucesso. ID: ${id}, Categoria: ${categoria}`);
        } else {
            console.log(`Produto com ID ${id} já existe na categoria ${categoria}.`);
        }
    }

    removerProduto(itemId) {
        // Remove o produto do estoque pelo ID
        if (this.estoque[itemId]) {
            delete this.estoque[itemId];
            this.salvaEstoqueLocalStorage();
            console.log(`Produto removido com sucesso. ID: ${itemId}`);
        } else {
            console.log(`Produto com ID ${itemId} não encontrado no estoque.`);
        }
        this.salvaEstoqueLocalStorage()
    }

    alterarQuantidadeItem(itemId, quantidade) {
        // Altera a quantidade do item no estoque
        if (this.estoque[itemId]) {
            this.estoque[itemId].qtde_estoque += quantidade;
            this.salvaEstoqueLocalStorage();
            console.log(`Quantidade do item ${itemId} alterada para ${this.estoque[itemId].qtde_estoque}`);
        } else {
            console.log(`Produto com ID ${itemId} não encontrado no estoque.`);
        }
    }
}

const retorna_estoque = ()=>{
    const estoqueObj = new Estoque();
    return estoqueObj.recuperaEstoqueLocalStorage()
}

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

document.getElementById('teste').addEventListener('click',()=>{
    const itemObjeto = new Item();

    // Adicionar um novo produto
    const novoProduto = { id: 45, qtde_estoque: 10, descricao: 'produtinho', preco: 20.00,'categoria':'Nova Categoria' };
    itemObjeto.adicionarProduto(novoProduto);

    // Remover um produto
    itemObjeto.removerProduto(45);

    // Aumentar a quantidade de um item
    itemObjeto.aumentarQuantidadeItem(2, 5);

    // Diminuir a quantidade de um item
    itemObjeto.diminuirQuantidadeItem(2, 2);
})

