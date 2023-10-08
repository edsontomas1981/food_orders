from produtos.models.produto import Produto as Mdl_produto

class Produto():
    def __init__(self):
        self.obj_produto = Mdl_produto()

    def create_produto(self, nome, categoria, fornecedor, descricao, preco, cod_barras, tamanho_quantidade,
                      disponibilidade, imagem_url, tempo_preparo, receita, informacoes_nutricionais, classificacao,
                      data_inclusao, estoque, restricoes_dieteticas, sazonalidade, numero_pedido_identificador):
        try:
            produto = Mdl_produto(
                nome=nome,
                categoria=categoria,
                fornecedor=fornecedor,
                descricao=descricao,
                preco=preco,
                cod_barras=cod_barras,
                tamanho_quantidade=tamanho_quantidade,
                disponibilidade=disponibilidade,
                imagem_url=imagem_url,
                tempo_preparo=tempo_preparo,
                receita=receita,
                informacoes_nutricionais=informacoes_nutricionais,
                classificacao=classificacao,
                data_inclusao=data_inclusao,
                estoque=estoque,
                restricoes_dieteticas=restricoes_dieteticas,
                sazonalidade=sazonalidade,
                numero_pedido_identificador=numero_pedido_identificador
            )
            produto.save()
            return 200, produto
        except Exception as e:
            return 400, None

    def read_produto(self, produto_id):
        try:
            produto = Mdl_produto.objects.get(id=produto_id)
            return produto
        except Mdl_produto.DoesNotExist:
            return None

    def update_produto(self, produto_id, nome, categoria, fornecedor, descricao, preco, cod_barras, tamanho_quantidade,
                      disponibilidade, imagem_url, tempo_preparo, receita, informacoes_nutricionais, classificacao,
                      data_inclusao, estoque, restricoes_dieteticas, sazonalidade, numero_pedido_identificador):
        try:
            produto = Mdl_produto.objects.get(id=produto_id)
            produto.nome = nome
            produto.categoria = categoria
            produto.fornecedor = fornecedor
            produto.descricao = descricao
            produto.preco = preco
            produto.cod_barras = cod_barras
            produto.tamanho_quantidade = tamanho_quantidade
            produto.disponibilidade = disponibilidade
            produto.imagem_url = imagem_url
            produto.tempo_preparo = tempo_preparo
            produto.receita = receita
            produto.informacoes_nutricionais = informacoes_nutricionais
            produto.classificacao = classificacao
            produto.data_inclusao = data_inclusao
            produto.estoque = estoque
            produto.restricoes_dieteticas = restricoes_dieteticas
            produto.sazonalidade = sazonalidade
            produto.numero_pedido_identificador = numero_pedido_identificador
            produto.save()
            return 200, produto
        except Mdl_produto.DoesNotExist:
            return 400, None

    def delete_produto(self, produto_id):
        try:
            produto = Mdl_produto.objects.get(id=produto_id)
            produto.delete()
            return 200, produto.id
        except Mdl_produto.DoesNotExist:
            return 400, None
