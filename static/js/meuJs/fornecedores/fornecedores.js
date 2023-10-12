document.addEventListener('DOMContentLoaded', function () {
    let btn_save_fornecedores = document.getElementById('btn_save_fornecedores');

    btn_save_fornecedores.addEventListener('click', () => {

        let form = formToDictionary('form_fornecedores');
        let url = '/produtos/fornecedor/create/';

        let conexao = new Conn(url, form);
        conexao.sendPostRequest()
    });
});