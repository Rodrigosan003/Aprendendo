const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("emailForm");
const message = document.getElementById("message");

// Função para validar e-mail usando regex
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Habilitar ou desabilitar o botão conforme a digitação
emailInput.addEventListener("input", () => {
  const emailValido = validarEmail(emailInput.value);

  if (emailValido) {
    submitBtn.disabled = false;
    message.textContent = "";
  } else {
    submitBtn.disabled = true;
    message.textContent = "Digite um e-mail válido.";
    message.classList.remove("success");
  }
});

// Envio do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (validarEmail(email)) {
    message.textContent = "Por favor, insira um e-mail válido.";
    message.classList.remove("success");
    return;
  }

  //   Ativar estado de carregamento do botão
  submitBtn.textContent = "Enviando...";
  submitBtn.disabled = true;

  // Simular um "Envio" com atraso
  setTimeout(() => {
    message.textContent = "E-mail enviado com sucesso!";
    message.classList.add("success");
    emailInput.value = "";
    submitBtn.textContent = "Enviar";
    submitBtn.disabled = true;
  }, 1500);
});
