"use strict";
class ExemploPublico {
    nome = "Público";
}
let objPublico = new ExemploPublico();
console.log(objPublico.nome);
class ExemploPrivado {
    mensagem = "Privado";
    mostrarMensagem() {
        console.log(this.mensagem);
    }
}
let objPrivado = new ExemploPrivado();
class ClassePai {
    dados = "Pai";
}
class ClasseFilha extends ClassePai {
    mostrarDados() {
        console.log(this.dados);
    }
}
let objFilho = new ClasseFilha();
objFilho.mostrarDados();
class ExemploReadonly {
    id;
    constructor(id) {
        this.id = id;
    }
}
let objReadonly = new ExemploReadonly(123);
