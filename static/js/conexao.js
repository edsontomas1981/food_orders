const BASEURL = "http://127.0.0.1:8000"

class Conexao {
    constructor(url,data){
        this.url=BASEURL+url
        this.data=data
    }

    getCSRFToken() {
      const match = document.cookie.match(/(^|;)csrftoken=([^;]*)/);
      if (match && match[2]) {
          return match[2];
      } else {
          // Lida com o caso em que o cookie csrftoken não foi encontrado
          console.error("O cookie 'csrftoken' não foi encontrado.");
          return null; // Ou outra ação apropriada, dependendo do seu caso
      }
    }
     
    async sendPostRequest() {
      this.csrfToken=this.getCSRFToken()
      console.log(this.csrfToken)
      try {
        const response = await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": this.csrfToken,
          },
          body: JSON.stringify(this.data),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
        // alert("Erro interno!");
      }
    }
}
