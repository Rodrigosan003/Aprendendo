#!/usr/bin/env bash
# ----------------------------------------------------------
# SCRIPT EXEMPLO COMPLETO PARA ESTUDAR FUNDAMENTOS DO SHELL
# ----------------------------------------------------------

#############################################
# 1. VARIÁVEIS
#############################################

nome="Rodrigo"               # Variável simples
idade=25                     # Continua sendo string
arquivo="dados.txt"          # Nome de arquivo

echo "Olá, $nome! Sua idade registrada é: $idade"
echo

#############################################
# 2. COMANDOS INTERNOS E EXTERNOS
#############################################

echo "Tipo do comando 'cd' (interno):"
type cd                     # builtin
echo

echo "Tipo do comando 'ls' (externo):"
type ls                     # executável externo
echo

#############################################
# 3. REDIRECIONAMENTO DE SAÍDA E ERROS
#############################################

echo "Gerando um arquivo com uma lista do diretório..."
ls > $arquivo                # Redireciona stdout para arquivo

echo "Tentando acessar pasta inexistente..."
ls /pasta_que_nao_existe 2>> erros.log   # Redireciona erros
echo "Erros adicionados ao arquivo erros.log"
echo

#############################################
# 4. PIPE ( | )
#############################################

echo "Mostrando apenas arquivos .txt usando pipe:"
ls | grep ".txt"            # Saída de ls vai para grep
echo

#############################################
# 5. CONDICIONAIS
#############################################

echo "Verificando se você é maior de idade..."
if [ "$idade" -ge 18 ]; then
    echo "Você é maior de idade!"
else
    echo "Você é menor de idade."
fi
echo

#############################################
# 6. CASE
#############################################

dia="seg"

echo "Testando um case..."
case $dia in
    seg) echo "Hoje é segunda-feira!";;
    ter) echo "Hoje é terça-feira!";;
    qua) echo "Hoje é quarta-feira!";;
    *) echo "Dia inválido";;
esac
echo

#############################################
# 7. LOOPS -> FOR
#############################################

echo "Listando arquivos .sh no diretório atual:"
for f in *.sh; do
    echo " - $f"
done
echo

#############################################
# 8. LOOP -> WHILE
#############################################

echo "Contando até 3 usando while:"
contador=1

while [ $contador -le 3 ]; do
    echo "Contador: $contador"
    ((contador++))   # Incremento aritmético
done
echo

#############################################
# 9. EXIT CODE
#############################################

echo "Testando código de saída de um comando que funciona:"
ls > /dev/null
echo "Exit code do ls: $?"
echo

echo "Testando código de saída de um comando que falha:"
ls /nao_existe > /dev/null 2>&1
echo "Exit code do comando errado: $?"
echo

#############################################
# 10. USANDO O PATH PARA LOCALIZAR EXECUTÁVEIS
#############################################

echo "O comando 'grep' está em:"
which grep
echo

#############################################
# 11. LEITURA DE USUÁRIO (com read)
#############################################

echo -n "Digite um número qualquer: "
read numero

echo "Você digitou: $numero"
echo

#############################################
# 12. SUBSTITUIÇÃO DE COMANDO
#############################################

data=$(date +'%d/%m/%Y %H:%M:%S')
echo "Data atual: $data"
echo

#############################################
# FIM DO SCRIPT
#############################################
echo "Script executado com sucesso!"
echo "------------------------------"
