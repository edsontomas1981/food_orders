from produtos.models.categoria import Categoria as Mdl_categoria 

class Categoria():
    def __init__(self):
        self.obj_categoria = Mdl_categoria()

    def create_categoria(self, nome):
        try:
            if nome.rstrip() =="":
                return 400,self.obj_categoria
            else:
                self.obj_categoria = Mdl_categoria(nome=nome)
                self.obj_categoria.save()
                return 200,self.obj_categoria
            
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
            self.obj_categoria = Mdl_categoria.objects.get(id=id)
            self.obj_categoria.nome = nome
            self.obj_categoria.save()
            return 200,self.obj_categoria
        except Mdl_categoria.DoesNotExist:
            return None

    def delete_categoria(self, id):
        try:
            self.obj_categoria = Mdl_categoria.objects.get(id=id)
            self.obj_categoria.delete()
            return 200,self.obj_categoria.id
        except Mdl_categoria.DoesNotExist:
            return 400,self.obj_categoria.id
