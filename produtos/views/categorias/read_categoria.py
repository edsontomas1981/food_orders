from django.http import JsonResponse
from produtos.controller.categorias import Categoria
from django.core import serializers

def read_categoria(request):
    if request.method == 'POST':
        categoria = Categoria()
        categorias_qs = categoria.read_categoria()
        categorias_list = [
            {
                'id': categoria.pk,
                'nome': categoria.nome,  # Substitua 'nome' pelo nome correto do campo em Categoria
                # Adicione outros campos conforme necessário
            }
            for categoria in categorias_qs
        ]
        return JsonResponse({'categorias': categorias_list})
    else:
        return JsonResponse({'error': 'Método GET não é permitido para esta ação'}, status=405)

