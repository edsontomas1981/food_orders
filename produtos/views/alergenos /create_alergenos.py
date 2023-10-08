from django.http import JsonResponse
from produtos.controller.alergenos import Alergenos
import json

def create_alergenos(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            alergeno_nome = data.get('alergeno')

            if alergeno_nome:
                alergeno = Alergenos()
                alergeno.create_alergeno(alergeno_nome)
                return JsonResponse({'status': 'Cadastro efetuado com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'O campo "alergeno" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)
