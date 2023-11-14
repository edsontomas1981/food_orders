const carrega_navbar = ()=>{
	let navbar = document.getElementById("template_navbar")
	navbar.innerHTML = html_navbar()
}

const html_navbar= ()=>{
	return `
      <div class="navbar-menu-wrapper d-flex align-items-center ">
        <ul class="navbar-nav ml-lg-auto d-flex align-items-center flex-row">
          <li class="nav-item">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              Button with data-bs-target
            </button>
          </li>
          <li class="nav-item">
            <form class="form-inline mt-2 mt-md-0 d-none d-lg-block">
              <input class="form-control mr-sm-2 search" type="text" placeholder="Search">
            </form>
          </li>

          <li class="nav-item">
            <a class="nav-link profile-pic" href="#"><img class="rounded-circle" src="../static/images/face.jpg" alt=""></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-th"></i></a>
          </li>
        </ul>
      </div>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul class="nav">
  <li class="nav-item active" >
    <a class="nav-link" data-toggle="collapse" href="#cadastros" aria-expanded="true" aria-controls="cadastros">
      <img src="../static/images/icons/005-forms.png" alt="">
      <span class="menu-title">Cadastros<i class="fa fa-sort-down"></i></span>
    </a>
    <div class="collapse" id="cadastros">
        <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" data-toggle="modal" data-target="#modal_cadastro_produtos" >
                Produtos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="modal" data-target="#modal_cadastro_fornecedores" >
                Fornecedores
              </a>
            </li>                  
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/widgets.html">
          <img src="../static/images/icons/2.png" alt="">
          <span class="menu-title">Widgets</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/forms/index.html">
          <img src="../static/images/icons/005-forms.png" alt="">
          <span class="menu-title">Forms</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/ui-elements/buttons.html">
          <img src="../static/images/icons/4.png" alt="">
          <span class="menu-title">Buttons</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/tables/index.html">
          <img src="../static/images/icons/5.png" alt="">
          <span class="menu-title">Tables</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../static/pages/charts/index.html">
          <img src="../static/images/icons/6.png" alt="">
          <span class="menu-title">Charts</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../static/pages/icons/index.html">
          <img src="../static/images/icons/7.png" alt="">
          <span class="menu-title">Icons</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pages/ui-elements/typography.html">
          <img src="../static/images/icons/8.png" alt="">
          <span class="menu-title">Typography</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#sample-pages" aria-expanded="false" aria-controls="sample-pages">
          <img src="../static/images/icons/9.png" alt="">
          <span class="menu-title">Sample Pages<i class="fa fa-sort-down"></i></span>
        </a>
        <div class="collapse" id="sample-pages">
          <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <a class="nav-link" href="pages/samples/blank_page.html">
                    Blank Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/samples/login.html">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/samples/register.html">
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/samples/404.html">
                    404
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pages/samples/500.html">
                    500
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="../static/images/icons/10.png" alt="">
              <span class="menu-title">Settings</span>
            </a>
          </li>
        </ul>
  </div>
</div>`
}

carrega_navbar();