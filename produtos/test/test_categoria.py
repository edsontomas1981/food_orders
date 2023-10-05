from django.test import TestCase
from produtos.models import Categoria as Mdl_categoria
from produtos.controller.categorias import Categoria

class CategoriaTestCase(TestCase):
    def setUp(self):
        self.categoria_controller = Categoria()

    def test_create_categoria(self):
        # Teste de criação de categoria válida
        status_code = self.categoria_controller.create_categoria("Nova Categoria")
        self.assertEqual(status_code, 200)

        # Teste de criação de categoria inválida (nome em branco)
        status_code = self.categoria_controller.create_categoria("")
        self.assertEqual(status_code, 400)

    def test_read_categoria(self):
        # Teste de leitura de categorias
        categorias = self.categoria_controller.read_categoria()
        self.assertIsNotNone(categorias)

    def test_update_categoria(self):
        # Crie uma categoria de exemplo
        categoria_id = self.categoria_controller.create_categoria("Categoria Antiga")

        # Teste de atualização de categoria
        updated_categoria = self.categoria_controller.update_categoria(1, "Categoria Atualizada")
        self.assertIsNotNone(updated_categoria[1])
        self.assertEqual(updated_categoria.nome, "Categoria Atualizada")

        # Teste de atualização de categoria inválida (categoria inexistente)
        non_existent_categoria = self.categoria_controller.update_categoria(999, "Categoria Inexistente")
        self.assertIsNone(non_existent_categoria)

    def test_delete_categoria(self):

        # Crie uma categoria de exemplo
        categoria=Categoria()
        categoria.create_categoria("Categoria para Excluir")
        
        # Teste de exclusão de categoria
        status_code = self.categoria_controller.delete_categoria(1)
        self.assertEqual(status_code, 200)

        # Teste de exclusão de categoria inválida (categoria inexistente)
        status_code = self.categoria_controller.delete_categoria(999)
        self.assertEqual(status_code, 400)
