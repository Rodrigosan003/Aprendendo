#!/usr/bin/env bash
# EX04 - Crie um script que informe se um número é par ou ímpar.
echo "Digite um número:"
read numero
# Verifica se o número é par ou ímpar usando o operador de módulo
if (( numero % 2 == 0 )); then
    echo "O número $numero é par."
else
    echo "O número $numero é ímpar."
fi
