let pessoa = {
  nome: "Rodrigo",
  idade: 25,
  cidade: "SP"
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}