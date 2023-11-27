const btn_subtrai_qtde = (elemento)=>{
    var dataId = elemento.getAttribute("data-id");
    let qtde = document.getElementById("inpt_qtde"+dataId)
  
    if(parseInt(qtde.value)>0){
      qtde.value-=1
    }
  }
  
  const btn_add_qtde = (elemento)=>{
    var dataId = elemento.getAttribute("data-id");
    let qtde = document.getElementById("inpt_qtde"+dataId)
    qtde.value = 1 + parseInt(qtde.value)
    
  }

  
  const abrir_modal_gera_pedidos = (element)=>{
    var dataId = element.getAttribute("data-id");
  
    gera_linhas_produtos(dataId)
  
    var myModal = new bootstrap.Modal(document.getElementById('modal_gera_pedidos'));
    myModal.show();
  }

  const abrir_modal_gera_pedidos_codigo_produto = (element)=>{
    // var dataId = element.getAttribute("data-id");
  
    // gera_linhas_produtos(dataId)
  
    var myModal = new bootstrap.Modal(document.getElementById('modal_gera_pedidos_codigo_produtos'));
    myModal.show();
  }

  

