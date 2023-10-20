from produtos.models.contatos import Contato as Mdl_contato
from django.core.exceptions import ObjectDoesNotExist

class Contatos():
    def __init__(self):
        self.obj_contato = Mdl_contato()

    def criar_contato(self, dados):
        try:
            self.obj_contato.contato = dados['contato']
            self.obj_contato.fornecedor_fk = dados['fornecedor_fk']
            self.obj_contato.nome_contato = dados['nome_contato']
            self.obj_contato.tipo_contato = dados['tipo_contato']
            self.obj_contato.save()
            return 200
        except Exception as e:
            # Lidar com a exceção aqui (por exemplo, registrar o erro)
            return 500  # Retornar um código de status de erro adequado

    def atualizar_contato(self, contato_id, dados):
        try:
            self.obj_contato = Mdl_contato.objects.get(id=contato_id)
            if dados['tipo_contato'] is not None:
                self.obj_contato.tipo_contato = dados['tipo_contato']
            if dados['nome_contato'] is not None:
                self.obj_contato.nome_contato = dados['nome_contato']
            if dados['contato'] is not None:
                self.obj_contato.contato = dados['contato']
            self.obj_contato.save()
            return 200
        except ObjectDoesNotExist:
            return 404  # Retornar um código de status para indicar que o objeto não foi encontrado
        except Exception as e:
            # Lidar com outras exceções aqui (por exemplo, registrar o erro)
            return 500  # Retornar um código de status de erro adequado

    def excluir_contato(self, contato_id):
        try:
            self.obj_contato = Mdl_contato.objects.get(id=contato_id)
            self.obj_contato.delete()
            return 200
        except ObjectDoesNotExist:
            return 404  # Retornar um código de status para indicar que o objeto não foi encontrado
        except Exception as e:
            # Lidar com outras exceções aqui (por exemplo, registrar o erro)
            return 500  # Retornar um código de status de erro adequado

    def listar_contatos(self):
        try:
            return Mdl_contato.objects.all()
        except Exception as e:
            # Lidar com a exceção aqui (por exemplo, registrar o erro)
            return None  # Retornar um valor adequado em caso de erro

    def obter_contato(self, contato_id):
        try:
            self.obj_contato = Mdl_contato.objects.get(pk=contato_id)
            return self.obj_contato
        except ObjectDoesNotExist:
            return None  # Retornar um valor adequado se o objeto não for encontrado
        except Exception as e:
            # Lidar com outras exceções aqui (por exemplo, registrar o erro)
            return None  # Retornar um valor adequado em caso de erro
        
    def listar_contatos_do_fornecedor(self, fornecedor_id):

        try:
            contatos = Mdl_contato.objects.filter(fornecedor_fk=fornecedor_id)
            lista_contatos = [contato.to_dict() for contato in contatos]
            return lista_contatos

        except Exception as e:
            # Lidar com a exceção aqui (por exemplo, registrar o erro)
            return None  # Retornar um valor adequado em caso de erro
