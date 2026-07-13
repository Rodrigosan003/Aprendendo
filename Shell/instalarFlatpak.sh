#!/bin/bash

# ================================================
# Script de instalação de múltiplos Flatpaks
# Autor: Rodrigo Santana (você 😁)
# ================================================

# Lista de programas que você quer instalar
PROGRAMAS=(
	#programas para serem instalados
)

# ================================================
# Funções auxiliares
# ================================================

# Checa se Flatpak está instalado
verificar_flatpak() {
  if ! command -v flatpak &>/dev/null; then
    echo "Flatpak não está instalado. Deseja instalar? [s/n]"
    read -r resposta
    if [[ "$resposta" == "s" || "$resposta" == "S" ]]; then
      sudo apt install -y flatpak || sudo dnf install -y flatpak || sudo pacman -S --noconfirm flatpak
    else
      echo "Instalação abortada."
      exit 1
    fi
  fi
}

# Adiciona o repositório Flathub se necessário
adicionar_flathub() {
  if ! flatpak remote-list | grep -q flathub; then
    echo "Adicionando repositório Flathub..."
    sudo flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
  fi
}

# Instala os programas
instalar_programas() {
  echo "Iniciando instalação dos programas..."
  for prog in "${PROGRAMAS[@]}"; do
    echo "----------------------------------------------------"
    echo "Instalando: $prog"
    echo "----------------------------------------------------"
    flatpak install -y flathub "$prog"
  done
  echo "✅ Instalação concluída!"
}

# ================================================
# Execução do script
# ================================================
verificar_flatpak
adicionar_flathub
instalar_programas
