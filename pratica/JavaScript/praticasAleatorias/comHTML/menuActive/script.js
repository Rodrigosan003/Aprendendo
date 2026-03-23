let links = document.querySelectorAll("nav a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        
        // remove de todos
        links.forEach((l) => l.classList.remove("active"));

        // adiciona no clicado
        link.classList.add("active");
    });
});

