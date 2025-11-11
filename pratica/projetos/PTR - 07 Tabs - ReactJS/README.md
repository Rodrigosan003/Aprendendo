# PTR - 07 Tabs (React)

Versão convertida para React + Vite do projeto de abas/scroll.

Como rodar

1. Instale dependências:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

Isso irá iniciar o Vite e abrir o projeto (por padrão em http://localhost:5173).

Notas

- O CSS original foi mantido em `assets/css/style.css` e é importado em `src/main.jsx`.
- As imagens permanecem em `assets/images/` e são referenciadas via caminhos absolutos como `/assets/images/...`.
- O comportamento de destaque da aba (InterectionObserver) e scroll suave foi migrado para React em `src/App.jsx`.

Ajustes adicionais realizados

- Arquivei o script JS original em `assets/js/script.legacy.js` e removi o `assets/js/script.js` porque a lógica foi migrada para React.
- Melhorei a acessibilidade adicionando `aria-label` na navegação e `aria-current` nos botões de navegação ativos.
- Adicionei o script `npm start` (executa Vite) para conveniência.


# Tabs

## Tabs Interativas

### Sobre:

    Praticando conceitos de interação de usuário onde cada tab de menu exibe a página sem scrool de mouse.

---

### Visualisação:

![site](./assets/images/tabs.png)

### Tecnologias

- ReactJS
