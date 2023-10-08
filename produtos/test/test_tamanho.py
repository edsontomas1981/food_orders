from django.test import TestCase
from produtos.models.categoria import Categoria as Mdl_categoria
from produtos.models.tamanhos import Tamanho as Mdl_tamanho
from produtos.controller.tamanho import Tamanho

class TamanhoTest(TestCase):
    def test_create_tamanho(self):
        print('test_c_tamanho')
        tamanho_manager = Tamanho()
        status, tamanho = tamanho_manager.create_tamanho("Novo Tamanho")
        self.assertEqual(status, 200)
        self.assertIsNotNone(tamanho)

    def test_read_tamanho(self):
        print('test_r_tamanho')
        tamanho_manager = Tamanho()
        tamanho_manager.create_tamanho("Tamanho de Teste")
        tamanhos = tamanho_manager.read_tamanho()
        self.assertTrue(tamanhos.exists())

    def test_update_tamanho(self):
        print('test_u_tamanho')
        tamanho_manager = Tamanho()
        tamanho_manager.create_tamanho("Tamanho Original")
        tamanho_id = tamanho_manager.read_tamanho().first().id
        status, updated_tamanho = tamanho_manager.update_tamanho(tamanho_id, "Tamanho Atualizado")
        self.assertEqual(status, 200)
        self.assertEqual(updated_tamanho.tamanho, "Tamanho Atualizado")

    def test_delete_tamanho(self):
        print('test_d_tamanho')
        tamanho_manager = Tamanho()
        tamanho_manager.create_tamanho("Tamanho para Excluir")
        tamanho_id = tamanho_manager.read_tamanho().first().id
        status, deleted_tamanho_id = tamanho_manager.delete_tamanho(tamanho_id)
        self.assertEqual(status, 200)
        self.assertEqual(deleted_tamanho_id, None)
