from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
from django.views.decorators.csrf import csrf_exempt
from utils.verifica_campos import verifica_campos_obrigatorios
from endereco.controller.endereco import EnderecoCRUD

import json

@csrf_exempt
def create_fornecedor(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            campos_obrigatorios = ['cnpj','raz_soc_fornecedor','cep',
                                   'logradouro','numero','bairro','cidade','estado']

            if len(verifica_campos_obrigatorios(data,campos_obrigatorios))<= 0:
                endereco = EnderecoCRUD()
                endereco.create_endereco(data)

                data['endereco_fk'] = endereco.obj_endereco
                fornecedor = Fornecedor()
                fornecedor.create_fornecedor(data)

                print(fornecedor.obj_fornecedor.to_dict())

                return JsonResponse({'fornecedor': fornecedor.obj_fornecedor.to_dict()}, status=200)
            else:
                print('campos não preenchidos')
                return JsonResponse({'error': 'O campo "fornecedor" é obrigatório'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido Fornecedor'}, status=405)
