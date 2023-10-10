from django.http import JsonResponse
from produtos.controller.categorias import Categoria
import json

def update_categoria(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            categoria_id = data.get('categoria_id')  # Substitua 'categoria_id' pelo campo apropriado
            categoria_nome = data.get('categoria')  # Substitua 'categoria' pelo campo apropriado
            if categoria_id is not None and categoria_nome is not None:
                categoria=Categoria()
                categoria.update_categoria(categoria_id,categoria_nome)
                return JsonResponse({'status': 'Categoria atualizada com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'Dados incompletos na solicitação'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else :
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)
