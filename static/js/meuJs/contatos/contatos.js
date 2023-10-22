const deleta_contato = async (data) => {
    try {
        let dados = data;
        let url = '/contatos/delete/';
        let conexao = new Conn(url, dados);
        let response = await conexao.sendPostRequest();

        if (response.status === 200) {
            // Agora você pode chamar a função para popular a tabela de contatos, passando os dados da resposta.
            popula_tabela_contatos(response);
            msgOK('Contato deletado com sucesso')
        } else {
            console.error("Erro na resposta da API");
        }
    } catch (error) {
        console.error("Ocorreu um erro na solicitação:", error);
    }
}
