def verificar_numero(data=0):
    if isinstance(data, (int, float)):
        return data
    elif isinstance(data, str):
        try:
            if ',' in data and '.' in data:
                # Remove os pontos de milhares e substitui a vírgula por um ponto para representar o decimal
                data = data.replace('.', '').replace(',', '.')
                return float(data)
            else:
                # Verifica se a string tem um ponto como separador decimal e converte diretamente para float
                return float(data.replace(',', '.'))
        except ValueError:
            return 0
    else:
        return 0
