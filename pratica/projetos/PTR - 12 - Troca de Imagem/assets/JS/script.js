// Obter referências aos elementos
const imagem = document.getElementById('imagem');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

// Definir caminhos das imagens
const imagens = {
    btn1: 'assets/images/img1.jpg',
    btn2: 'assets/images/img2.jpg',
    btn3: 'assets/images/img3.jpg'
};

// Adicionar eventos de clique aos botões
btn1.addEventListener('click', () => {
    imagem.src = imagens.btn1;
    imagem.alt = 'Imagem 1';
});

btn2.addEventListener('click', () => {
    imagem.src = imagens.btn2;
    imagem.alt = 'Imagem 2';
});

btn3.addEventListener('click', () => {
    imagem.src = imagens.btn3;
    imagem.alt = 'Imagem 3';
});

