from produtos.controller.alergenos import Alergenos
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

@csrf_exempt
def create_alergenos(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            alergeno_nome = data.get('item')
            if alergeno_nome:
                alergeno = Alergenos()
                alergeno.create_alergeno(alergeno_nome)
                alergenos_qs = alergeno.read_alergenos()
                alergenos_list = [
                    {
                        'id': alergeno.pk,
                        'nome': alergeno.alergeno_nome,  # Substitua 'nome' pelo nome correto do campo em alergeno
                        # Adicione outros campos conforme necessário
                    }
                    for alergeno in alergenos_qs
                ]                
                return JsonResponse({'status': 200,'alergenos':alergenos_list}, status=200)
            else:
                return JsonResponse({'error': 'O campo "alergeno" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)
