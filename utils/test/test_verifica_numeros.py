from django.test import TestCase
from utils.verifica_tipo_dados import verificar_numero

class UtilsTest(TestCase):
    def test_verfica_numero(self):
        self.assertEqual(verificar_numero('123'), 123)
        self.assertEqual(verificar_numero('1.123,45'), 1123.45)
        self.assertEqual(verificar_numero('3,14'),3.14)  # Verifica um número float
        self.assertEqual(verificar_numero('1.133,14'),1133.14)  # Verifica um número float
        self.assertEqual(verificar_numero('111.133,14'),111133.14)  # Verifica um número float
        self.assertEqual(verificar_numero('1.111.133,14'),1111133.14)  # Verifica um número float
        self.assertEqual(verificar_numero(1111133.14),1111133.14)  # Verifica um número float        
        self.assertEqual(verificar_numero(),0)  # Verifica um número float        



