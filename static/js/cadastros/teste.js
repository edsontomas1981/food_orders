let btn_teste = document.getElementById("teste"); 

btn_teste.addEventListener("click", async ()=> {
    alert("Olá mundo!")

    let con = new Conn('/produtos/fornecedor/create/',{})

    let result = await con.sendPostRequest()

    console.log(result)
    }
);
