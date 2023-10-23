from django.http import JsonResponse
from produtos.controller.tamanho import Tamanho
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def read_tamanho(request):
    if request.method == 'POST':
        tamanho = Tamanho()
        tamanhos_qs = tamanho.read_tamanho()
        tamanhos_list = [
            {
                'id': tamanho.pk,
                'nome': tamanho.tamanho,  # Substitua 'nome' pelo nome correto do campo em tamanho
                # Adicione outros campos conforme necessário
            }
            for tamanho in tamanhos_qs
        ]
        return JsonResponse({'tamanhos': tamanhos_list})
    else:
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)


