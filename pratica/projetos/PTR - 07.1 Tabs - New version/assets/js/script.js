// Seleciona seções e botões do menu
const sections = document.querySelectorAll("main section");
const navButtons = document.querySelectorAll(".nav-btn");

// Função para ativar uma section e desativar as outras
function showSection(id) {
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.add("active-section");
    } else {
      section.classList.remove("active-section");
    }
  });
}

// Clique no menu
navButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Destacar botão ativo
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Pegar ID da seção
    const targetId = btn.querySelector("a").getAttribute("href").substring(1);

    // Mostrar a seção com efeito suave
    showSection(targetId);
  });
});

// Ao carregar, mostrar apenas "home"
showSection("home");
