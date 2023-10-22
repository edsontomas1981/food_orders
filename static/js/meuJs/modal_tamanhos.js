let modal_tamanhos  = document.getElementById("modal_tamanho")
modal_tamanhos.innerHTML = `
<div class="modal fade" id="cadastro_tamanho" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Cadastro de Tamanhos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-sm-12">
                <form class="row">
                    <div class="col-sm-8">
                        <label for="tamanho" class="visually-hidden">Tamanho</label>
                        <input type="text" class="form-control" id="tamanho" placeholder="Tamanho">
                    </div>
                    <div class="col-sm-4">
                        <a class="btn btn-primary mb-3" id="criar_tamanho"> Criar</a>
                    </div>
                    <div class="col-sm-12">
                        <table class="table" id="tabela_tamanho">
                        </table>
                    </div>
                </form>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Tamanhos</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody id="tbody_tamanhos">
              </tbody>
            </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
`