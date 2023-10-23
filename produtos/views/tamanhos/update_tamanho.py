from django.http import JsonResponse
from produtos.controller.tamanho import Tamanho
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def update_tamanho(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            tamanho_id = data.get('tamanho_id')  # Substitua 'tamanho_id' pelo campo apropriado
            tamanho_nome = data.get('tamanho_nome')  # Substitua 'tamanho_nome' pelo campo apropriado
            if tamanho_id is not None and tamanho_nome is not None:
                tamanho=Tamanho()
                tamanho.update_tamanho(tamanho_id,tamanho_nome)
                return JsonResponse({'status': 'tamanho atualizada com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'Dados incompletos na solicitação'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else :
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)
