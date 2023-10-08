from produtos.models.alergenos import Alergenos as Mdl_alergenos 

class Alergenos():
    def __init__(self):
        self.obj_alergenos = Mdl_alergenos()

    def create_alergeno(self, alergeno_nome):
        try:
            if alergeno_nome.rstrip() == "":
                return 400, self.obj_alergenos
            else:
                self.obj_alergenos = Mdl_alergenos(alergeno_nome=alergeno_nome)
                self.obj_alergenos.save()
                return 200, self.obj_alergenos
        except Exception as e:
            return None

    def read_alergenos(self):
        try:
            self.obj_alergenos = Mdl_alergenos.objects.all()
            return self.obj_alergenos
        except Mdl_alergenos.DoesNotExist:
            return None

    def update_alergeno(self, id, alergeno_nome):
        try:
            self.obj_alergenos = Mdl_alergenos.objects.get(id=id)
            self.obj_alergenos.alergeno_nome = alergeno_nome
            self.obj_alergenos.save()
            return 200, self.obj_alergenos
        except Mdl_alergenos.DoesNotExist:
            return None

    def delete_alergeno(self, id):
        try:
            self.obj_alergenos = Mdl_alergenos.objects.get(id=id)
            self.obj_alergenos.delete()
            return 200, None
        except Mdl_alergenos.DoesNotExist:
            return 400, self.obj_alergenos.id
