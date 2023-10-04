const inputImagem = document.getElementById('inputImagem');
const campoImagem = document.getElementById('imagem');

function selecionarImagem() {
    inputImagem.click();
}

inputImagem.addEventListener('change', () => {
    const arquivo = inputImagem.files[0];
    if (arquivo) {
        campoImagem.value = arquivo.name;
        // Você pode adicionar aqui código para exibir a imagem ou fazer upload dela.
    } else {
        campoImagem.value = '';
    }
});