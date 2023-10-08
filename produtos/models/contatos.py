from django.db import models

class Contato(models.Model):
    tipo_contato = models.CharField(max_length=100)
    nome_contato = models.CharField(max_length=100)
    contato= models.CharField(max_length=100)
    
    def __str__(self):
        return self.nome_contato