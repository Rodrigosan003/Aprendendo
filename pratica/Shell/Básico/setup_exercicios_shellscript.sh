#!/usr/bin/env bash

# Script para criar estrutura de exercícios de Shell Script
# Níveis: basico, medio, avancado
# Cada nível conterá ex01.sh até ex10.sh com as questões comentadas.

set -e

# Criar diretórios
mkdir -p basico medio avancado

############################
# ===== NÍVEL BÁSICO ===== #
############################

cat > basico/ex01.sh << 'EOF'
#!/usr/bin/env bash
# EX01 - Crie um script que exiba a mensagem: "Olá, mundo!"
EOF

cat > basico/ex02.sh << 'EOF'
#!/usr/bin/env bash
# EX02 - Crie um script que peça o nome do usuário e exiba: "Olá, <nome>!"
EOF

cat > basico/ex03.sh << 'EOF'
#!/usr/bin/env bash
# EX03 - Crie um script que receba dois números e mostre a soma.
EOF

cat > basico/ex04.sh << 'EOF'
#!/usr/bin/env bash
# EX04 - Crie um script que informe se um número é par ou ímpar.
EOF

cat > basico/ex05.sh << 'EOF'
#!/usr/bin/env bash
# EX05 - Crie um script que mostre todos os arquivos do diretório atual.
EOF

cat > basico/ex06.sh << 'EOF'
#!/usr/bin/env bash
# EX06 - Crie um script que verifique se um arquivo existe.
EOF

cat > basico/ex07.sh << 'EOF'
#!/usr/bin/env bash
# EX07 - Crie um script que mostre a data e hora atuais.
EOF

cat > basico/ex08.sh << 'EOF'
#!/usr/bin/env bash
# EX08 - Crie um script que conte de 1 até 10 usando for.
EOF

cat > basico/ex09.sh << 'EOF'
#!/usr/bin/env bash
# EX09 - Crie um script que use while para contar de 10 até 1.
EOF

cat > basico/ex10.sh << 'EOF'
#!/usr/bin/env bash
# EX10 - Crie um script que receba um argumento e exiba ele na tela.
EOF

############################
# ===== NÍVEL MÉDIO ====== #
############################

cat > medio/ex01.sh << 'EOF'
#!/usr/bin/env bash
# EX01 - Crie um script que calcule a média de 3 números.
EOF

cat > medio/ex02.sh << 'EOF'
#!/usr/bin/env bash
# EX02 - Crie um menu interativo com 3 opções usando case.
EOF

cat > medio/ex03.sh << 'EOF'
#!/usr/bin/env bash
# EX03 - Crie um script que conte quantas linhas tem um arquivo passado como argumento.
EOF

cat > medio/ex04.sh << 'EOF'
#!/usr/bin/env bash
# EX04 - Crie um script que faça backup de um arquivo adicionando a data no nome.
EOF

cat > medio/ex05.sh << 'EOF'
#!/usr/bin/env bash
# EX05 - Crie um script que verifique uso de CPU e mostre alerta se passar de 80%.
EOF

cat > medio/ex06.sh << 'EOF'
#!/usr/bin/env bash
# EX06 - Crie um script que liste apenas arquivos .txt do diretório atual.
EOF

cat > medio/ex07.sh << 'EOF'
#!/usr/bin/env bash
# EX07 - Crie um script que valide se o usuário é root.
EOF

cat > medio/ex08.sh << 'EOF'
#!/usr/bin/env bash
# EX08 - Crie um script que leia um arquivo linha por linha.
EOF

cat > medio/ex09.sh << 'EOF'
#!/usr/bin/env bash
# EX09 - Crie um script que receba vários argumentos e mostre quantos foram passados.
EOF

cat > medio/ex10.sh << 'EOF'
#!/usr/bin/env bash
# EX10 - Crie um script que compacte todos os arquivos .log em um .tar.gz.
EOF

############################
# ===== NÍVEL AVANÇADO ==== #
############################

cat > avancado/ex01.sh << 'EOF'
#!/usr/bin/env bash
# EX01 - Crie um script que monitore um diretório e registre alterações em um log.
EOF

cat > avancado/ex02.sh << 'EOF'
#!/usr/bin/env bash
# EX02 - Crie um script que implemente um sistema simples de login com usuário e senha armazenados em arquivo.
EOF

cat > avancado/ex03.sh << 'EOF'
#!/usr/bin/env bash
# EX03 - Crie um script que consuma uma API usando curl e trate o JSON retornado.
EOF

cat > avancado/ex04.sh << 'EOF'
#!/usr/bin/env bash
# EX04 - Crie um script que gerencie usuários (criar/remover) usando funções.
EOF

cat > avancado/ex05.sh << 'EOF'
#!/usr/bin/env bash
# EX05 - Crie um script que implemente logs com níveis (INFO, WARNING, ERROR).
EOF

cat > avancado/ex06.sh << 'EOF'
#!/usr/bin/env bash
# EX06 - Crie um script que execute tarefas em paralelo e aguarde todas finalizarem.
EOF

cat > avancado/ex07.sh << 'EOF'
#!/usr/bin/env bash
# EX07 - Crie um script que faça parsing de argumentos com getopts.
EOF

cat > avancado/ex08.sh << 'EOF'
#!/usr/bin/env bash
# EX08 - Crie um script que detecte o sistema operacional e adapte o comportamento.
EOF

cat > avancado/ex09.sh << 'EOF'
#!/usr/bin/env bash
# EX09 - Crie um script que monitore uso de memória e gere relatório em arquivo.
EOF

cat > avancado/ex10.sh << 'EOF'
#!/usr/bin/env bash
# EX10 - Crie um script estilo mini-framework com funções reutilizáveis.
EOF

# Tornar todos executáveis
chmod +x basico/*.sh medio/*.sh avancado/*.sh

echo "Estrutura de exercícios criada com sucesso!"
