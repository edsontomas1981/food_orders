const deleta_contato = async (data) => {
    try {
        let dados = data;
        let url = '/contatos/delete/';
        let conexao = new Conn(url, dados);
        let response = await conexao.sendPostRequest();

        console.log("Status da resposta HTTP: " + response.status);

        if (response.status === 200) {
            // Se a resposta for bem-sucedida (código 200), você pode acessar o corpo da resposta assim:
            const responseData = await response.json();
            console.log("Resposta da API:", responseData);
            // Agora você pode chamar a função para popular a tabela de contatos, passando os dados da resposta.
            popula_tabela_contatos(responseData);
        } else {
            console.error("Erro na resposta da API");
        }
    } catch (error) {
        console.error("Ocorreu um erro na solicitação:", error);
    }
}
