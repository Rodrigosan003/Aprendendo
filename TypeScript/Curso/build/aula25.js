"use strict";
class Conta {
    _saldo;
    constructor() {
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(novoSaldo) {
        if (novoSaldo >= 0) {
            this._saldo = novoSaldo;
        }
        else {
            console.log("Erro: O saldo não pode ser negativo.");
        }
    }
}
const minhaConta = new Conta();
minhaConta.saldo = 1000.5;
console.log("Saldo atual: " + minhaConta.saldo);
