#!/usr/bin/env bash
# EX03 - Crie um script que receba dois números e mostre a soma.
# Solicita o primeiro número ao usuário
echo "Digite o primeiro número:"
read num1
# Solicita o segundo número ao usuário
echo "Digite o segundo número:"
read num2
# Calcula a soma dos dois números
soma=$((num1 + num2))
# Exibe o resultado da soma
echo "A soma de $num1 e $num2 é: $soma"