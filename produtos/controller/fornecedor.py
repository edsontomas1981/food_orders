from produtos.models.fornecedores import Fornecedor as Mdl_fornecedores
from endereco.controller.endereco import EnderecoCRUD

class Fornecedor():
    def __init__(self):
        self.obj_fornecedor = Mdl_fornecedores()

    def create_fornecedor(self, dados):
        try:
            self.obj_fornecedor = Mdl_fornecedores(
                cnpj_fornecedor=dados['cnpj'],
                raz_soc_fornecedor=dados['raz_soc_fornecedor'],
                endereco_fk=dados['endereco_fk']
            )
            self.obj_fornecedor.save()
            return 200
        except Exception as e:
            return 400, None

    def read_fornecedor(self, fornecedor_id):
        try:
            self.obj_fornecedor = Mdl_fornecedores.objects.get(id=fornecedor_id)
            return 200
        except Mdl_fornecedores.DoesNotExist:
            return None

    def update_fornecedor(self, fornecedor_id, dados):
        try:
            self.obj_fornecedor = Mdl_fornecedores.objects.get(id=fornecedor_id)
            self.obj_fornecedor.cnpj_fornecedor = dados['cnpj']
            self.obj_fornecedor.raz_soc_fornecedor = dados['raz_soc_fornecedor']
            endereco=EnderecoCRUD()
            endereco.update_endereco(self.obj_fornecedor.endereco_fk.id,dados)
            self.obj_fornecedor.save()
            return 200
        except Mdl_fornecedores.DoesNotExist:
            return 400, None

    def delete_fornecedor(self, fornecedor_id):
        try:
            fornecedor = Mdl_fornecedores.objects.get(id=fornecedor_id)
            fornecedor.delete()
            return 200, fornecedor.id
        except Mdl_fornecedores.DoesNotExist:
            return 400, None

    def read_fornecedor_cnpj(self, cnpj_request):
        try:
            self.obj_fornecedor = Mdl_fornecedores.objects.get(cnpj_fornecedor=cnpj_request)
            return 200
        except Mdl_fornecedores.DoesNotExist:
            return None

    