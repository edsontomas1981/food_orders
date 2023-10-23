from django.views.decorators.csrf import csrf_exempt
from produtos.controller.tamanho import Tamanho
from django.http import JsonResponse
import json

@csrf_exempt
def create_tamanho(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            tamanho_nome = data.get('item')
            print (data)

            if tamanho_nome:
                tamanho = Tamanho()
                tamanho.create_tamanho(tamanho_nome)
                tamanhos_qs = tamanho.read_tamanho()
                tamanhos_list = [
                    {
                        'id': tamanho.pk,
                        'nome': tamanho.tamanho,  # Substitua 'nome' pelo nome correto do campo em tamanho
                        # Adicione outros campos conforme necessário
                    }
                    for tamanho in tamanhos_qs
                ]

                return JsonResponse({'status':200,'tamanhos':tamanhos_list}, status=200)
            else:
                return JsonResponse({'error': 'O campo "tamanho" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)
