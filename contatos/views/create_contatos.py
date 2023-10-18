from django.http import JsonResponse
from produtos.controller.fornecedor import Fornecedor
from utils.verifica_campos import verifica_campos_obrigatorios
from contatos.controller.contatos import Contatos
import json
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def create_contatos(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            campos_obrigatorios = ['id_proprietario','contato','nome_contato','tipo_contato']
            campos_vazios = verifica_campos_obrigatorios(data,campos_obrigatorios)
            if len(campos_vazios)<= 0:

                fornecedor = Fornecedor()
                fornecedor.read_fornecedor(data['id_proprietario'])
                data['fornecedor_fk'] = fornecedor.obj_fornecedor
                contato = Contatos()
                contato.criar_contato(data)

                lista_contato = contato.listar_contatos_do_fornecedor(fornecedor.obj_fornecedor.id)

                return JsonResponse({'fornecedor': contato.obj_contato.to_dict(),'lista_contatos':lista_contato}, status=200)
            else:
                return JsonResponse({'status':400,'error': campos_vazios}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Dados JSON inválidos'}, status=400)
    else:
        return JsonResponse({'error': 'Método não permitido Fornecedor'}, status=405)
