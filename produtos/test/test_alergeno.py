from django.test import TestCase
from produtos.models.alergenos import Alergenos as Mdl_alergenos
from produtos.controller.alergenos import Alergenos

class AlergenosTest(TestCase):
    def test_create_alergeno(self):
        alergenos_manager = Alergenos()
        status, alergeno = alergenos_manager.create_alergeno("Novo Alergeno")
        self.assertEqual(status, 200)
        self.assertIsNotNone(alergeno)

    def test_read_alergenos(self):
        alergenos_manager = Alergenos()
        alergenos_manager.create_alergeno("Alergeno de Teste")
        alergenos = alergenos_manager.read_alergenos()
        self.assertTrue(alergenos.exists())

    def test_update_alergeno(self):
        alergenos_manager = Alergenos()
        alergenos_manager.create_alergeno("Alergeno Original")
        alergeno_id = alergenos_manager.read_alergenos().first().id
        status, updated_alergeno = alergenos_manager.update_alergeno(alergeno_id, "Alergeno Atualizado")
        self.assertEqual(status, 200)
        self.assertEqual(updated_alergeno.alergeno_nome, "Alergeno Atualizado")

    def test_delete_alergeno(self):
        alergenos_manager = Alergenos()
        alergenos_manager.create_alergeno("Alergeno para Excluir")
        alergeno_id = alergenos_manager.read_alergenos().first().id
        status, deleted_alergeno_id = alergenos_manager.delete_alergeno(alergeno_id)
        self.assertEqual(status, 200)
        self.assertEqual(deleted_alergeno_id, None)
