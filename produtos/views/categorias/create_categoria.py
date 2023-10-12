from django.http import JsonResponse
from produtos.controller.categorias import Categoria
import json

def create_categoria(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            print("************************************")
            print(data)
            print("************************************")
            categoria_nome = data.get('categoria')

            if categoria_nome:
                # categoria = Categoria()
                # categoria.create_categoria(categoria_nome)
                return JsonResponse({'status': 'Cadastro efetuado com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'O campo "categoria" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)
