from django.db import models
from produtos.models.contatos import Contato
from produtos.models.enderecos import Endereco

class Fornecedor(models.Model):
    cnpj_fornecedor = models.CharField(max_length=14, unique=True)
    raz_soc_fornecedor = models.CharField(max_length=100)
    contato_fk = models.ForeignKey(Contato, on_delete=models.CASCADE,null=True )
    endereco_fk = models.ForeignKey(Endereco, on_delete=models.CASCADE , null=True)

    def __str__(self):
        return self.raz_soc_fornecedor
