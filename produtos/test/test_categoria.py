from django.test import TestCase, Client
from produtos.controller.categorias import Categoria

class CategoriasTest(TestCase):
    def setUp(self):
        pass

    def test_categorias(self):
        categoria = Categoria()
        self.assertEqual(categoria.create_categoria("Categoria Teste"), 200)
        self.assertEqual(categoria.obj_categoria.nome, "Categoria Teste")
        self.assertEqual(categoria.create_categoria(" "), 400)
        self.assertEqual(categoria.delete_categoria(1),200)
        self.assertEqual(categoria.delete_categoria("1"),400)



    def tearDown(self):
        pass

    