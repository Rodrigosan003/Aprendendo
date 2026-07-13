let pessoa = {
    nome: "Rodrigo",
    idade: 35,
    profissao: "Desenvolvedor",
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e trabalho como " + this.profissao + ".");
    }
};
pessoa.saudacao(); 