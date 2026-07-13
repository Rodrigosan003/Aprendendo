# Ideias de JavaScript para a página de links

## 1. Gerar links dinamicamente
- Use um array de objetos com `title`, `url`, `category` e `description`
- Renderize os cards de link com JavaScript dentro de `.container`
- Facilita adicionar ou editar links sem mexer no HTML direto

## 2. Modo claro/escuro com `localStorage`
- Troque classes `dark`/`light` no `body`
- Salve a preferência do usuário no `localStorage`
- Na próxima visita o site carrega no tema escolhido

## 3. Busca e filtro de links
- Adicione um campo de pesquisa
- Filtre os links por título, descrição ou categoria
- Exiba apenas os resultados correspondentes

## 4. Favoritos e organização
- Permita marcar um link como favorito (ícone de estrela)
- Salve a lista de favoritos no `localStorage`
- Mostre favoritos primeiro ou crie uma seção separada

## 5. Contagem de cliques / links mais acessados
- Conte quantas vezes cada link é clicado
- Mostre uma lista de “Mais visitados”
- Use `localStorage` para persistir os dados localmente

## 6. Botão de copiar link
- Adicione um botão “copiar” em cada card
- Use `navigator.clipboard.writeText(url)` para copiar a URL
- Exiba uma mensagem breve de confirmação

## 7. Animações e transições
- Use animações de fade-in para cards ao carregar
- Adicione transições suaves em hover e troca de tema
- Deixa a interface mais agradável e moderna

## 8. Categorias colapsáveis
- Agrupe links por categoria (por exemplo, “Estudos”, “Ferramentas”)
- Permita abrir/fechar cada categoria com JS
- Facilita encontrar links em grandes listas

## 9. Carregar links de um JSON externo
- Guarde os links em `links.json`
- Use `fetch()` para carregar os dados dinamicamente
- Separar dados da apresentação deixa o projeto mais organizado

## 10. Teclas de atalho
- Adicione atalhos como `Ctrl+K` para focar a busca
- `L` pode alternar entre claro e escuro
- Melhora a experiência para quem usa teclado

## Funções úteis para anotar
- `renderLinks()`
- `toggleTheme()`
- `saveThemePreference()`
- `filterLinks(query)`
- `toggleFavorite(linkId)`
- `copyToClipboard(url)`
- `loadLinksFromJSON()`
