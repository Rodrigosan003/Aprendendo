const calcular = document.getElementById("calcular");

// 1. Captura os dados do formulário
function obterDadosDoFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  return { nome, altura, peso };
}

// 2. Calcula o IMC
function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(1);
}

// 3. Classifica o IMC
function classificarIMC(imc) {
  if (imc < 18.5) {
    return "abaixo do peso.";
  } else if (imc < 25) {
    return "com o peso ideal. Parabéns!!!";
  } else if (imc < 30) {
    return "levemente acima do peso.";
  } else if (imc < 35) {
    return "com obesidade grau I.";
  } else if (imc < 40) {
    return "com obesidade grau II.";
  } else {
    return "com obesidade grau III. Cuidadooooo!!!";
  }
}

// 4. Mostra o resultado
function mostrarResultado(mensagem) {
  const resultado = document.getElementById("resultado");
  resultado.textContent = mensagem;
}

// 5. Função principal que organiza o fluxo
function processarIMC() {
  const { nome, altura, peso } = obterDadosDoFormulario();

  if (nome && altura && peso) {
    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);
    const mensagem = `${nome}, seu IMC é: ${imc}. Você está ${classificacao}`;
    mostrarResultado(mensagem);
  } else {
    mostrarResultado("Preencha todos os campos!!!");
  }
}

// Evento ao clicar no botão
calcular.addEventListener("click", processarIMC);

