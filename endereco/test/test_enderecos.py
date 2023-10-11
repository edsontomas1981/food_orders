from django.test import TestCase
from endereco.controller.endereco import EnderecoCRUD 

class Test_endereco(TestCase):
    def setUp(self):
        self.endereco = EnderecoCRUD()
        self.dados = {
            "cep":'00000000',
            "logradouro":'Teste',
            "numero":'1',
            "complemento":'Teste',  
            "bairro":"bairro",
            "cidade":"cidade",
            "estado":"estado",
            "observacao":"observacao"
            }
        self.status=self.endereco.create_endereco(self.dados)

    def test_criar_endereco(self):
        self.assertEqual(self.status,200)
        
    
    def teste_read_endereco(self):
        lista_endereco = EnderecoCRUD.read_enderecos()
        self.assertTrue(len(lista_endereco) > 0 )

    def teste_update_endereco(self):
        self.dados_atualizados = {
                                    "cep":'11111111',
                                    "logradouro":'Novo Teste',
                                    "numero":'1',
                                    "complemento":'Novo Teste',  
                                    "bairro":"novo bairro",
                                    "cidade":"novo cidade",
                                    "estado":"novo estado",
                                    "observacao":"novo observacao"
                                }
        self.endereco.update_endereco(self.endereco.obj_endereco.id,self.dados_atualizados)
        self.assertEqual("Novo Teste",self.endereco.obj_endereco.logradouro)
        
    def tearDown(self) -> None:
        return super().tearDown()