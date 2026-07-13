#!/bin/bash

echo "🎮 Instalador de Jogos de Terminal - Manjaro"
echo "==========================================="
echo

# Atualiza o sistema
sudo pacman -Syu --noconfirm

# Lista de pacotes dos repositórios oficiais
PACOTES=(
    whiptail
    nsnake
    nudoku
    greed
    moon-buggy
    pacman4console
    bastet
    nethack
    robotfindskitten
    bsd-games
)

echo "📦 Instalando jogos..."
echo

sudo pacman -S --noconfirm --needed "${PACOTES[@]}"

echo
echo "🧩 Tentando instalar o jogo 2048 (terminal)..."

# Verifica se existe nos repositórios oficiais
if pacman -Ss "^2048$" | grep -q "2048"; then
    sudo pacman -S --noconfirm --needed 2048
    echo "✅ 2048 instalado (repositório oficial)"
else
    echo "⚠️ Pacote '2048' não encontrado nos repositórios oficiais."
    echo
    echo "💡 Tentando instalar via AUR (necessita yay)..."

    if command -v yay &> /dev/null; then
        yay -S --noconfirm 2048
        echo "✅ 2048 instalado via AUR"
    else
        echo "❌ yay não está instalado."
        echo "   Instale um helper AUR (ex: yay) para instalar o 2048."
    fi
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
echo " - bsd-games"
echo
echo "🚀 Agora é só rodar seu menu de jogos!"
