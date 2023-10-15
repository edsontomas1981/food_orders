def verifica_campos_obrigatorios(dicionario, campos_obrigatorios):
    campos_vazios = []
    for campo_obrigatorio in campos_obrigatorios:
        if campo_obrigatorio not in dicionario or not dicionario[campo_obrigatorio]:
            campos_vazios.append(campo_obrigatorio)
    return campos_vazios
