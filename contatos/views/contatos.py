from django.http import JsonResponse
import json

def contato(request):
    if request.method == 'POST':
        return JsonResponse({'error': 'Contatos'}, status=200)
        # try:
        #     data = json.loads(request.body.decode('utf-8'))
        #     categoria_nome = data.get('categoria')

        #     if categoria_nome:
        #         categoria = Categoria()
        #         categoria.create_categoria(categoria_nome)
        #         return JsonResponse({'status': 'Cadastro efetuado com sucesso'}, status=200)
        #     else:
        #         return JsonResponse({'error': 'O campo "categoria" é obrigatório'}, status=400)
        # except json.JSONDecodeError:
        #     return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Contatos'}, status=200)
