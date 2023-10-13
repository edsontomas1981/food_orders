from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
from utils.verifica_campos import verifica_campos_obrigatorios
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def update_fornecedor(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            
            campos_obrigatorios = ['cnpj','raz_soc_fornecedor','cep',
                                   'logradouro','numero','bairro','cidade','estado','fornecedor_id']

            if len(verifica_campos_obrigatorios(data,campos_obrigatorios))<= 0:
                fornecedor=Fornecedor()
                fornecedor.update_fornecedor(data['fornecedor_id'],data)

                return JsonResponse({'status': 'fornecedor atualizada com sucesso'}, status=200)
            else:
                return JsonResponse({'error': 'Dados incompletos na solicitação'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else :
        return JsonResponse({'error': 'Método GET não é permitido para esta ação Fornecedor'}, status=405)