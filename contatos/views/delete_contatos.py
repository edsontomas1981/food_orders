from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
from utils.verifica_campos import verifica_campos_obrigatorios
from contatos.controller.contatos import Contatos
import json
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def delete_contatos(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            campos_obrigatorios = ['id_contato']
            campos_vazios = verifica_campos_obrigatorios(data,campos_obrigatorios)

            if len(campos_vazios)<= 0:
                contato = Contatos()
                contato.obter_contato(data['id_contato'])   
                id_fornecedor = contato.obj_contato.fornecedor_fk.id
                contato.excluir_contato(data['id_contato'])
                lista_contato = contato.listar_contatos_do_fornecedor(id_fornecedor)
                return JsonResponse({'status':200,'fornecedor': contato.obj_contato.to_dict(),'lista_contatos':lista_contato})
            else:
                return JsonResponse({'error': campos_vazios}, status=400)
            
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
        
    else:
        return JsonResponse({'error': 'Método não permitido Fornecedor'}, status=405)