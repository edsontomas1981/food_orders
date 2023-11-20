let btn_fecha_modal_fornecedores = document.getElementById('fecha_modal_fornecedores')
let modal_fornecedores = document.getElementById('modal_cadastro_fornecedores')

$('#modal_cadastro_fornecedores').on('show.bs.modal', function (event) {
});

$('#modal_cadastro_fornecedores').on('hidden.bs.modal', function (event) {
    limpar_campos_formulario("form_fornecedores")
    limpar_campos_formulario('form_contatos')
    limpa_tabelas("row_contatos")
});


