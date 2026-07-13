const body = document.body;

// Lista de classes possíveis
const classes = ['bg-azul', 'bg-vermelho', 'bg-verde'];

function trocaCor(classe) {
    // Remove classes anteriores
    classes.forEach(c => body.classList.remove(c));

    // Adiciona classe escolhida
    body.classList.add(classe);
}

document.getElementById('btnAzul').addEventListener('click', () => trocaCor('bg-azul'));
document.getElementById('btnVermelho').addEventListener('click', () => trocaCor('bg-vermelho'));
document.getElementById('btnVerde').addEventListener('click', () => trocaCor('bg-verde'));
