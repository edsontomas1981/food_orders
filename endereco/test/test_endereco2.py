from django.test import TestCase
from produtos.models.enderecos import Endereco as Mdl_endereco
from endereco.controller.endereco import EnderecoCRUD

class EnderecoCRUDTest(TestCase):
    def setUp(self):
        self.endereco_crud = EnderecoCRUD()
        dados = {
            'cep': '12345-678',
            'logradouro': 'Rua de Teste',
            'numero': '123',
            'complemento': 'Apt 4B',
            'bairro': 'Bairro de Teste',
            'cidade': 'Cidade de Teste',
            'estado': 'TS',
            'observacao': 'Endereço de Teste'
        }

        self.response = self.endereco_crud.create_endereco(dados)        

    def test_create_endereco(self):

        self.assertEqual(self.response, 200)
        endereco = Mdl_endereco.objects.get(cep='12345-678')
        self.assertEqual(endereco.logradouro, 'Rua de Teste')

    def test_read_enderecos(self):
        pass
        # Você pode criar alguns endereços de teste aqui
        # e, em seguida, recuperá-los usando o método read_enderecos
        # e assert os resultados

    def test_update_endereco(self):
        endereco_id = self.endereco_crud.obj_endereco.id  # Substitua pelo ID de um endereço válido
        dados = {
            'cep': '54321-987',
            'logradouro': 'Rua Atualizada',
            'numero': '456',
            'complemento': 'Apt 2A',
            'bairro': 'Bairro Atualizado',
            'cidade': 'Cidade Atualizada',
            'estado': 'UC',
            'observacao': 'Endereço Atualizado'
        }

        response = self.endereco_crud.update_endereco(endereco_id, dados)
        
        self.assertEqual(response, 200)
        endereco = Mdl_endereco.objects.get(id=endereco_id)
        self.assertEqual(endereco.logradouro, 'Rua Atualizada')

    def test_delete_endereco(self):
        endereco_id = 1  # Substitua pelo ID de um endereço válido
        response, deleted_id = self.endereco_crud.delete_endereco(endereco_id)
        self.assertEqual(response, 200)
        self.assertIsNone(Mdl_endereco.objects.filter(id=endereco_id).first())

    def tearDown(self):
        # Limpe quaisquer dados de teste, se necessário
        pass
