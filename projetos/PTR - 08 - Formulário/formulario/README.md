# 📬 Formulário de Contato com HTML, CSS, JS e Node.js

Este projeto implementa um **formulário de contato funcional**, capaz de
enviar e-mails utilizando:

-   **HTML/CSS/JavaScript** no front-end\
-   **Node.js + Express + Nodemailer** no back-end

Ideal para landing pages, portfólios e sites pessoais.

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    meu-formulario/
    │
    ├── server.js           # Back-end Node.js
    ├── .env                # Variáveis de ambiente (email e senha)
    └── public/
        ├── index.html      # Formulário
        ├── style.css       # Estilos
        └── script.js       # Lógica do front-end

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

### **Front-end**

-   HTML5\
-   CSS3\
-   JavaScript (fetch API)

### **Back-end**

-   Node.js\
-   Express\
-   Nodemailer\
-   Dotenv

------------------------------------------------------------------------

## 🛠️ Instalação e Configuração

### 1️⃣ Clone o repositório

``` sh
git clone https://github.com/seu-usuario/meu-formulario.git
cd meu-formulario
```

### 2️⃣ Instale as dependências

``` sh
npm install
```

### 3️⃣ Configure o arquivo `.env`

Crie o arquivo `.env` na raiz:

    EMAIL_USER=seuemail@gmail.com
    EMAIL_PASS=sua_senha_de_app

⚠️ Se usar Gmail, você deve gerar uma **senha de app**.

### 4️⃣ Inicie o servidor

``` sh
node server.js
```

Acesse: `http://localhost:3000`

------------------------------------------------------------------------

## 📧 Como funciona o envio de e-mail

-   O front-end envia os dados via **POST** para `/send-email`
-   O back-end processa usando **Nodemailer**
-   O servidor retorna um status ao navegador

------------------------------------------------------------------------

## ✔️ Funcionalidades

-   Envio real de e-mails\
-   Feedback de envio no front-end\
-   Código simples e organizado\
-   Fácil de integrar em qualquer site

------------------------------------------------------------------------

## 📌 Melhorias Futuras

-   Validação mais completa\
-   reCAPTCHA\
-   Interface aprimorada\
-   Armazenar mensagens em banco de dados

------------------------------------------------------------------------

## 📄 Licença

Projeto sob licença **MIT**.
