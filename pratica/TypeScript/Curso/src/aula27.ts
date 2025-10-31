// Aula 27: Aprendendo sobre INTERFACE e Objetos Literais em Typescript.

// Em TypeScript, interfaces definem a estrutura de um objeto como um contrato, enquanto um objeto literal é uma instância real de um objeto criada diretamente no código. As interfaces são usadas para garantir que os objetos tenham certas propriedades e tipos, e podem ser estendidas para criar novas interfaces. Já um objeto literal é a representação direta dos dados, com suas propriedades e valores definidos no momento da criação.

// Interface
//  - Função: Define a forma e os tipos esperados para um objeto, funcionando como um contrato que o objeto deve seguir.
// - Uso: Útil para garantir que objetos tenham a estrutura correta e para reutilizar a definição de tipo em vários lugares.
// Exemplo:
interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  ligarMotor: () => void;
}
// Objeto Literal
// - Função: Uma instância concreta de um objeto, com todas as suas propriedades e valores definidos no momento da declaração.
// - Uso: Criar um objeto diretamente no código.
// Exemplo:
let meuCarroAula27: Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023,
  ligarMotor: () => {
    console.log("Carro ligado!");
  },
};

// Relação entre Interface e Objeto Literal

// A interface é como um molde (a definição), e o objeto literal é a forma (a instância) construída a partir desse molde.

// Ao criar um objeto literal, você pode optar por "aderir" a uma interface para garantir que o objeto siga o contrato definido por ela. No exemplo acima, meuCarro é um objeto literal do tipo Carro, pois ele implementa todas as propriedades e o método que a Carro exige.

// É possível criar um objeto literal sem uma interface, mas usar interfaces é uma boa prática para garantir a tipagem e a consistência do código.
