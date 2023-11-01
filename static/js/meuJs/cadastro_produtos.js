let modal_cad_produto  = document.getElementById("template_modal")
modal_cad_produto.innerHTML = `        
<div class="modal fade modal-xxl" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal_cadastro_produtos" data-backdrop="static">
  <div class="modal-dialog modal-lg  modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cadastro de Produtos</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="form_produtos">
                <div class="row">
                    <div class="form-floating mb-3 col-sm-3 pl-1" >
                        <input type="text" class="form-control" id="numero_pedido_identificador" placeholder="Id Produto" disabled>
                        <label for="preco">Id Produto</label>
                    </div>            
                    <div class="form-floating mb-2 col-sm-3 pl-1 ">
                        <input type="text" class="form-control" id="cod_barras" placeholder="Código de Barras">
                        <label for="cod_barras">Código de Barras</label>
                    </div>
                    <div class="form-floating col-sm-3 pl-1">
                        <input type="text" class="form-control" id="estoque" placeholder="Qtde Estoque">
                        <label for="estoque">Qtde Estoque</label>
                    </div>
                    <div class="form-check col-sm-2">
                        <label>
                        <input type="checkbox" class="form-check-input" id="disponivel" checked>
                        Disponível
                        <i class="input-helper"></i></label>
                    </div>
                    <div class="form-floating col-sm-4 pl-1 pr-1">
                        <input class="form-control" id="fornecedor_cnpj" aria-label="fornecedores" placeholder="CNPJ/CPF">
                        <label for="fornecedor_cnpj">CNPJ/CPF</label>
                    </div> 
                    <div class="form-floating mb-3 col-sm-4 pl-1 " id="modal_cadastra_fornecedores">
                        <input class="form-control" id="fornecedor_raz_soc" aria-label="fornecedores" placeholder="CNPJ/CPF">
                        <label for="fornecedor_raz_soc">Nome/Razão Social</label>
                    </div>

                    <div class="form-floating input-group mb-3 col-sm-4 pl-0 pr-1">
                        <input class="form-control" id="imagem_url" placeholder="Imagem_url" readonly>
                        <label for="imagem_url"></label>
                        <button class="btn btn-outline-primary mr-2" type="button" onclick="selecionarImagem()">+ Imagem</button>
                    </div>
                    <input type="file" id="inputImagem" style="display: none;">

                    <div class="form-floating mb-3 col-sm-3 pl-1 " data-toggle="tooltip" title="Insira seu primeiro nome">
                        <input type="text" class="form-control" id="nome" placeholder="Nome do produto">
                        <label for="nome">Nome Produto</label>
                    </div>  
                    <div class="form-floating col-sm-3 pl-1 mb-2 mt-0">
                        <textarea class="form-control" placeholder="Descrição do Produto" id="descricao"></textarea>
                        <label for="descricao">Descrição do Produto</label>
                    </div>    

                    <div class="form-floating mb-2 col-sm-3 pl-1 ">
                        <input type="text" class="form-control" id="preco" placeholder="Preço">
                        <label for="preco">Preço R$</label>
                    </div>
                
                    <div class="form-floating mb-3 col-sm-3 pl-1 pr-2" id="cadastro_categorias">
                        <select class="form-select" id="cmb_categorias" aria-label="cmb_categorias" placeholder="Categoria">
                        </select>
                        <label for="cmb_categorias">Categorias</label>
                    </div>

                    <div class="pl-1 col-sm-6 pl-1 col-sm-6 pl-1" id="cadastra_tamanho">
                        <div class="row  mb-3 mt-1 pr-1">
                            <div class="col-sm-12 input-group">
                                <select class="form-select" id="cmb_tamanho" aria-label="cmb_tamanho" placeholder=" ">
                                    <option selected>Tamanho</option>
                                </select>
                                <button class="btn btn-outline-primary mr-2" id="add_tamanho" type="button">+</button>
                            </div>
                            <div class="col-sm-12">
                                <table class="table center-aligned-table" id="tabela_contato">
                                <thead>
                                <tr class="text-primary">
                                    <th>Id</th>
                                    <th>Tamanho</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody id="row_prod_tamanho">
                                </tbody>
                                </table>
                            </div>    
                        </div>
                    </div> 

                    <div class="pr-3 col-sm-6 pl-1" id="cadastra_alergeno">
                        <div class="row mb-3 mt-1 ">
                            <div class="col-sm-12 input-group pr-1">
                                <select class="form-select" id="cmb_alergenos" aria-label="cmb_alergenos" placeholder=" ">
                                    <option selected>Tamanho</option>
                                </select>
                                <button class="btn btn-outline-primary mr-2" id="add_alergeno" type="button">+</button>
                            </div>
                            <div class="col-sm-12 ">
                                <table class="table center-aligned-table" id="tabela_contato">
                                <thead>
                                <tr class="text-primary">
                                    <th>Id</th>
                                    <th>Alergeno</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody id="row_prod_alergeno">
                                </tbody>
                                </table>
                            </div>    
                        </div>
                    </div>                 

                    <div class="form-floating mb-2 col-sm-4 pl-1 ">
                        <input type="text" class="form-control" id="tempo_preparo" placeholder="Tempo de preparo">
                        <label for="tempo_preparo">Tempo de preparo</label>
                    </div>

                    <div class="form-floating col-sm-4 pl-1">
                        <input type="text" class="form-control" id="restricoes_dieteticas" placeholder="Restrições Dietéticas">
                        <label for="restricoes_dieteticas">Restrições Dietéticas</label>
                    </div>
                    <div class="form-floating col-sm-4 pl-1">
                        <input type="text" class="form-control" id="sazonalidade" placeholder="Sazonalidade(Ex:Verão)">
                        <label for="sazonalidade">Sazonalidade(Ex:Verão)</label>
                    </div>
                    <div class="form-floating col-sm-6 mt-2 pl-1" >
                        <textarea class="form-control" placeholder="Receita/Instruções de Preparo" id="receita" rows="4"></textarea>
                        <label for="receita">Receita/Instruções de Preparo</label>
                    </div>
                    <div class="form-floating col-sm-6 mt-2 pl-1">
                        <textarea class="form-control" placeholder="Informações Nutricionais" id="informacoes_nutricionais"></textarea>
                        <label for="informacoes_nutricionais">Informações Nutricionais</label>
                    </div>
                </div>
            </div>
        </form>        
        <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Descartar</button>
            <button type="button" class="btn btn-outline-primary" id="btn_salvar_produtos">Salvar</button>
        </div>
    </div>
  </div>
</div>`