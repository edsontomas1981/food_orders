from django.test import TestCase
from produtos.models.contatos import Contato as Mdl_contato
from contatos.controller.contatos import Contatos

class TestContatos(TestCase):
    def setUp(self):
        self.contatos_manager = Contatos()
        self.existing_contato = Contatos()
        dados = {
            "tipo_contato":'Telefone',
            "nome_contato":'Teste',
            "contato":'1234567890'
            }
        self.existing_contato.criar_contato(dados)

    def test_criar_contato(self):
        novo_contato_data = {
            'tipo_contato': 'E-mail',
            'nome_contato': 'Novo Teste',
            'contato': 'novo@teste.com'
        }
        response_code = self.contatos_manager.criar_contato(novo_contato_data)
        self.assertEqual(response_code, 200)
        novo_contato = Mdl_contato.objects.filter(nome_contato='Novo Teste').get()
        self.assertIsNotNone(novo_contato)

    def test_atualizar_contato(self):
        dados_atualizados = {
            'tipo_contato': 'Novo Tipo',
            'nome_contato': 'Novo Nome',
            'contato': 'novo@contato.com'
        }
        response_code = self.existing_contato.atualizar_contato(self.existing_contato.obj_contato.id,dados_atualizados)
        self.assertEqual(response_code, 200)

        # Verifique se o contato existente foi atualizado no banco de dados
        contato_atualizado = Mdl_contato.objects.get(id=self.existing_contato.obj_contato.id)
        self.assertEqual(contato_atualizado.tipo_contato, 'Novo Tipo')
        self.assertEqual(contato_atualizado.nome_contato, 'Novo Nome')
        self.assertEqual(contato_atualizado.contato, 'novo@contato.com')

    def test_excluir_contato(self):
        response_code = self.contatos_manager.excluir_contato(self.existing_contato.obj_contato.id)
        self.assertEqual(response_code, 200)

        # Verifique se o contato existente foi excluído do banco de dados
        with self.assertRaises(Mdl_contato.DoesNotExist):
            Mdl_contato.objects.get(id=self.existing_contato.obj_contato.id)

    def test_listar_contatos(self):
        contatos = self.contatos_manager.listar_contatos()
        self.assertTrue(len(contatos) > 0)

    def test_obter_contato(self):
        contato_obtido = self.contatos_manager.obter_contato(self.existing_contato.obj_contato.id)
        self.assertIsNotNone(contato_obtido)
        self.assertEqual(contato_obtido.id, self.existing_contato.obj_contato.id)

    def tearDown(self):
        self.existing_contato.obj_contato.delete()