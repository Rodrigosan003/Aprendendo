#!/bin/bash
# Script de atualização de pacotes APT e Flatpak com limpeza

echo "=============================="
echo " Iniciando atualização do APT "
echo "=============================="
sudo apt update && sudo apt upgrade -y

echo ""
echo "=============================="
echo " Atualizando Flatpak           "
echo "=============================="
flatpak update -y

echo ""
echo "=============================="
echo " Limpando pacotes antigos      "
echo "=============================="
sudo apt autoremove -y && sudo apt autoclean -y

echo ""
echo "=============================="
echo " Atualização concluída!        "
echo "=============================="
