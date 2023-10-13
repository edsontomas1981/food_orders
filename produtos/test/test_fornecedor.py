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
        fornecedor = Fornecedor()
        dados={            
            "cnpj":"12345678901234",
            "raz_soc_fornecedor":"Fornecedor Teste",
            "contato_fk":self.contato,
            "endereco_fk":self.endereco
            }
        status = fornecedor.create_fornecedor(dados)
        self.assertEqual(status, 200)
        self.assertIsNotNone(fornecedor)

    def test_read_fornecedor(self):
        fornecedores_manager = Fornecedor()

        fornecedor = Mdl_fornecedores.objects.create(
            cnpj_fornecedor="98765432109876",
            raz_soc_fornecedor="Fornecedor de Leitura",
            contato_fk=self.contato,
            endereco_fk=self.endereco
        )
        status = fornecedores_manager.read_fornecedor(fornecedor.id)
        self.assertEqual(status, 200)
        self.assertEqual(fornecedores_manager.obj_fornecedor.cnpj_fornecedor, "98765432109876")


    def test_update_fornecedor(self):

        fornecedor = Fornecedor()

        dados_originais  = {
            "cnpj":"12345678901234",
            "raz_soc_fornecedor":"Fornecedor Original",
            "contato_fk":self.contato,
            "endereco_fk":self.endereco
        }

        status = fornecedor.create_fornecedor(dados_originais)

        dados_atualizados  = {
            "cnpj":"55555555555555",
            "raz_soc_fornecedor":"Fornecedor Atualizado",
            "contato_fk":self.contato,
            "endereco_fk":self.endereco
        }

        status= fornecedor.update_fornecedor(fornecedor.obj_fornecedor.id,dados_atualizados)

        self.assertEqual(status, 200)
        self.assertEqual(fornecedor.obj_fornecedor.cnpj_fornecedor, "55555555555555")
        self.assertEqual(fornecedor.obj_fornecedor.raz_soc_fornecedor, "Fornecedor Atualizado")

    # def test_delete_fornecedor(self):
    #     print('test_c_fornecedor')
    #     fornecedores_manager = Fornecedor()
    #     fornecedor = Mdl_fornecedores.objects.create(
    #         cnpj_fornecedor="12345678901234",
    #         raz_soc_fornecedor="Fornecedor para Excluir",
    #         contato_fk=self.contato,
    #         endereco_fk=self.endereco
    #     )
    #     status, deleted_fornecedor_id = fornecedores_manager.delete_fornecedor(fornecedor.id)
    #     self.assertEqual(status, 200)
    #     self.assertEqual(deleted_fornecedor_id, None)
