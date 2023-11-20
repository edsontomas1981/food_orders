function valida_cep(cep) {
    // Remova qualquer caractere não numérico do CEP (por exemplo, espaços e hifens)
    cep = cep.replace(/\D/g, '');
  
    // Verifique se o CEP possui exatamente 8 dígitos
    if (cep.length !== 8) {
      return false;
    }
  
    return true;
  }