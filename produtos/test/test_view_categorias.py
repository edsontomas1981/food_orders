from django.test import TestCase
from django.urls import reverse
from produtos.models import Categoria  # Importe o modelo de Categoria se você tiver um
import json

class CategoriaViewsTest(TestCase):
    def setUp(self):
        # Crie objetos de Categoria de exemplo se necessário
        self.categoria1 = Categoria.objects.create(nome='Categoria1')
        self.categoria2 = Categoria.objects.create(nome='Categoria2')

    def test_create_categoria_view(self):
        url = reverse('create_categoria')  # Substitua 'create_categoria' pelo nome da URL real
        response = self.client.get(url)
        self.assertEqual(response.status_code, 405)  # GET não é permitido

        # Teste POST
        data = {'categoria': 'Nova Categoria'}
        response = self.client.post(url, data, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_read_categoria_view(self):
        url = reverse('read_categoria')  # Substitua 'read_categoria' pelo nome da URL real
        response = self.client.post(url)  # Deve ser um POST
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'categorias')  # Verifica se 'categorias' está na resposta

    def test_update_categoria_view(self):
        url = reverse('update_categoria')  # Substitua 'update_categoria' pelo nome da URL real
        response = self.client.get(url)
        self.assertEqual(response.status_code, 405)  # GET não é permitido

        # Teste POST
        data = {'categoria_id': self.categoria1.id, 'novo_nome': 'Novo Nome'}
        response = self.client.post(url, data, content_type='application/json')
        self.assertEqual(response.status_code, 200)

        # Verifique se a categoria foi realmente atualizada
        self.categoria1.refresh_from_db()

        self.assertEqual(self.categoria1.nome, 'Novo Nome')

    def test_delete_categoria_view_post(self):
        url = reverse('delete_categoria')  # Substitua 'delete_categoria' pelo nome da URL real

        # Teste POST com dados JSON no corpo
        data = {'id': self.categoria1.id}  # Substitua pelo ID da categoria a ser excluída
        response = self.client.post(url, json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        

        # Verifique se a categoria foi realmente excluída (se aplicável)
        with self.assertRaises(Categoria.DoesNotExist):
            self.categoria1.refresh_from_db()

    def test_delete_categoria_view_get(self):
        url = reverse('delete_categoria')  # Substitua 'delete_categoria' pelo nome da URL real

        # Teste GET (deve retornar um erro 405 Method Not Allowed)
        response = self.client.get(url)
        self.assertEqual(response.status_code, 405)