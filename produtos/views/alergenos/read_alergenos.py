from django.http import JsonResponse
from produtos.controller.alergenos import Alergenos
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def read_alergeno(request):
    if request.method == 'POST':
        alergeno = Alergenos()
        alergenos_qs = alergeno.read_alergenos()
        alergenos_list = [
            {
                'id': alergeno.pk,
                'nome': alergeno.alergeno_nome,  # Substitua 'nome' pelo nome correto do campo em alergeno
                # Adicione outros campos conforme necessário
            }
            for alergeno in alergenos_qs
        ]
        return JsonResponse({'alergenos': alergenos_list})
    else:
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)

