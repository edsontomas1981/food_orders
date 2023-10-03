from django.db import models

class Alergenos(models.Model):
    alergeno_nome = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nome