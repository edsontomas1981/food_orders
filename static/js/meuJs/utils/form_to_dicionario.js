const formToDictionary=(formId)=> {
    const form = document.getElementById(formId);
    const formData = {};
  
    if (form) {
      const elements = form.elements;
  
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
  
        if (element.id) {
          formData[element.id] = element.value;
        }
      }
    }
  
    return formData;
  }
 
  