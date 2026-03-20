document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  const status = document.getElementById('status');
  status.textContent = "Enviando...";

  const resposta = await fetch('/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, mensagem })
  });

  const resultado = await resposta.json();

  status.textContent = resultado.message;
});
