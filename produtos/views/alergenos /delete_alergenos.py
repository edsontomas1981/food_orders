from django.http import JsonResponse
from produtos.controller.alergenos import Alergenos
import json

def delete_alergeno(request):

    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        try:
            alergeno = Alergenos()
            alergeno.delete_alergeno(data['id'])
            return JsonResponse({'status': 'alergeno excluída com sucesso'}, status=200)
        except Exception as e:
            return JsonResponse({'error': f'Erro ao excluir alergeno: {str(e)}'}, status=500)
    
    elif request.method == 'GET':
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)
