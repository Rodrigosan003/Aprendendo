#!/bin/bash

echo "🎮 Instalador de Jogos de Terminal - Ubuntu"
echo "=========================================="
echo

# Atualiza lista de pacotes
sudo apt update

# Lista de pacotes
PACOTES=(
    whiptail
    nsnake
    nudoku
    greed
    moon-buggy
    pacman4console
    bastet
    nethack-console
    robotfindskitten
    bsdgames
)

echo "📦 Instalando jogos..."
echo

# Instala pacotes principais
sudo apt install -y "${PACOTES[@]}"

echo
echo "🧩 Tentando instalar o jogo 2048 (terminal)..."

# 2048 não é garantido em todos os repositórios
if apt-cache show 2048 &> /dev/null; then
    sudo apt install -y 2048
    echo "✅ 2048 instalado"
else
    echo "⚠️ Pacote '2048' não encontrado nos repositórios oficiais."
    echo "   Alternativas:"
    echo "   - 2048-qt (versão gráfica)"
    echo "   - 2048.c (compilando do GitHub)"
fi

echo
echo "✅ Instalação finalizada!"
echo
echo "🎮 Jogos instalados:"
echo " - nsnake"
echo " - nudoku"
echo " - greed"
echo " - moon-buggy"
echo " - pacman4console"
echo " - bastet"
echo " - nethack"
echo " - robotfindskitten"
echo " - bsdgames"
echo
echo "🚀 Agora é só rodar seu menu de jogos!"

