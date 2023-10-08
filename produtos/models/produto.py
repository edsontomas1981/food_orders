from django.db import models
from produtos.models.categoria import Categoria
from produtos.models.fornecedores import Fornecedor

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.CASCADE)
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