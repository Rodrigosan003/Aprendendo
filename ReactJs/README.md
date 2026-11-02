# Roadmap de Estudos --- React.js

> **Objetivo:** aprender React.js de forma progressiva, construindo
> projetos e entendendo os fundamentos antes de avançar.
>
> **Como usar:** marque cada caixa `- [ ]` quando concluir o assunto ou
> exercício. Tente explicar o conceito com suas próprias palavras e
> pratique no código, sem apenas copiar soluções.

------------------------------------------------------------------------

## Antes de começar --- Pré-requisitos

É recomendável ter familiaridade com:

-   [ ] HTML semântico e estrutura de páginas
-   [ ] CSS: seletores, flexbox, grid e responsividade
-   [ ] JavaScript moderno (ES6+): `let`, `const`, arrow functions e
    template literals
-   [ ] Arrays e objetos
-   [ ] Métodos de array: `map`, `filter`, `find`, `reduce` e `forEach`
-   [ ] Desestruturação, spread/rest e módulos (`import` / `export`)
-   [ ] Promises, `async` / `await` e consumo de APIs com `fetch`
-   [ ] Git e GitHub: commits, branches e repositórios

------------------------------------------------------------------------

# 1. Nível básico

**Meta:** entender como o React funciona e criar interfaces pequenas com
componentes, propriedades, estado e eventos.

## 1.1 Fundamentos do React

-   [ ] O que é React.js e quais problemas ele resolve
-   [ ] Biblioteca React: diferença entre biblioteca e framework
-   [ ] SPA (Single Page Application) e renderização de interfaces
-   [ ] Declarativo vs. imperativo
-   [ ] Virtual DOM: conceito e propósito
-   [ ] Como funciona a atualização e renderização de componentes

## 1.2 Ambiente e estrutura do projeto

-   [ ] Instalar e configurar Node.js e npm
-   [ ] Criar um projeto React com Vite
-   [ ] Conhecer os comandos de desenvolvimento e build
-   [ ] Entender a estrutura de pastas e arquivos
-   [ ] Conhecer `package.json` e dependências
-   [ ] Executar o projeto e usar o console do navegador

## 1.3 JSX

-   [ ] O que é JSX e por que é utilizado
-   [ ] Diferenças entre JSX e HTML
-   [ ] Inserir expressões JavaScript com `{ }`
-   [ ] Regras de escrita: um elemento raiz e fechamento de tags
-   [ ] Atributos como `className`, `htmlFor` e eventos
-   [ ] Renderizar conteúdo condicional simples

## 1.4 Componentes e props

-   [ ] O que são componentes
-   [ ] Criar componentes funcionais
-   [ ] Exportar e importar componentes
-   [ ] Compor componentes dentro de outros componentes
-   [ ] O que são `props`
-   [ ] Passar dados e funções por props
-   [ ] Desestruturar props
-   [ ] Utilizar `children`

## 1.5 Eventos e estado

-   [ ] Eventos no React (`onClick`, `onChange`, `onSubmit`)
-   [ ] O que é estado e por que ele existe
-   [ ] Utilizar o Hook `useState`
-   [ ] Atualizar estado sem mutar objetos ou arrays
-   [ ] Atualizações de estado baseadas no valor anterior
-   [ ] Entender por que uma mudança de estado provoca uma nova
    renderização

## 1.6 Listas e condições

-   [ ] Renderização condicional com `if`, operador ternário e `&&`
-   [ ] Renderizar listas com `map()`
-   [ ] Entender a propriedade `key`
-   [ ] Filtrar e ordenar dados antes de renderizá-los
-   [ ] Exibir estados vazios (por exemplo, lista sem resultados)

## 1.7 Formulários e estilos

-   [ ] Criar formulários básicos
-   [ ] Trabalhar com inputs controlados
-   [ ] Capturar e validar valores de campos
-   [ ] Tratar o envio com `onSubmit`
-   [ ] Aplicar CSS tradicional aos componentes
-   [ ] Organizar estilos por componente
-   [ ] Entender opções de CSS Modules

## Exercícios --- nível básico

Faça os exercícios em ordem. Comece com componentes pequenos e aumente a
complexidade aos poucos.

-   [ ] **1. Cartão de perfil:** crie um componente que receba nome,
    profissão, foto e descrição por props.
-   [ ] **2. Contador:** crie botões para incrementar, decrementar e
    zerar um contador usando `useState`.
-   [ ] **3. Alternador de tema:** implemente um botão que alterne entre
    tema claro e escuro.
-   [ ] **4. Lista de tarefas simples:** permita adicionar e remover
    tarefas.
-   [ ] **5. Lista de produtos:** renderize produtos com `map()` e use
    uma `key` estável.
