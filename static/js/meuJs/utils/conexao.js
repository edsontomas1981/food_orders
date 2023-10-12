const BASEURL = "http://127.0.0.1:8000";

class Conn {
    constructor(url, data) {
        this.url = BASEURL + url;
        this.data = data;
    }

    getCSRFToken = async () => {
        try {
            const response = await fetch(BASEURL+'/produtos/api/get_csrf_token/', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.csrf_token;
        } catch (error) {
            console.error(error);
            return null;
        }
    };
    

    async sendPostRequest() {
        const csrf_token = await this.getCSRFToken();
        try {
            const response = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrf_token, // Usa o token CSRF obtido
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
        }
    }
}

