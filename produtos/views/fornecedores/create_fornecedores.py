from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
from utils.verifica_campos import verifica_campos_obrigatorios
from endereco.controller.endereco import EnderecoCRUD
import json
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def create_fornecedor(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            campos_obrigatorios = ['cnpj','raz_soc_fornecedor','cep',
                                   'logradouro','numero','bairro','cidade','estado']
            campos_vazios = verifica_campos_obrigatorios(data,campos_obrigatorios)
            if len(campos_vazios)<= 0:
                endereco = EnderecoCRUD()
                endereco.create_endereco(data)

                data['endereco_fk'] = endereco.obj_endereco
                fornecedor = Fornecedor()
                fornecedor.create_fornecedor(data)

                return JsonResponse({'fornecedor': fornecedor.obj_fornecedor.to_dict()}, status=200)
            else:
                return JsonResponse({'status':400,'error': campos_vazios}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido Fornecedor'}, status=405)
