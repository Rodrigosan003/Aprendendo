// Inputs
let first = document.getElementById("first");
let second = document.getElementById("second");

// Operação
let adicao = document.getElementById("adicao");
let subtracao = document.getElementById("subtracao");
let multiplicacao = document.getElementById("multiplicacao");
let divisao = document.getElementById("divisao");

// Ação
let limpar = document.getElementById("limpar");
let igual = document.getElementById("igual");

let res = document.getElementById("res");

// Variável para armazenar a operação selecionada
let operacaoSelecionada = null;

// Função para remover a classe active de todos os botões de operação
function removerAtivacao() {
    adicao.classList.remove("active");
    subtracao.classList.remove("active");
    multiplicacao.classList.remove("active");
    divisao.classList.remove("active");
}

// Event listeners para os botões de operação
adicao.addEventListener("click", function(event) {
    event.preventDefault();
    removerAtivacao();
    adicao.classList.add("active");
    operacaoSelecionada = "+";
});

subtracao.addEventListener("click", function(event) {
    event.preventDefault();
    removerAtivacao();
    subtracao.classList.add("active");
    operacaoSelecionada = "-";
});

multiplicacao.addEventListener("click", function(event) {
    event.preventDefault();
    removerAtivacao();
    multiplicacao.classList.add("active");
    operacaoSelecionada = "*";
});

divisao.addEventListener("click", function(event) {
    event.preventDefault();
    removerAtivacao();
    divisao.classList.add("active");
    operacaoSelecionada = "/";
});

// Event listener para o botão igual
igual.addEventListener("click", function(event) {
    event.preventDefault();
    let num1 = parseFloat(first.value);
    let num2 = parseFloat(second.value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        res.textContent = "Por favor, insira números válidos.";
        return;
    }

    switch (operacaoSelecionada) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                res.textContent = "Erro: Divisão por zero.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            res.textContent = "Selecione uma operação.";
            return;
    }

    res.textContent = resultado;
});

// Event listener para o botão limpar
limpar.addEventListener("click", function(event) {
    event.preventDefault();
    first.value = "";
    second.value = "";
    res.textContent = "Resposta";
    removerAtivacao();
    operacaoSelecionada = null;
});










