from django.db import models

class Tamanho(models.Model):
    tamanho = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nome