-   [ ] **6. Filtro de pesquisa:** adicione um campo que filtre uma
    lista de nomes conforme a digitação.
-   [ ] **7. Formulário de cadastro:** crie campos de nome, e-mail e
    senha, com validações básicas.
-   [ ] **8. Componente de avaliação:** permita selecionar uma nota de 1
    a 5 e exibir a escolha.
-   [ ] **9. Galeria de imagens:** exiba imagens a partir de um array e
    permita selecionar uma imagem em destaque.
-   [ ] **10. Página de apresentação:** monte uma página pessoal com
    cabeçalho, perfil, habilidades e projetos, dividida em componentes
    reutilizáveis.

**Projeto de fechamento do nível:** transforme os exercícios em uma
pequena aplicação de tarefas com componentes separados, formulário,
filtros e persistência ainda não obrigatória.

------------------------------------------------------------------------

# 2. Nível médio

**Meta:** criar aplicações mais completas, lidar com efeitos, dados
externos, navegação, estado compartilhado e organização de código.

## 2.1 Hooks em profundidade

-   [ ] Revisar as regras dos Hooks
-   [ ] Utilizar `useEffect`
-   [ ] Entender dependências e ciclo de sincronização de efeitos
-   [ ] Limpar efeitos com a função de cleanup
-   [ ] Evitar efeitos desnecessários
-   [ ] Utilizar `useRef` para referências e valores que não precisam
    renderizar novamente
-   [ ] Entender quando `useMemo` pode ser útil
-   [ ] Entender quando `useCallback` pode ser útil
-   [ ] Diferenciar estado, props e refs

## 2.2 Consumo de APIs

-   [ ] Entender requisições HTTP e métodos GET, POST, PUT/PATCH e
    DELETE
-   [ ] Consumir APIs com `fetch`
-   [ ] Trabalhar com `async` / `await`
-   [ ] Exibir estados de carregamento
-   [ ] Tratar erros de rede e respostas inválidas
-   [ ] Cancelar ou ignorar requisições obsoletas quando necessário
-   [ ] Enviar dados para uma API
-   [ ] Utilizar variáveis de ambiente no Vite

## 2.3 Formulários e validação

-   [ ] Comparar formulários controlados e não controlados
-   [ ] Criar validações reutilizáveis
-   [ ] Exibir mensagens de erro por campo
-   [ ] Tratar envio, carregamento e sucesso
-   [ ] Conhecer bibliotecas como React Hook Form
-   [ ] Conhecer bibliotecas de schema/validação, como Zod

## 2.4 Context API e estado compartilhado

-   [ ] Entender o problema de prop drilling
-   [ ] Criar um Context
-   [ ] Utilizar `createContext` e `useContext`
-   [ ] Criar um Provider
-   [ ] Compartilhar autenticação, tema ou preferências
-   [ ] Identificar quando Context não é a melhor solução
-   [ ] Conhecer alternativas de gerenciamento de estado, como Zustand
    ou Redux Toolkit

## 2.5 Rotas e navegação

-   [ ] Entender roteamento no lado do cliente
-   [ ] Instalar e configurar React Router
-   [ ] Criar rotas e layouts compartilhados
-   [ ] Criar links e navegação programática
-   [ ] Utilizar parâmetros de rota
-   [ ] Utilizar parâmetros de busca (query strings)
-   [ ] Criar páginas não encontradas (404)
-   [ ] Proteger páginas conforme o estado de autenticação

## 2.6 Arquitetura e organização

-   [ ] Separar componentes, páginas, hooks e serviços
-   [ ] Criar componentes reutilizáveis sem generalizar demais
-   [ ] Criar Hooks personalizados
-   [ ] Separar lógica de apresentação e acesso a dados
-   [ ] Organizar chamadas de API em módulos de serviço
-   [ ] Entender composição como alternativa a componentes
    excessivamente configuráveis
-   [ ] Conhecer padrões de tratamento de erros

## 2.7 Persistência e experiência do usuário

-   [ ] Utilizar `localStorage` com cuidado
-   [ ] Persistir preferências e dados simples
-   [ ] Entender limitações e riscos de armazenar dados no navegador
-   [ ] Implementar paginação
-   [ ] Implementar busca, filtros e ordenação
-   [ ] Criar feedback visual para carregamento, erro e sucesso
-   [ ] Melhorar acessibilidade: labels, foco, teclado e mensagens

## Exercícios --- nível médio

-   [ ] **1. Catálogo de filmes:** consuma uma API pública e exiba
    filmes com carregamento, erro e busca.
-   [ ] **2. Aplicação de clima:** consulte uma API de previsão do tempo
    e apresente os dados de uma cidade pesquisada.
