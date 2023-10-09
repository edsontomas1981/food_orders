from django.http import JsonResponse
from produtos.controller.alergenos import Alergenos
import json

def update_alergeno(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            alergeno_id = data.get('alergeno_id')  # Substitua 'alergeno_id' pelo campo apropriado
            novo_nome = data.get('novo_nome')  # Substitua 'novo_nome' pelo campo apropriado

            if alergeno_id is not None and novo_nome is not None:
                alergeno=Alergenos()
                alergeno.update_alergeno(alergeno_id,novo_nome)

                return JsonResponse({'status': 'alergeno atualizada com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'Dados incompletos na solicitação'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else :
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)
