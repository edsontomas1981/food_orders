class Pedido {
    constructor() {
        this.itens = [];
        this.subtotal = 0;
        this.loadPedidoFromLocalStorage(); // Carregar pedido do localStorage, se existir
    }

    iniciarPedido(numeroMesa) {
        this.numeroMesa = numeroMesa;
        
        // Verificar se já existe um pedido para esta mesa no localStorage
        const existingPedido = localStorage.getItem(`pedido_${this.numeroMesa}`);
        
        if (existingPedido) {
          // Se existir, carregar o pedido existente
          const parsedPedido = JSON.parse(existingPedido);
          this.itens = parsedPedido.itens || [];
          this.subtotal = parsedPedido.subtotal || 0;
          console.log(`Pedido existente carregado para a Mesa ${this.numeroMesa}`);
        } else {
          // Se não existir, iniciar um novo pedido
          this.itens = [];
          this.subtotal = 0;
          console.log(`Novo pedido iniciado para a Mesa ${this.numeroMesa}`);
        }
    
        // Salvar pedido no localStorage ao iniciá-lo
        this.savePedidoToLocalStorage();
      }

    async adicionarItem (produtoId, quantidade) {
        const estoque = new Estoque();
        const produto = this.buscarProdutoNoEstoque(produtoId);
    
        if (produto && estoque.estoque[produto.categoria]) {
            const estoqueAtual = estoque.estoque[produto.categoria].find(item => item.id === produtoId);
    
            if (estoqueAtual.qtde_estoque >= quantidade) {
                const existingItemIndex = this.itens.findIndex(item => item.produto.id === produtoId);
    
                if (existingItemIndex !== -1) {
                    // O item já existe no pedido, somar a quantidade
                    this.itens[existingItemIndex].quantidade += quantidade;
                    this.itens[existingItemIndex].subtotalItem = this.calcularSubtotalItem(
                        this.itens[existingItemIndex].quantidade,
                        produto.preco
                    );
                } else {
                    // O item não existe no pedido, adicionar um novo
                    const subtotalItem = quantidade * produto.preco;
                    this.itens.push({ produto, quantidade, subtotalItem });
                }
    
                estoque.alterarQuantidadeItem(produtoId, -quantidade);
                estoque.salvaEstoqueLocalStorage()
                this.atualizarSubtotal();
                this.savePedidoToLocalStorage(); // Salvar pedido no localStorage ao adicionar item
                return 1 //Item add com sucesso
            } else {
                return 2 // qtde insufuciente
            }
        } else {
            return 3 // Item não localizado
        }
    }
    
    removerItem(produtoId) {
        const index = this.itens.findIndex(item => item.produto.id == produtoId);

        if (index !== -1) {
            const { produto, quantidade } = this.itens[index];
            this.itens.splice(index, 1);
            const estoque = new Estoque();
            estoque.alterarQuantidadeItem(produtoId, quantidade);
            this.atualizarSubtotal();
            console.log(`Item removido do pedido: ${produto.descricao}`);
        } else {
            console.log(`Item com ID ${produtoId} não encontrado no pedido.`);
        }
        this.savePedidoToLocalStorage(); // Salvar pedido no localStorage ao remover item

    }

    calcularSubtotalItem(quantidade, preco) {
        return quantidade * preco;
    }

    atualizarSubtotal() {
        this.subtotal = this.itens.reduce((total, item) => total + item.subtotalItem, 0);
        this.savePedidoToLocalStorage(); // Salvar pedido no localStorage ao atualizar subtotal

    }

    calcularPedido() {
        console.log(`Subtotal do Pedido: R$${this.subtotal.toFixed(2)}`);
    }

    loadPedidoFromLocalStorage() {
        const savedPedido = localStorage.getItem(`pedido_${this.numeroMesa}`);

        if (savedPedido) {
            const parsedPedido = JSON.parse(savedPedido);
            this.itens = parsedPedido.itens || [];
            this.subtotal = parsedPedido.subtotal || 0;
        }
    }

    savePedidoToLocalStorage() {
        const dataToSave = {
            itens: this.itens,
            subtotal: this.subtotal
        };

        localStorage.setItem(`pedido_${this.numeroMesa}`, JSON.stringify(dataToSave));
    }
   

    buscarProdutoNoEstoque(produtoId) {
        const estoque = new Estoque();

        for (const categoria in estoque.estoque) {
            const produto = estoque.estoque[categoria].find(item => item.id === produtoId);
            if (produto) {
                return { ...produto, categoria };
            }
        }

        return null;
    }

    imprimirPedido() {
        const impressao = [];
        impressao.push(`Mesa: ${this.numeroMesa}`);
        impressao.push('---');
        this.itens.forEach(item => {
            impressao.push(`${item.produto.descricao} - Quantidade: ${item.quantidade} - Subtotal: R$${item.subtotalItem.toFixed(2)}`);
        });
        impressao.push('---');
        impressao.push(`Subtotal do Pedido: R$${this.subtotal.toFixed(2)}`);
        
        // Aqui, você pode adicionar comandos de controle específicos para a sua impressora térmica, se necessário.
        
        const textoFormatado = impressao.join('\n');
        console.log(textoFormatado); // Simulação de impressão no console
        // Envie o textoFormatado para a impressora térmica usando a API adequada ou outra solução dependendo do seu ambiente.
    }
}

// // Exemplo de Uso
// const pedido = new Pedido(1);

// pedido.iniciarPedido();
// pedido.adicionarItem(1, 2);
// pedido.adicionarItem(6, 1);
// pedido.adicionarItem(16, 3);

// pedido.calcularPedido();

// pedido.removerItem(6);

// pedido.calcularPedido();
