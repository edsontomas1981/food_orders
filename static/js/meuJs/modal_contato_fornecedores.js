document.addEventListener('DOMContentLoaded',()=>{

let modal_contatos_fornecedores  = document.getElementById("div_modal_contato_fornecedores")
modal_contatos_fornecedores.innerHTML = `        
<div class="modal" tabindex="-1" role="dialog" id="modal_contatos">
<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Contatos</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form id="form_contatos">
        <input type="hidden">
        <div class="row">
          <div class="form-floating col-sm-4 pl-1 pr-1 mt-1">
            <select class="form-select" id="tipo_contato" aria-label="tipo_de_contato">
              <option value="0">Selecione</option>
              <option value="Telefone">Telefone</option>
              <option value="E-mail">E-mail</option>
              <option value="Whatsapp">Whatsapp</option>
              <option value="Telegram">Telegram</option>
              <option value="Outros">Outros</option>
            </select>
            <label for="tipo_contato">Tipo de Contatos</label>
          </div>

          <div class="form-floating col-sm-4 pl-1 pr-1 mt-1">
            <input class="form-control" id="contato" placeholder=" " aria-label="contato">
            <label for="contato">Contato</label>
          </div>

          <div class="form-floating col-sm-3 pl-1 pr-1 mt-1">
            <input class="form-control" id="nome_contato" placeholder=" " aria-label="nome_contato">
            <label for="nome_contato">Nome Contato</label>
          </div>
          <div class="col-sm-1 pl-1 pr-4 mt-2">
            <a class="btn btn-outline-primary btn-lg" id="btn_add_contatos">+</a>
          </div>                    
        </div>
      </form>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table center-aligned-table" id="tabela_contato">
                  <thead>
                    <tr class="text-primary">
                      <th>Número</th>
                      <th>Tipo contato</th>
                      <th>Nome contato</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="row_contatos">
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>                  
    </div>
  </div>
</div>
</div>
`

})

