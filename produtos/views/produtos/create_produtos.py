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

            print(data)

            campos_obrigatorios = ['estoque','fornecedor_cnpj','nome','preco','categoria']
            campos_vazios = verifica_campos_obrigatorios(data,campos_obrigatorios)



            print(campos_vazios)

            produto = Produto()
            produto.create_produto(data)

            return JsonResponse({'status': 'Cadastro efetuado com sucesso'}, status=200)


            # if produto_nome:
            #     produto = Produto()
            #     produto.create_produto(produto_nome)
            #     return JsonResponse({'status': 'Cadastro efetuado com sucesso'}, status=200)
            # else:
            #     return JsonResponse({'error': 'O campo "produto" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido Produto'}, status=405)