-   [ ] **3. Gerenciador de tarefas completo:** implemente edição,
    conclusão, filtros e persistência em `localStorage`.
-   [ ] **4. Carrinho de compras:** permita adicionar/remover produtos,
    alterar quantidades e calcular subtotal e total.
-   [ ] **5. Autenticação simulada:** crie telas de login e cadastro e
    proteja rotas usando um estado de autenticação fictício. Não
    armazene senhas reais.
-   [ ] **6. Painel administrativo:** crie rotas para dashboard,
    usuários e configurações, com navegação entre páginas.
-   [ ] **7. Formulário avançado:** desenvolva um formulário com
    validação por campo, mensagens de erro e resumo antes do envio.
-   [ ] **8. Favoritos de conteúdo:** consuma uma API e permita
    favoritar itens, mantendo os favoritos após recarregar a página.
-   [ ] **9. Dashboard de dados:** apresente dados de uma API em cards,
    filtros e gráficos usando uma biblioteca de gráficos.
-   [ ] **10. Loja virtual front-end:** crie catálogo, detalhes do
    produto, busca, filtros, carrinho e finalização de compra simulada.

**Projeto de fechamento do nível:** desenvolva uma aplicação com
múltiplas rotas, consumo de API, formulários validados e estado
compartilhado.

------------------------------------------------------------------------

# 3. Nível avançado

**Meta:** aprofundar a arquitetura, qualidade, desempenho, testes,
tipagem e integração do React em aplicações robustas.

## 3.1 Renderização e desempenho

-   [ ] Entender com mais profundidade o processo de renderização e
    commit
-   [ ] Identificar renderizações desnecessárias
-   [ ] Utilizar React DevTools Profiler
-   [ ] Aplicar `memo` quando houver benefício comprovado
-   [ ] Avaliar `useMemo` e `useCallback` com base em medições
-   [ ] Dividir código com `lazy` e `Suspense`
-   [ ] Implementar carregamento sob demanda de rotas ou componentes
-   [ ] Conhecer virtualização de listas grandes
-   [ ] Entender transições com `useTransition`
-   [ ] Conhecer `useDeferredValue`

## 3.2 Hooks e APIs avançadas do React

-   [ ] Criar Hooks personalizados robustos e reutilizáveis
-   [ ] Entender `useReducer` e quando utilizá-lo
-   [ ] Combinar `useReducer` com Context quando apropriado
-   [ ] Conhecer `useId`
-   [ ] Conhecer `useSyncExternalStore`
-   [ ] Entender `useImperativeHandle` e seu uso restrito
-   [ ] Conhecer limites de erro (Error Boundaries)
-   [ ] Entender os recursos e APIs disponíveis na versão do React
    utilizada

## 3.3 TypeScript com React

-   [ ] Configurar TypeScript em um projeto React
-   [ ] Tipar props e `children`
-   [ ] Tipar eventos e formulários
-   [ ] Tipar estados, refs e Hooks personalizados
-   [ ] Utilizar unions, generics e utility types
-   [ ] Criar tipos para respostas de APIs
-   [ ] Tipar Context e reducers
-   [ ] Evitar o uso indiscriminado de `any`

## 3.4 Testes e qualidade

-   [ ] Entender testes unitários, de integração e ponta a ponta
-   [ ] Configurar Vitest
-   [ ] Testar componentes com React Testing Library
-   [ ] Testar interações do usuário
-   [ ] Testar estados de carregamento, erro e sucesso
-   [ ] Simular requisições HTTP com MSW
-   [ ] Conhecer testes E2E com Playwright ou Cypress
-   [ ] Configurar ESLint e Prettier
-   [ ] Integrar testes e lint ao fluxo de desenvolvimento

## 3.5 Arquitetura de aplicações

-   [ ] Planejar a estrutura de uma aplicação de médio/grande porte
-   [ ] Organizar o código por funcionalidade/domínio
-   [ ] Definir limites e responsabilidades dos componentes
-   [ ] Criar camadas para interface, regras de negócio e acesso a dados
-   [ ] Gerenciar estado local, global e remoto de forma adequada
-   [ ] Conhecer TanStack Query para cache e sincronização de dados
    remotos
-   [ ] Entender estratégias de cache, invalidação e atualização
-   [ ] Conhecer estratégias de tratamento e registro de erros

## 3.6 Acessibilidade e segurança

-   [ ] Aplicar HTML semântico e padrões de acessibilidade
-   [ ] Navegar e operar a aplicação somente com teclado
-   [ ] Utilizar atributos ARIA quando necessários
-   [ ] Verificar contraste, foco e leitores de tela
-   [ ] Entender XSS e os cuidados ao renderizar conteúdo externo
-   [ ] Evitar inserir HTML não confiável
-   [ ] Entender que segredos não devem ficar no código enviado ao
    navegador
