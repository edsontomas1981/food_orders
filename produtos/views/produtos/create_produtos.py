from django.http import JsonResponse
from produtos.controller.produtos import Produto
from utils.verifica_campos import verifica_campos_obrigatorios
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def create_produto(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))

            campos_obrigatorios = ['estoque','fornecedor_cnpj','nome','preco','categoria']
            campos_vazios = verifica_campos_obrigatorios(data,campos_obrigatorios)

            if len(campos_vazios)<=0:
                produto = Produto()
                produto.create_produto(data)
                return JsonResponse({'status': 200,'produto':produto.obj_produto.to_dict()}, status=200)
            else:
                return JsonResponse({'error': 'O campos vazios','campos_vazios':campos_vazios})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido Produto'}, status=405)