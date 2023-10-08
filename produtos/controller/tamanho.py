from produtos.models.tamanhos import Tamanho as Mdl_tamanho 

class Tamanho():
    def __init__(self):
        self.obj_tamanho = Mdl_tamanho()

    def create_tamanho(self, tamanho):
        try:
            if tamanho.rstrip() == "":
                return 400, self.obj_tamanho
            else:
                self.obj_tamanho = Mdl_tamanho(tamanho=tamanho)
                self.obj_tamanho.save()
                return 200, self.obj_tamanho
        except Exception as e:
            return None

    def read_tamanho(self):
        try:
            self.obj_tamanho = Mdl_tamanho.objects.all()
            return self.obj_tamanho
        except Mdl_tamanho.DoesNotExist:
            return None

    def update_tamanho(self, id, tamanho):
        try:
            self.obj_tamanho = Mdl_tamanho.objects.get(id=id)
            self.obj_tamanho.tamanho = tamanho
            self.obj_tamanho.save()
            return 200, self.obj_tamanho
        except Mdl_tamanho.DoesNotExist:
            return None

    def delete_tamanho(self, id):
        try:
            self.obj_tamanho = Mdl_tamanho.objects.get(id=id)
            self.obj_tamanho.delete()
            return 200, self.obj_tamanho.id
        except Mdl_tamanho.DoesNotExist:
            return 400, self.obj_tamanho.id
