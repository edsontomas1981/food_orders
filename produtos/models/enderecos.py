from django.db import models

class Endereco(models.Model):
    cep = models.CharField(max_length=8)
    logradouro = models.CharField(max_length=100)
    numero = models.CharField(max_length=10)
    complemento = models.CharField(max_length=10)
    bairro = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=2)

    observacao= models.CharField(max_length=100)

    def to_dict(self):
        endereco_dict = {
            'id':self.id,
            'cep': self.cep,
            'logradouro': self.logradouro,
            'numero': self.numero,
            'complemento': self.complemento,
            'bairro': self.bairro,
            'cidade': self.cidade,
            'estado': self.estado,
            'observacao': self.observacao,
        }
        return endereco_dict



