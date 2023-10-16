let modal_cad_produto  = document.getElementById("template_modal")
modal_cad_produto.innerHTML = `        
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal_cadastro_produtos">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cadastro de Produtos</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="form-floating mb-3 col-sm-4 pl-1" >
                    <input type="text" class="form-control" id="id_produto" placeholder="Id Produto" disabled>
                    <label for="preco">Id Produto</label>
                </div>            
                <div class="form-floating mb-2 col-sm-4 pl-1 ">
                    <input type="text" class="form-control" id="cod_barras" placeholder="Código de Barras">
                    <label for="cod_barras">Código de Barras</label>
                </div>
                <div class="form-check col-sm-2">
                    <label>
                    <input type="checkbox" class="form-check-input" checked>
                    Disponível
                    <i class="input-helper"></i></label>
                </div>
                <div class="form-floating col-sm-6 pl-1">
                    <input class="form-control" id="fornecedor_cnpj" aria-label="fornecedores" placeholder="CNPJ/CPF">
                    <label for="fornecedor_cnpj">CNPJ/CPF</label>
                </div> 
                <div class="form-floating input-group mb-3 col-sm-6 pl-1">
                    <input class="form-control" id="fornecedor_raz_soc" placeholder=" " aria-label="fornecedor_raz_soc">
                    <label for="fornecedor_raz_soc">Fornecedor</label>
                    <button class="btn btn-outline-primary mr-2" type="button">+ Fornecedor</button>
                </div>
                <div class="form-floating mb-3 col-sm-4 pl-1 ">
                    <input type="text" class="form-control" id="nome_produto" placeholder="Nome do produto">
                    <label for="nome_produto">Nome Produto</label>
                </div>  
                <div class="form-floating col-sm-4 pl-1 mb-2 mt-0">
                    <textarea class="form-control" placeholder="Descrição do Produto" id="descricao_produto"></textarea>
                    <label for="descricao_produto">Descrição do Produto</label>
                </div>               
                <div class="form-floating mb-2 col-sm-4 pl-1 ">
                    <input type="text" class="form-control" id="preco" placeholder="Preço">
                    <label for="preco">Preço R$</label>
                </div>
                
                <div class="form-floating input-group mb-3 col-sm-4 pl-1">
                    <select class="form-select" id="cmb_categorias" aria-label="cmb_categorias" placeholder="Categoria">
                    </select>
                    <label for="cmb_categorias">Categorias</label>
                    <button class="btn btn-outline-primary mr-2" data-toggle="modal" data-target="#cadastro_categoria" type="button">+ Categoria</button>
                </div>
                <div class="form-floating input-group mb-3 col-sm-4 pl-1">
                    <select class="form-select" id="cmb_tamanho" aria-label="cmb_tamanho" placeholder="Categoria">
                        <option selected>Tamanho</option>
                    </select>
                    <label for="cmb_tamanho">Tamanho</label>
                    <button class="btn btn-outline-primary mr-2" data-toggle="modal" data-target="#cadastro_tamanho"  type="button">+ Tamanho</button>
                </div>   
                <div class="form-floating input-group mb-3 col-sm-4 pl-1">
                    <select class="form-select" id="cmb_alergenos"aria-label="cmb_alergenos" placeholder="Categoria">
                        <option selected>Alérgenos</option>
                    </select>
                    <label for="cmb_alergenos">Alérgenos</label>
                    <button class="btn btn-outline-primary mr-2"  data-toggle="modal" data-target="#cadastro_alergenos"  type="button">+ Alérgenos</button>
                </div> 
                <div class="form-floating input-group mb-3 col-sm-12 pl-1">
                <input class="form-control" id="imagem" placeholder="Imagem" readonly>
                <label for="imagem">Imagem</label>
                <button class="btn btn-outline-primary mr-2" type="button" onclick="selecionarImagem()">+ Imagem</button>
            </div>
                <input type="file" id="inputImagem" style="display: none;">

                <div class="form-floating mb-2 col-sm-3 pl-1 ">
                    <input type="text" class="form-control" id="tempo_preparo" placeholder="Tempo de preparo">
                    <label for="tempo_preparo">Tempo de preparo</label>
                </div>
                <div class="form-floating col-sm-3 pl-1">
                    <input type="text" class="form-control" id="estoque" placeholder="Qtde Estoque">
                    <label for="estoque">Qtde Estoque</label>
                </div>
                <div class="form-floating col-sm-3 pl-1">
                    <input type="text" class="form-control" id="restricoes_dieteticas" placeholder="Restrições Dietéticas">
                    <label for="restricoes_dieteticas">Restrições Dietéticas</label>
                </div>
                <div class="form-floating col-sm-3 pl-1">
                    <input type="text" class="form-control" id="sazonalidade" placeholder="Sazonalidade(Ex:Verão)">
                    <label for="sazonalidade">Sazonalidade(Ex:Verão)</label>
                </div>
                <div class="form-floating col-sm-6 mt-2 pl-1" >
                    <textarea class="form-control" placeholder="Receita/Instruções de Preparo" id="receita" rows="4"></textarea>
                    <label for="receita">Receita/Instruções de Preparo</label>
                </div>
                <div class="form-floating col-sm-6 mt-2 pl-1">
                    <textarea class="form-control" placeholder="Informações Nutricionais" id="inf_nutricionais"></textarea>
                    <label for="inf_nutricionais">Informações Nutricionais</label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Descartar</button>
            <button type="button" class="btn btn-outline-primary">Salvar</button>
        </div>
    </div>
  </div>
</div>`