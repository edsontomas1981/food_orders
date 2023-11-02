from django.db import models
from produtos.models.categoria import Categoria
from produtos.models.fornecedores import Fornecedor
from produtos.models.alergenos import Alergenos
from produtos.models.tamanhos import Tamanho
from django.core.exceptions import ObjectDoesNotExist
from django.core.exceptions import FieldError



class Produto(models.Model):
    nome = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    fornecedor_cnpj = models.ForeignKey(Fornecedor, on_delete=models.CASCADE)
    alergenos = models.ManyToManyField(Alergenos)
    tamanho = models.ManyToManyField(Tamanho)
    descricao = models.TextField(blank=True, null=True)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    cod_barras = models.CharField(max_length=50, blank=True, null=True)
    tamanho_quantidade = models.CharField(max_length=50, blank=True, null=True)
    disponibilidade = models.BooleanField(default=True)
    imagem_url = models.CharField(max_length=255, blank=True, null=True)
    tempo_preparo = models.IntegerField(blank=True, null=True)
    receita = models.TextField(blank=True, null=True)
    informacoes_nutricionais = models.TextField(blank=True, null=True)
    classificacao = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    data_inclusao = models.DateField(blank=True, null=True)
    estoque = models.IntegerField(blank=True, null=True)
    restricoes_dieteticas = models.CharField(max_length=100, blank=True, null=True)
    sazonalidade = models.CharField(max_length=50, blank=True, null=True)
    numero_pedido_identificador = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.nome
    

    def to_dict(self):
        produto_dict = {
            'id': self.id,
            'nome': self.nome,
            'descricao': self.descricao,
            'cod_barras': self.cod_barras,
            'tamanho_quantidade': self.tamanho_quantidade,
            'disponibilidade': self.disponibilidade,
            'imagem_url': self.imagem_url,
            'tempo_preparo': self.tempo_preparo,
            'receita': self.receita,
            'informacoes_nutricionais': self.informacoes_nutricionais,
            'data_inclusao': str(self.data_inclusao) if self.data_inclusao else None,
            'estoque': self.estoque,
            'restricoes_dieteticas': self.restricoes_dieteticas,
            'sazonalidade': self.sazonalidade,
            'numero_pedido_identificador': self.numero_pedido_identificador,
        }
        try:
            produto_dict['categoria'] = self.categoria.nome if self.categoria else None
        except ObjectDoesNotExist:
            produto_dict['categoria'] = None
            return produto_dict

        try:
            produto_dict['fornecedor_cnpj'] = self.fornecedor_cnpj.to_dict()
        except ObjectDoesNotExist:
            produto_dict['fornecedor_cnpj'] = None    

        try:
            produto_dict['preco'] = float(self.preco)
        except (TypeError, ValueError):
            produto_dict['preco'] = None

        try:
            produto_dict['classificacao'] = float(self.classificacao) if self.classificacao else None
        except (TypeError, ValueError):
            produto_dict['classificacao'] = None

        try:
            produto_dict['data_inclusao'] = str(self.data_inclusao) if self.data_inclusao else None
        except (TypeError, ValueError):
            produto_dict['data_inclusao'] = None

        try:
            alergenos_list = list(self.alergenos.all().values_list('alergeno_nome', flat=True))
            produto_dict['alergenos'] = alergenos_list
        except (ObjectDoesNotExist, FieldError):
            produto_dict['alergenos'] = []

        try:
            tamanho_list = list(self.tamanho.all().values_list('tamanho', flat=True))
            produto_dict['tamanho'] = tamanho_list
        except (ObjectDoesNotExist, FieldError):
            produto_dict['tamanho'] = []

        return produto_dict