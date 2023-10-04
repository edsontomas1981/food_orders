from produtos.models.categoria import Categoria as Mdl_categoria 

class Categoria():
    def __init__(self):
        self.obj_categoria = Mdl_categoria()

    def create_categoria(self, nome):
        try:
            if nome.rstrip() =="":
                return 400
            else:
                self.obj_categoria = Mdl_categoria(nome=nome)
                self.obj_categoria.save()
                return 200
        except Exception as e:
            return None

    def read_categoria(self):
        try:
            self.obj_categoria = Mdl_categoria.objects.filter()
            return self.obj_categoria
        except Mdl_categoria.DoesNotExist:
            return None

    def update_categoria(self, id, nome):
        try:
            categoria = Mdl_categoria.objects.get(id=id)
            categoria.nome = nome
            categoria.save()
            return categoria
        except Mdl_categoria.DoesNotExist:
            return None

    def delete_categoria(self, id):
        try:
            categoria = Mdl_categoria.objects.get(id=id)
            categoria.delete()
            return 200
        except Mdl_categoria.DoesNotExist:
            return 400
