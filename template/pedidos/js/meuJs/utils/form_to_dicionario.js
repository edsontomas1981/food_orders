const form_to_dicionario = (formId) => {
  const form = document.getElementById(formId);
  const formData = {};

  if (form) {
      const elements = form.elements;

      for (let i = 0; i < elements.length; i++) {
          const element = elements[i];

          if (element.id) {
              if (element.type === 'checkbox') {
                  formData[element.id] = element.checked; // Armazena o estado do checkbox
              } else {
                  formData[element.id] = element.value;
              }
          }
      }
  }

  return formData;
}

 
  