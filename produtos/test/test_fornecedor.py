from django.test import TestCase
from produtos.models.fornecedores import Fornecedor as Mdl_fornecedores
from produtos.models.contatos import Contato as Mdl_contato
from produtos.models.enderecos import Endereco as Mdl_endereco
from produtos.controller.fornecedor import Fornecedor

class FornecedorTest(TestCase):
    def setUp(self):
        self.contato = Mdl_contato.objects.create(tipo_contato="E-mail", nome_contato="Fornecedor Contato", contato="fornecedor@example.com")
        self.endereco = Mdl_endereco.objects.create(cep="12345678", logradouro="Rua Exemplo", numero="123", complemento="Apto 4B", bairro="Bairro Teste", cidade="Cidade Teste", estado="ST", observacao="Observação")
    
    def test_create_fornecedor(self):
        print('test_c_fornecedor')
        fornecedores_manager = Fornecedor()
        status, fornecedor = fornecedores_manager.create_fornecedor(
            cnpj="12345678901234",
            razao_social="Fornecedor Teste",
            contato_fk=self.contato,
            endereco_fk=self.endereco
        )
        self.assertEqual(status, 200)
        self.assertIsNotNone(fornecedor)

    def test_read_fornecedor(self):
        print('test_r_fornecedor')
        fornecedores_manager = Fornecedor()
        fornecedor = Mdl_fornecedores.objects.create(
            cnpj_fornecedor="98765432109876",
            raz_soc_fornecedor="Fornecedor de Leitura",
            contato_fk=self.contato,
            endereco_fk=self.endereco
        )
        fetched_fornecedor = fornecedores_manager.read_fornecedor(fornecedor.id)
        self.assertEqual(fetched_fornecedor.id, fornecedor.id)

    def test_update_fornecedor(self):
        print('test_u_fornecedor')
        fornecedores_manager = Fornecedor()
        fornecedor = Mdl_fornecedores.objects.create(
            cnpj_fornecedor="12345678901234",
            raz_soc_fornecedor="Fornecedor Original",
            contato_fk=self.contato,
            endereco_fk=self.endereco
        )
        status, updated_fornecedor = fornecedores_manager.update_fornecedor(
            fornecedor.id,
            cnpj="55555555555555",
            razao_social="Fornecedor Atualizado",
            contato_fk=self.contato,
            endereco_fk=self.endereco
        )
        self.assertEqual(status, 200)
        self.assertEqual(updated_fornecedor.cnpj_fornecedor, "55555555555555")
        self.assertEqual(updated_fornecedor.raz_soc_fornecedor, "Fornecedor Atualizado")

    def test_delete_fornecedor(self):
        print('test_c_fornecedor')
        fornecedores_manager = Fornecedor()
        fornecedor = Mdl_fornecedores.objects.create(
            cnpj_fornecedor="12345678901234",
            raz_soc_fornecedor="Fornecedor para Excluir",
            contato_fk=self.contato,
            endereco_fk=self.endereco
        )
        status, deleted_fornecedor_id = fornecedores_manager.delete_fornecedor(fornecedor.id)
        self.assertEqual(status, 200)
        self.assertEqual(deleted_fornecedor_id, None)
