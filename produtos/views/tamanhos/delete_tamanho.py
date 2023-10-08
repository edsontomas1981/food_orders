from django.http import JsonResponse
from produtos.controller.tamanho import Tamanho
import json

def delete_tamanho(request):

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        try:
            tamanho = Tamanho()
            tamanho.delete_tamanho(data['id'])
            return JsonResponse({'status': 'tamanho excluída com sucesso'}, status=200)
        except Exception as e:
            return JsonResponse({'error': f'Erro ao excluir tamanho: {str(e)}'}, status=500)
    
    elif request.method == 'GET':
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)
