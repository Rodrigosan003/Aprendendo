"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("Canal 1", "Curso 1");
console.log(c1.canal);
console.log(c1.curso);
