const inpt_contato = document.getElementById('contato');

inpt_contato.addEventListener('input', (event) => {
    const selectedOption = select_tipo_contato.value;
    if (selectedOption === "Telefone" || selectedOption === "Whatsapp" || selectedOption === "Telegram") {
        let telefone = event.target.value.replace(/\D+/g, "");
        let tamanho = telefone.length;

        if (tamanho > 0) {
            telefone = "(" + telefone;

            if (tamanho > 2) {
                telefone = telefone.slice(0, 3) + ") " + telefone.slice(3);
            }
            if (tamanho > 7) {
                telefone = telefone.slice(0, 9) + "-" + telefone.slice(9);
            }
            if (tamanho > 13) {
                telefone = telefone.substring(0, 14);
            }
        }
        event.target.value = telefone;
    }
});
