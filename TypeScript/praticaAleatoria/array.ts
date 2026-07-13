// Arrays em Typescript.

// Arrays em TypeScript são coleções ordenadas que permitem armazenar múltiplos valores sob um único nome de variável, mantendo a tipagem forte do TypeScript. Eles podem ser declarados usando colchetes (tipo[]) ou generics (Array<tipo>), garantindo que apenas elementos do tipo definido sejam adicionados, o que aumenta a segurança e a consistência do código. 

// Sintaxe de Colchetes (tipo[]): A forma mais comum.
let numeros: number[] = [1, 2, 3, 4];
let frutas: string[] = ['Maçã', 'Banana'];

// Sintaxe de Generics (Array<tipo>): Equivalente à de colchetes.
let ids: Array<number> = [10, 20, 30];

// Arrays de Tipos Mistos (Union Types): Permite tipos diferentes em um array.
let misto: (string | number)[] = ['Texto', 1, 'Outro', 2];
// Inferência de Tipo: O TypeScript pode inferir o tipo se o array for inicializado.
let lista = [true, false]; // Inferido como boolean[]

// Manipulação: Métodos padrão do JavaScript como push(), pop(), shift(), unshift() e concat() funcionam normalmente, respeitando os tipos definidos. 