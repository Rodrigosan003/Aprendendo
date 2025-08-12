"use strict";
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(2, 3));
function novoUser(user, pass, nome) {
    console.log(`Usuário: ${user}, Senha: ${pass}, Nome: ${nome}`);
}
novoUser("joao", "123456");
novoUser("maria", "abcdef", "Maria Silva");
