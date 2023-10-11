from produtos.models.enderecos import Endereco as Mdl_endereco
from django.core import serializers


class EnderecoCRUD:
    def __init__(self):
        self.obj_endereco = Mdl_endereco()

    def create_endereco(self, dados):
        try:
            self.obj_endereco.cep = dados['cep'] 
            self.obj_endereco.logradouro= dados['logradouro']
            self.obj_endereco.numero = dados['numero']
            self.obj_endereco.complemento = dados['complemento']
            self.obj_endereco.bairro = dados['bairro']
            self.obj_endereco.cidade = dados['cidade']
            self.obj_endereco.estado = dados['estado']
            self.obj_endereco.observacao = dados['observacao']
            self.obj_endereco.save()
            return 200
        except Exception as e:
            return None
    
    @staticmethod
    def read_enderecos():
        enderecos = Mdl_endereco.objects.all()
        lista_enderecos=[]

        return enderecos

    def update_endereco(self,endereco_id,dados):
        try:
            self.obj_endereco = Mdl_endereco.objects.get(id=endereco_id)
            self.obj_endereco.cep = dados['cep'] 
            self.obj_endereco.logradouro= dados['logradouro']
            self.obj_endereco.numero = dados['numero']
            self.obj_endereco.complemento = dados['complemento']
            self.obj_endereco.bairro = dados['bairro']
            self.obj_endereco.cidade = dados['cidade']
            self.obj_endereco.estado = dados['estado']
            self.obj_endereco.observacao = dados['observacao']
            self.obj_endereco.save()
            return 200
        except Mdl_endereco.DoesNotExist:
            return None

    def delete_endereco(self, id):
        try:
            endereco = Mdl_endereco.objects.get(id=id)
            endereco.delete()
            return 200, None
        except Mdl_endereco.DoesNotExist:
            return 400, id

