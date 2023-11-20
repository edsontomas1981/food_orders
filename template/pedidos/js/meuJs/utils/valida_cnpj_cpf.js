function validar_cpf_cnpj(doc) {
    const cleanDoc = doc.replace(/[^\d]/g, '');

    if (cleanDoc.length === 11) {
      // Validar CPF
      let sum = 0;
      let rest;
  
      if (cleanDoc === "00000000000" || cleanDoc === "11111111111" || cleanDoc === "22222222222" || cleanDoc === "33333333333" || cleanDoc === "44444444444" || cleanDoc === "55555555555" || cleanDoc === "66666666666" || cleanDoc === "77777777777" || cleanDoc === "88888888888" || cleanDoc === "99999999999") {
        return false;
      }
  
      for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(cleanDoc.substring(i - 1, i)) * (11 - i);
      }
  
      rest = (sum * 10) % 11;
  
      if ((rest === 10) || (rest === 11)) {
        rest = 0;
      }
  
      if (rest !== parseInt(cleanDoc.substring(9, 10))) {
        return false;
      }
  
      sum = 0;
  
      for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(cleanDoc.substring(i - 1, i)) * (12 - i);
      }
  
      rest = (sum * 10) % 11;
  
      if ((rest === 10) || (rest === 11)) {
        rest = 0;
      }
  
      if (rest !== parseInt(cleanDoc.substring(10, 11))) {
        return false;
      }
  
      return true;
    } else if (cleanDoc.length === 14) {
      // Validar CNPJ
      let size = cleanDoc.length - 2;
      let numbers = cleanDoc.substring(0, size);
      const digits = cleanDoc.substring(size);
      let sum = 0;
      let pos = size - 7;
  
      for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
  
      let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
      if (result != digits.charAt(0)) {
        return false;
      }
  
      size = size + 1;
      numbers = cleanDoc.substring(0, size);
      sum = 0;
      pos = size - 7;
  
      for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
  
      result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
      if (result != digits.charAt(1)) {
        return false;
      }
  
      return true;
    } else {
      return false;
    }
  }

  