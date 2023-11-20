let modal_alergenos  = document.getElementById("modal_alergenos")
modal_alergenos.innerHTML = `
<div class="modal fade" id="cadastro_alergenos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Cadastro de Alérgenos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-sm-12">
                <form class="row">
                    <div class="col-sm-8">
                        <label for="alergenos" class="visually-hidden">Alérgenos</label>
                        <input type="text" class="form-control" id="alergenos" placeholder="Alérgenos">
                    </div>
                    <div class="col-sm-4">
                        <a class="btn btn-primary mb-3" id="criar_alergenos"> Criar</a>
                    </div>
                    <div class="col-sm-12">
                        <table class="table" id="tabela_alergenos">
                        </table>
                    </div>
                </form>
                <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Tamanhos</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody id="tbody_alergenos">
                </tbody>
              </table>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
`