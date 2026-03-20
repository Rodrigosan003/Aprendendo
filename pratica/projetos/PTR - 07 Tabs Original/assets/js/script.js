// Seleciona todas as seções e os botões do header
const sections = document.querySelectorAll("main section");
const navButtons = document.querySelectorAll(".nav-btn");

// Cria o observador que detecta qual section está visível
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      // Encontra o botão cujo link interno aponta para essa section
      const activeButton = document.querySelector(
        `.nav-btn a[href="#${id}"]`
      )?.parentElement;

      if (entry.isIntersecting) {
        // Remove 'active' de todos e adiciona no botão correspondente
        navButtons.forEach((btn) => btn.classList.remove("active"));
        if (activeButton) activeButton.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6, // 60% visível = ativa
  }
);

// Observa todas as sections
sections.forEach((section) => observer.observe(section));

// Faz o scroll suave ao clicar no botão
navButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = btn.querySelector("a").getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
