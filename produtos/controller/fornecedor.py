from produtos.models.fornecedores import Fornecedor as Mdl_fornecedores

class Fornecedor():
    def __init__(self):
        self.obj_fornecedor = Mdl_fornecedores()

    def create_fornecedor(self, cnpj, razao_social, contato_fk, endereco_fk):
        try:
            fornecedor = Mdl_fornecedores(
                cnpj_fornecedor=cnpj,
                raz_soc_fornecedor=razao_social,
                contato_fk=contato_fk,
                endereco_fk=endereco_fk
            )
            fornecedor.save()
            return 200, fornecedor
        except Exception as e:
            return 400, None

    def read_fornecedor(self, fornecedor_id):
        try:
            fornecedor = Mdl_fornecedores.objects.get(id=fornecedor_id)
            return fornecedor
        except Mdl_fornecedores.DoesNotExist:
            return None

    def update_fornecedor(self, fornecedor_id, cnpj, razao_social, contato_fk, endereco_fk):
        try:
            fornecedor = Mdl_fornecedores.objects.get(id=fornecedor_id)
            fornecedor.cnpj_fornecedor = cnpj
            fornecedor.raz_soc_fornecedor = razao_social
            fornecedor.contato_fk = contato_fk
            fornecedor.endereco_fk = endereco_fk
            fornecedor.save()
            return 200, fornecedor
        except Mdl_fornecedores.DoesNotExist:
            return 400, None

    def delete_fornecedor(self, fornecedor_id):
        try:
            fornecedor = Mdl_fornecedores.objects.get(id=fornecedor_id)
            fornecedor.delete()
            return 200, fornecedor.id
        except Mdl_fornecedores.DoesNotExist:
            return 400, None
