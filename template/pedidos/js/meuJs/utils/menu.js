document.addEventListener('DOMContentLoaded',()=>{
    gera_menu()
})

const gera_menu = ()=>{
    var div_sidebar = document.getElementById("sidebar");
      div_sidebar.innerHTML = `

      <div class="custom-menu fab">
        <button type="button" id="sidebarCollapse" class="bg-primary" >
        <i class="fa fa-bars"></i>
        <span class="sr-only">Toggle Menu</span>
        </button>
      </div>
      <h1><a href="index.html" class="logo">MesaDigital</a></h1>
      <ul class="list-unstyled components mb-5">
        <li class="active">
        <a href="#"><span class="fa fa-home mr-3"></span> Homepage</a>
        </li>
        <li>
            <a href="#"><span class="fa fa-user mr-3"></span> Dashboard</a>
        </li>
        <li>
        <a href="#"><span class="fa fa-sticky-note mr-3"></span> Friends</a>
        </li>
        <li>
        <a href="#"><span class="fa fa-sticky-note mr-3"></span> Subcription</a>
        </li>
        <li>
        <a href="#"><span class="fa fa-paper-plane mr-3"></span> Settings</a>
        </li>
        <li>
        <a href="#"><span class="fa fa-paper-plane mr-3"></span> Information</a>
        </li>
      </ul>
      `
    // Initialize Bootstrap components
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

}


