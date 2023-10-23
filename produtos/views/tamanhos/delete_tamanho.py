from django.http import JsonResponse
from produtos.controller.tamanho import Tamanho
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def delete_tamanho(request):

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        try:
            tamanho = Tamanho()
            tamanho.delete_tamanho(data['tamanho_id'])
            tamanhos_qs = tamanho.read_tamanho()
            tamanhos_list = [
                {
                    'id': tamanho.pk,
                    'nome': tamanho.tamanho,  # Substitua 'nome' pelo nome correto do campo em tamanho
                    # Adicione outros campos conforme necessário
                }
                for tamanho in tamanhos_qs
            ]
            return JsonResponse({'status': 200,'tamanhos':tamanhos_list}, status=200)
        except Exception as e:
            return JsonResponse({'error': f'Erro ao excluir tamanho: {str(e)}'}, status=500)
    
    elif request.method == 'GET':
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)
