#!/bin/bash
# ============================================================
# Atualização automática completa para Arch Linux
# Inclui: Pacman, AUR (yay), Flatpak, Snap e Pip3
# Autor: Rodrigo Santana
# ============================================================

# -------------------------------
# Configurações
# -------------------------------
LOG_FILE="$HOME/update_log_$(date +'%Y-%m-%d_%H-%M').log"

# Cores
RED='\033[1;31m'
GREEN='\033[1;32m'
BLUE='\033[1;34m'
RESET='\033[0m'

# -------------------------------
# Funções auxiliares
# -------------------------------
msg() {
    echo -e "${BLUE}==>${RESET} $1"
}

success() {
    echo -e "${GREEN}✔${RESET} $1"
}

error() {
    echo -e "${RED}✖${RESET} $1"
}

run_step() {
    msg "$1"
    if eval "$2" 2>&1 | tee -a "$LOG_FILE"; then
        success "$3"
    else
        error "Erro em: $1 (verifique o log em $LOG_FILE)"
    fi
    echo ""
}

# -------------------------------
# Execução
# -------------------------------
clear
echo "==================================================="
echo "     ATUALIZAÇÃO AUTOMÁTICA - ARCH LINUX           "
echo "==================================================="
echo "Log: $LOG_FILE"
echo ""

# Atualizar pacotes do sistema
run_step "Atualizando repositórios e pacotes (pacman)..." \
         "sudo pacman -Syu --noconfirm --needed" \
         "Pacotes do sistema atualizados com sucesso!"

# Atualizar pacotes AUR (yay)
if command -v yay &>/dev/null; then
    run_step "Atualizando pacotes AUR (yay)..." \
             "yay -Syu --noconfirm --needed" \
             "Pacotes AUR atualizados com sucesso!"
else
    error "yay não está instalado. Pulei esta etapa."
fi

# Atualizar pacotes Flatpak
if command -v flatpak &>/dev/null; then
    run_step "Atualizando pacotes Flatpak..." \
             "flatpak update -y" \
             "Flatpak atualizado com sucesso!"
else
    error "flatpak não está instalado. Pulei esta etapa."
fi

# Atualizar pacotes Snap
if command -v snap &>/dev/null; then
    run_step "Atualizando pacotes Snap..." \
             "sudo snap refresh" \
             "Snaps atualizados com sucesso!"
else
    error "snap não está instalado. Pulei esta etapa."
fi


# Limpeza automática de cache
msg "Limpando cache do sistema..."
{
    sudo pacman -Sc --noconfirm
    yay -Sc --noconfirm || true
    flatpak uninstall --unused -y || true
} 2>&1 | tee -a "$LOG_FILE"
success "Limpeza concluída!"

echo ""
echo "==================================================="
echo -e "${GREEN}Atualização completa com sucesso!${RESET}"
echo "Verifique o log em: $LOG_FILE"
echo "==================================================="
