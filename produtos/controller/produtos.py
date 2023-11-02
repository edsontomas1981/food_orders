from datetime import datetime
from produtos.models.produto import Produto as Mdl_produto
from produtos.controller.alergenos import Alergenos
from produtos.controller.tamanho import Tamanho
from produtos.controller.fornecedor import Fornecedor
from produtos.controller.categorias import Categoria
from utils.verifica_tipo_dados import verificar_numero

class Produto():
    def __init__(self):
        self.obj_produto = Mdl_produto()

    def create_produto(self,dados):

        # Obtém a data e hora atuais
        data_atual = datetime.now()
        categoria = self.carrega_categoria(dados)
        fornecedor = self.carrega_fornecedor(dados)
        
        verificar_numero(dados['tempo_preparo'])

        # try:
        self.obj_produto = Mdl_produto(
            nome=dados['nome'],
            categoria=categoria.obj_categoria,
            fornecedor_cnpj=fornecedor.obj_fornecedor,
            descricao=dados['descricao'],
            preco=verificar_numero(dados['preco']),
            cod_barras=dados['cod_barras'],
            # tamanho_quantidade=dados['estoque'],
            disponibilidade=dados['disponivel'],
            imagem_url=dados['imagem_url'],
            tempo_preparo=verificar_numero(dados['tempo_preparo']),
            receita=dados['receita'],
            informacoes_nutricionais=dados['informacoes_nutricionais'],
            data_inclusao=data_atual,
            estoque=verificar_numero(dados['estoque']),
            restricoes_dieteticas=dados['restricoes_dieteticas'],
            sazonalidade=dados['sazonalidade'],
            numero_pedido_identificador=dados['numero_pedido_identificador']
        )
        self.obj_produto.save()

        print(self.obj_produto)
        self.cadastra_alergenos(dados)
        self.cadastra_tamanhos(dados)
        #     return 200
        # except Exception as e:
        #     return 400, None

    def read_produto(self, produto_id):
        try:
            self.obj_produto = Mdl_produto.objects.get(id=produto_id)
            return 200 
        except Mdl_produto.DoesNotExist:
            return None

    def update_produto(self, produto_id,dados):
        try:
            self.obj_produto = Mdl_produto.objects.get(id=produto_id)
            self.obj_produto.nome = dados['nome']
            self.obj_produto.categoria = dados['categoria']
            self.obj_produto.fornecedor = dados['fornecedor']
            self.obj_produto.descricao = dados['descricao']
            self.obj_produto.preco = dados['preco']
            self.obj_produto.cod_barras = dados['cod_barras']
            self.obj_produto.tamanho_quantidade = dados['tamanho_quantidade']
            self.obj_produto.disponibilidade = dados['disponibilidade']
            self.obj_produto.imagem_url = dados['imagem_url']
            self.obj_produto.tempo_preparo = dados['tempo_preparo']
            self.obj_produto.receita = dados['receita']
            self.obj_produto.informacoes_nutricionais = dados['informacoes_nutricionais']
            self.obj_produto.classificacao = dados['classificacao']
            self.obj_produto.data_inclusao = dados['data_inclusao']
            self.obj_produto.estoque = dados['estoque']
            self.obj_produto.restricoes_dieteticas = dados['restricoes_dieteticas']
            self.obj_produto.sazonalidade = dados['sazonalidade']
            self.obj_produto.numero_pedido_identificador = dados['numero_pedido_identificador']
            self.obj_produto.save()
            return 200
        except Mdl_produto.DoesNotExist:
            return 400, None

    def delete_produto(self, produto_id):
        try:
            self.obj_produto = Mdl_produto.objects.get(id=produto_id)
            self.obj_produto.delete()
            return 200
        except Mdl_produto.DoesNotExist:
            return 400, None
        
    def carrega_categoria(self,dados):
        categoria = Categoria()
        categoria.read_categoria_id(dados['categoria'])
        return categoria
    
    def carrega_fornecedor(self,dados):
        fornecedor = Fornecedor()
        fornecedor.read_fornecedor_cnpj(dados['fornecedor_cnpj'])
        return fornecedor
        
    def cadastra_alergenos(self,dados):
        for item in dados['alergeno']:
            print(item)
            alergeno = Alergenos()
            alergeno.read_alergenos_id(item['id'])
            self.obj_produto.alergenos.add(alergeno.obj_alergenos)

        
    def cadastra_tamanhos(self,dados):
        for item in dados['tamanho']:
            print(item)
            tamanho = Tamanho()
            tamanho.read_tamanho_id(item['id'])
            self.obj_produto.tamanho.add(tamanho.obj_tamanho)
