def verificar_numero(data):
    if data:  # Verifica se o dado não está vazio
        if isinstance(data, (int, float)):  # Verifica se é um número
            if isinstance(data, float):  # Verifica se é um número float
                if '.' in str(data):  # Verifica se o sinal decimal é ponto
                    print("O número é um float com ponto como sinal decimal.")
                elif ',' in str(data):  # Verifica se o sinal decimal é vírgula
                    print("O número é um float com vírgula como sinal decimal.")
                else:
                    print("O número é um float, mas o sinal decimal não está claro.")
            else:
                print("O número é um inteiro.")
        else:
            try:
                # Tenta converter a string para um número float
                data = float(data.replace(',', '.'))  # Substitui ',' por '.' e converte para float
                print(f"O número é um float com vírgula como sinal decimal: {data}")
            except ValueError:
                print("O dado inserido não é um número.")
    else:
        print("O dado está vazio.")

# Exemplo de uso da função com a string '3,14'
verificar_numero('1.133,14')  # Verifica um número float