-   [ ] Tratar autenticação e autorização com apoio de um backend seguro

## 3.7 Ecossistema e integração

-   [ ] Conhecer SSR, CSR, SSG e suas diferenças
-   [ ] Entender hidratação
-   [ ] Conhecer frameworks React, como Next.js
-   [ ] Entender Server Components e Client Components no contexto de
    frameworks compatíveis
-   [ ] Integrar React a um backend próprio
-   [ ] Trabalhar com autenticação baseada em sessões ou tokens de forma
    segura
-   [ ] Conhecer WebSockets e interfaces em tempo real
-   [ ] Configurar build e variáveis de ambiente para produção
-   [ ] Fazer deploy e acompanhar erros em produção

## Exercícios --- nível avançado

-   [ ] **1. Biblioteca de componentes:** crie uma pequena biblioteca
    com Button, Input, Modal, Card e componentes de formulário tipados e
    documentados.
-   [ ] **2. Gerenciador de estado:** refatore uma aplicação para usar
    `useReducer` ou uma biblioteca de estado e justifique a escolha.
-   [ ] **3. Busca otimizada:** implemente busca com debounce, estados
    de carregamento, cancelamento de requisições e tratamento de
    resultados antigos.
-   [ ] **4. Aplicação com TypeScript:** converta um projeto React
    existente para TypeScript, tipando componentes, eventos, APIs e
    Hooks.
-   [ ] **5. Suíte de testes:** escreva testes para fluxos importantes
    de uma aplicação, incluindo sucesso, erro e validações.
-   [ ] **6. Dashboard de grande volume:** crie uma tela com filtros,
    paginação, cache de dados e virtualização de uma lista extensa.
-   [ ] **7. Aplicação acessível:** revise um projeto para garantir
    navegação por teclado, foco visível, semântica e mensagens
    acessíveis.
-   [ ] **8. E-commerce integrado:** desenvolva uma loja conectada a um
    backend, com autenticação, catálogo, carrinho e pedidos.
-   [ ] **9. Otimização de produção:** analise uma aplicação com
    ferramentas de profiling, reduza o bundle e implemente divisão de
    código. Registre as melhorias medidas.
-   [ ] **10. Projeto final:** construa uma aplicação completa --- por
    exemplo, um sistema de gerenciamento de estudos --- com React,
    TypeScript, API/backend, autenticação, rotas, testes, acessibilidade
    e deploy.

**Projeto de fechamento do nível:** publique uma aplicação completa,
documente decisões técnicas no README e inclua instruções para executar
e testar o projeto.

------------------------------------------------------------------------

# 4. Projetos extras para consolidar o aprendizado

Use estes projetos quando quiser revisar vários assuntos ao mesmo tempo.

-   [ ] **Lista de leitura:** cadastro de livros, status de leitura,
    notas e filtros.
-   [ ] **Controle financeiro pessoal:** lançamentos, categorias, totais
    e gráficos.
-   [ ] **Gerenciador de estudos:** matérias, tópicos, checklists, metas
    e progresso.
-   [ ] **Sistema de agendamento:** calendário, formulários, validações
    e integração com API.
-   [ ] **Portfólio com painel:** página pública e área administrativa
    para gerenciar projetos.

------------------------------------------------------------------------

# 5. Boas práticas durante os estudos

-   [ ] Antes de pesquisar a solução, tente resolver o problema sozinho.
-   [ ] Leia a documentação oficial do React: https://react.dev/
-   [ ] Faça pequenos experimentos para entender cada Hook.
-   [ ] Dê nomes claros a componentes, funções e variáveis.
-   [ ] Mantenha componentes focados em uma responsabilidade.
-   [ ] Evite criar abstrações antes de entender a necessidade.
-   [ ] Não utilize `useEffect` para todo tipo de lógica; avalie se o
    cálculo pode ocorrer durante a renderização ou no evento.
-   [ ] Não mute estados: crie novos arrays e objetos ao atualizá-los.
-   [ ] Use Git para registrar a evolução dos projetos.
-   [ ] Ao terminar um exercício, tente refazê-lo sem consultar o código
    anterior.
-   [ ] Escreva no README o que aprendeu e quais dificuldades resolveu.

## Controle geral de progresso

-   [ ] Pré-requisitos concluídos
-   [ ] Nível básico concluído
-   [ ] Nível médio concluído
-   [ ] Nível avançado concluído
-   [ ] Projetos extras concluídos
-   [ ] Projeto final publicado

------------------------------------------------------------------------

**Lembrete:** avançar de nível não significa decorar APIs. Significa
conseguir explicar as decisões, construir soluções, identificar
problemas e consultar a documentação para aprender o que ainda não sabe.

