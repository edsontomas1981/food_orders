from django.db import models
from produtos.models.fornecedores import Fornecedor

class Contato(models.Model):
    fornecedor_fk = models.ForeignKey(Fornecedor, on_delete=models.CASCADE)
    tipo_contato = models.CharField(max_length=100)
    nome_contato = models.CharField(max_length=100)
    contato= models.CharField(max_length=100)
    
    def __str__(self):
        return self.nome_contato

    def to_dict(self):
        contato_dict = {
            'id': self.id,
            # 'fornecedor_fk': self.fornecedor_fk.id,
            'tipo_contato': self.tipo_contato,
            'nome_contato': self.nome_contato,
            'contato': self.contato,
        }
        return contato_dict