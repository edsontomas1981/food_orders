from django.http import JsonResponse, HttpResponseBadRequest, HttpResponseNotAllowed, HttpResponseServerError
from produtos.controller.fornecedor import Fornecedor
import json
from django.views.decorators.csrf import csrf_exempt
from contatos.controller.contatos import Contatos


@csrf_exempt
def read_fornecedor_cnpj(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            
            # Valide o CNPJ aqui e trate exceções se necessário

            fornecedor = Fornecedor()
            fornecedor.read_fornecedor_cnpj(data['cnpj'])

            contatos = Contatos()
            lista = contatos.listar_contatos_do_fornecedor(fornecedor.obj_fornecedor.id)

            return JsonResponse({'fornecedor': fornecedor.obj_fornecedor.to_dict(),'lista_contatos': lista})
        except json.JSONDecodeError as e:
            # Trate erros de decodificação JSON
            return HttpResponseBadRequest(f'Erro na decodificação JSON: {str(e)}')
        except KeyError:
            # Trate erros de chave ausente
            return HttpResponseBadRequest('Chave "cnpj" ausente nos dados')
        except Exception as e:
            # Trate outros erros inesperados
            return HttpResponseServerError(f'Ocorreu um erro inesperado: {str(e)}')
    else:
        return HttpResponseNotAllowed(['POST'], content='Método GET não é permitido para esta ação Fornecedor')
