"use strict";
function soma(v1, v2, v3) {
    return v1 + v2 + v3;
}
console.log(soma(10, 25, 30));
function somaVarios(...numeros) {
    return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
console.log(somaVarios(10, 25, 30, 40, 50, 60, 70, 80, 90, 100));
function soma(...n) {
    let s = 0;
    n.forEach((en) => {
        s += en;
    });
    return s;
}
console.log(soma(10, 25, 30));
