from django.http import JsonResponse
from produtos.controller.categorias import Categoria
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def create_categoria(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            categoria_nome = data.get('item')

            if categoria_nome:
                categoria = Categoria()
                categoria.create_categoria(categoria_nome)
                categorias_qs = categoria.read_categoria()
                categorias_list = [
                    {
                        'id': categoria.pk,
                        'nome': categoria.nome,  # Substitua 'nome' pelo nome correto do campo em Categoria
                        # Adicione outros campos conforme necessário
                    }
                    for categoria in categorias_qs
                ]
                return JsonResponse({'status':200,'categorias':categorias_list}, status=200)
            else:
                return JsonResponse({'error': 'O campo "categoria" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)
