from django.db import models

class Fornecedores(models.Model):
    cnpj_fornecedor = models.CharField(max_length=14, unique=True)
    raz_soc_fornecedor = models.CharField(max_length=100)
    cep_fornecedor = models.CharField(max_length=8)
    logradouro_fornecedor = models.CharField(max_length=100)
    numero_fornecedor = models.CharField(max_length=10)
    bairro_fornecedor = models.CharField(max_length=100)
    cidade_fornecedor = models.CharField(max_length=100)
    estado_fornecedor = models.CharField(max_length=2)
    telefone_fornecedor = models.CharField(max_length=20, blank=True, null=True)
    nome_contato_fornecedor = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.raz_soc_fornecedor
