const listaDeCompras = [
    "Leite",
    "Ovos",
    "Pão",
    "Manteiga",
    "Frutas",
    "Legumes",
    "Arroz",
    "Feijão",
    "Carne",
    "Peixe"
]

console.log("Lista de Compras:");
listaDeCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});