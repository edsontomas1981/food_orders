document.addEventListener('DOMContentLoaded',()=>{
  let div_modal_fornecedores  = document.getElementById("div_modal_fornecedores")
div_modal_fornecedores.innerHTML = `        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" id="modal_cadastro_fornecedores" data-backdrop="static" data-keyboard="false">
<div class="modal-dialog modal-lg modal-dialog-scrollable" role="document" style="max-height: 80vh; overflow-y: auto;">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Cadastro Fornecedores</h5>
      <button type="button" class="close" data-dismiss="modal" id="fecha_modal_fornecedores" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form id="form_fornecedores">
        <div class="row">
          <input type="hidden" id="fornecedor_id">
          <div class="form-floating col-sm-6 pl-1 pr-1 ">
              <input type="text" class="form-control" id="cnpj" name="cnpj" placeholder=" ">
              <label for="cnpj">CPF/CNPJ:</label>
          </div>
          <div class="form-floating col-sm-6 pl-1 pr-1 ">
            <input type="text" class="form-control" id="raz_soc_fornecedor" name="raz_soc_fornecedor" placeholder=" " >
            <label for="raz_soc_fornecedor">Nome/Razão Social:</label>
          </div>

          <div class="form-floating col-sm-3 pl-1 pr-1 mt-1 ">
            <input type="text" class="form-control" id="cep" name="cep" placeholder=" " >
            <label for="cep">Cep:</label>
          </div>

          <div class="form-floating col-sm-4 pl-1 pr-1 mt-1">
            <input type="text" class="form-control" id="logradouro" name="logradouro" placeholder=" " >
            <label for="logradouro">Endereço:</label>
          </div>                    

          <div class="form-floating col-sm-2 pl-1 pr-1 mt-1">
            <input type="text" class="form-control" id="numero" name="numero" placeholder=" " >
            <label for="numero">Número:</label>
          </div>   
                    
          <div class="form-floating col-sm-3 pl-1 pr-1 mt-1 ">
            <input type="text" class="form-control" id="complemento" name="complemento" placeholder=" " >
            <label for="complemento">Complemento:</label>
          </div>

          <div class="form-floating col-sm-5 pl-1 pr-1 mt-1">
            <input type="text" class="form-control" id="bairro" name="bairro" placeholder=" " >
            <label for="bairro">Bairro:</label>
          </div> 
          <div class="form-floating col-sm-5 pl-1 pr-1 mt-1">
            <input type="text" class="form-control" id="cidade" name="cidade" placeholder=" " >
            <label for="cidade">Cidade:</label>
          </div>

          <div class="form-floating col-sm-2 pl-1 pr-1 mt-1">
            <input type="text" class="form-control" id="estado" name="estado" placeholder=" " >
            <label for="estado">UF:</label>
          </div>
          <div class="form-floating col-sm-12 pl-1 pr-1 mt-1">
            <textarea class="form-control" placeholder=" " id="observacao"></textarea>
            <label for="observacao">Observações</label>
          </div>
          <div class="circle-shadow-info text-end">
            <a class="btn btn-outline-primary rounded-circle mt-3" data-toggle="modal" id="btn_add_contato" data-target="#modal_contatos">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" id="descartar" data-dismiss="modal">Descartar</button>
      <button type="button" class="btn btn-outline-primary" id="btn_save_fornecedores">Salvar</button>
    </div>
  </div>
</div>
</div>`

});
