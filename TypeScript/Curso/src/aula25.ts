// Aula 25: Métodos GETTER e SETTER - aprenda o que são e como utilizar.

// Métodos GETTER e SETTER (acesso e modificação) são funções numa classe para controlar o acesso e a modificação dos atributos, permitindo que o código interaja com os dados da classe de forma controlada, sem acessá-los diretamente, o que é fundamental para o encapsulamento e a segurança dos dados. O GETTER retorna o valor de um atributo, enquanto o SETTER define ou atualiza esse valor, frequentemente adicionando validações para garantir a integridade dos dados.

// O que são e para que servem

// Encapsulamento:
// Os getters e setters são uma técnica de encapsulamento, que protege os dados de uma classe. Em vez de acessar as variáveis diretamente (o que poderia torná-las públicas e vulneráveis), usamos métodos públicos para obter (get) ou definir (set) seus valores.

// Controlo e Validação:
// Permitem validar os dados antes de defini-los ou recuperá-los. Por exemplo, um setter pode garantir que um número esteja dentro de um intervalo válido antes de ser atribuído ao atributo.

// Segurança:
// Ao manter os atributos privados, os getters e setters evitam modificações não autorizadas ou acidentais, tornando o código mais robusto e seguro.

// Como utilizar
// 1 - Definição dos Métodos:
// GETTER (Acessador): Começa com "get" (ou "is" para booleanos) e retorna o valor do atributo.
// SETTER (Mutador): Começa com "set", recebe um parâmetro com o novo valor e o atribui ao atributo, geralmente após alguma validação.

// 2 - Exemplo em código (TypeScript):
class Conta {
  private _saldo: number; // Atributo privado

  constructor() {
    this._saldo = 0;
  }

  // Método GETTER para o saldo
  public get saldo(): number {
    return this._saldo; // Retorna o valor do saldo
  }

  // Método SETTER para o saldo
  public set saldo(novoSaldo: number) {
    // Validação: garantir que o saldo não seja negativo
    if (novoSaldo >= 0) {
      this._saldo = novoSaldo; // Atribui o novo valor ao atributo saldo
    } else {
      console.log("Erro: O saldo não pode ser negativo.");
    }
  }
}

// 3 - Uso no main:
// Para definir um valor, usa-se o setter.
// Para obter um valor, usa-se o getter.
const minhaConta = new Conta();
minhaConta.saldo = 1000.5; // Define o saldo usando o setter
console.log("Saldo atual: " + minhaConta.saldo); // Obtém o saldo usando o getter
