from django.test import TestCase
from produtos.models.produto import Produto as Mdl_produto
from produtos.models.categoria import Categoria as Mdl_categoria
from produtos.models.fornecedores import Fornecedor as Mdl_fornecedor
from produtos.controller.produtos import Produto

class ProdutoTest(TestCase):
    def setUp(self):
        self.categoria = Mdl_categoria.objects.create(nome="Categoria de Teste")
        self.fornecedor = Mdl_fornecedor.objects.create(raz_soc_fornecedor="Fornecedor de Teste")
    
    def test_create_produto(self):
        produto_crud = Produto()
        dados={ 
            "nome":"Produto Teste",
            "categoria":self.categoria,
            "fornecedor":self.fornecedor,
            "descricao":"Descrição do Produto",
            "preco":10.0,
            "cod_barras":"1234567890",
            "tamanho_quantidade":"500ml",
            "disponibilidade":True,
            "imagem_url":"http://example.com/imagem.jpg",
            "tempo_preparo":30,
            "receita":"Instruções de Preparo",
            "informacoes_nutricionais":"Valores Nutricionais",
            "classificacao":4.5,
            "data_inclusao":"2023-10-10",
            "estoque":100,
            "restricoes_dieteticas":"Sem Glúten",
            "sazonalidade":"Verão",
            "numero_pedido_identificador":"12345"
            }

        status = produto_crud.create_produto(dados)
        self.assertEqual(status, 200)
        self.assertIsNotNone(produto_crud)

    def test_read_produto(self):
        produto_crud = Produto()
        dados={            
            "nome":"Produto de Leitura",
            "categoria":self.categoria,
            "fornecedor":self.fornecedor,
            "descricao":"Descrição do Produto",
            "preco":15.0,
            "cod_barras":"9876543210",
            "tamanho_quantidade":"1kg",
            "disponibilidade":True,
            "imagem_url":"http://example.com/imagem.jpg",
            "tempo_preparo":45,
            "receita":"Instruções de Preparo",
            "informacoes_nutricionais":"Valores Nutricionais",
            "classificacao":4.0,
            "data_inclusao":"2023-10-15",
            "estoque":50,
            "restricoes_dieteticas":"Sem Lactose",
            "sazonalidade":"Inverno",
            "numero_pedido_identificador":"54321"
            }
        produto_crud.create_produto(dados)

        status = produto_crud.read_produto(produto_crud.obj_produto.id)
        self.assertEqual(status, 200)
        self.assertIsNotNone(produto_crud)

    def test_update_produto(self):
        produto_crud = Produto()
        dados_original={"nome":"Produto Original",
            "categoria":self.categoria,
            "fornecedor":self.fornecedor,
            "descricao":"Descrição do Produto",
            "preco":20.0,
            "cod_barras":"1111111111",
            "tamanho_quantidade":"250g",
            "disponibilidade":True,
            "imagem_url":"http//example.com/imagem.jpg",
            "tempo_preparo":60,
            "receita":"Instruções de Preparo",
            "informacoes_nutricionais":"Valores Nutricionais",
            "classificacao":3.5,
            "data_inclusao":"2023-10-20",
            "estoque":75,
            "restricoes_dieteticas":"Sem Açúcar",
            "sazonalidade":"Primavera",
            "numero_pedido_identificador":"99999"}
        
        produto = Produto()
        produto.create_produto(dados_original)

        dados_atualizados = {            
            "nome":"Produto Atualizado",
            "categoria":self.categoria,
            "fornecedor":self.fornecedor,
            "descricao":"Descrição Atualizada",
            "preco":25.0,
            "cod_barras":"2222222222",
            "tamanho_quantidade":"2kg",
            "disponibilidade":False,
            "imagem_url":"http://example.com/nova-imagem.jpg",
            "tempo_preparo":75,
            "receita":"Instruções Atualizadas",
            "informacoes_nutricionais":"Novos Valores Nutricionais",
            "classificacao":4.0,
            "data_inclusao":"2023-10-25",
            "estoque":90,
            "restricoes_dieteticas":"Vegano",
            "sazonalidade":"Outono",
            "numero_pedido_identificador":"77777"}

        status= produto.update_produto(produto.obj_produto.id,dados_atualizados)
        self.assertEqual(status, 200)
        self.assertEqual(produto.obj_produto.nome, "Produto Atualizado")
        self.assertEqual(produto.obj_produto.descricao, "Descrição Atualizada")
        self.assertEqual(produto.obj_produto.preco, 25.0)

    def test_delete_produto(self):
        dados = {
            "nome":"Produto para Exclusão",
            "categoria":self.categoria,
            "fornecedor":self.fornecedor,
            "descricao":"Descrição do Produto",
            "preco":30.0,
            "cod_barras":"3333333333",
            "tamanho_quantidade":"500g",
            "disponibilidade":True,
            "imagem_url":"http://example.com/imagem.jpg",
            "tempo_preparo":90,
            "receita":"Instruções de Preparo",
            "informacoes_nutricionais":"Valores Nutricionais",
            "classificacao":4.5,
            "data_inclusao":"2023-10-30",
            "estoque":60,
            "restricoes_dieteticas":"Orgânico",
            "sazonalidade":"Verão",
            "numero_pedido_identificador":"88888"
            }

        produto =Produto()
        produto.create_produto(dados)
        status= produto.delete_produto(produto.obj_produto.id)
        self.assertEqual(status, 200)
        self.assertIsNone(Mdl_produto.objects.filter(id=produto.obj_produto.id).first())
