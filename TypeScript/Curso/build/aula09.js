"use strict";
var dias;
(function (dias) {
    dias[dias["DOMINGO"] = 0] = "DOMINGO";
    dias[dias["SEGUNDA"] = 1] = "SEGUNDA";
    dias[dias["TERCA"] = 2] = "TERCA";
    dias[dias["QUARTA"] = 3] = "QUARTA";
    dias[dias["QUINTA"] = 4] = "QUINTA";
    dias[dias["SEXTA"] = 5] = "SEXTA";
    dias[dias["SABADO"] = 6] = "SABADO";
})(dias || (dias = {}));
console.log(dias.DOMINGO);
console.log(dias.SEGUNDA);
console.log(dias[2]);
const d = new Date();
const diaDaSemana = d.getDay();
console.log(diaDaSemana);
