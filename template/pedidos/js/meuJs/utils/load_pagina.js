const abre_modal = () => {
  $('#cadastro_categoria').modal('show');
};

document.addEventListener('DOMContentLoaded', async () => {
  await tooltip('cmb_categorias', 'Adicione uma nova categoria ', '+', 'cadastro_categoria');
  await tooltip('cmb_tamanho', 'Adicione um novo tamanho ', '+', 'cadastro_tamanho');
  await tooltip('cmb_alergenos', 'Adicione um novo alérgeno ', '+', 'cadastro_alergenos');
  await tooltip('fornecedor_raz_soc', 'Adicione um novo fornecedor ', '+', 'modal_cadastro_fornecedores');
  await tooltip('fornecedor_cnpj', 'Adicione um novo fornecedor ', '+', 'modal_cadastro_fornecedores');
});

const tooltip = (id_div, texto_msg, texto_botao, nome_modal) => {
  const instance = tippy('#' + id_div, {
    content: texto_msg + '<button id="tooltipButton" class="btn btn-outline-primary rounded-circle" data-toggle="modal" data-target="#'+nome_modal+'" >' + texto_botao + '</button>',
    allowHTML: true,
    interactive: true,
  });
};

