// Aula 19: Aprendendo sobre P.O.O. Modificadores de acesso em Typescript.
// Em Programação Orientada a Objetos (POO) no TypeScript, os modificadores de acesso (public, private, protected e readonly) controlam a visibilidade e a acessibilidade de membros de uma classe, aplicando o princípio de encapsulamento. O modificador public permite acesso de qualquer lugar, private restringe à própria classe, protected permite o acesso na classe e nas suas subclasses, e readonly impede a alteração do valor após a inicialização. Esses modificadores ajudam a criar código mais seguro, modular e fácil de manter. 

// Tipos de Modificadores de Acesso no TypeScript 
// public: É o modificador padrão e permite que os membros da classe sejam acessados de qualquer local – dentro da classe, em suas subclasses ou por outras classes.
    class ExemploPublico {
      public nome: string = "Público";
    }
    let objPublico = new ExemploPublico();
    console.log(objPublico.nome); // Acessível


// private: Restringe o acesso aos membros da classe somente à própria classe onde foram definidos. 
    class ExemploPrivado {
      private mensagem: string = "Privado";
      mostrarMensagem() {
        console.log(this.mensagem); // Acessível dentro da classe
      }
    }
    let objPrivado = new ExemploPrivado();
    // console.log(objPrivado.mensagem); // Erro: não pode ser acessado de fora da classe

// protected: Permite que os membros sejam acessados dentro da própria classe e também nas suas subclasses (classes filhas), mas não de fora dela.
    class ClassePai {
      protected dados: string = "Pai";
    }
    class ClasseFilha extends ClassePai {
      mostrarDados() {
        console.log(this.dados); // Acessível na classe filha
      }
    }
    let objFilho = new ClasseFilha();
    objFilho.mostrarDados();
    // console.log(objFilho.dados); // Erro: não pode ser acessado de fora da classe

// readonly: Não é um modificador de acesso de visibilidade, mas um modificador de dado que garante que o valor de uma propriedade só possa ser definido quando o objeto é inicializado e não pode ser alterado depois. 
    class ExemploReadonly {
      readonly id: number;
      constructor(id: number) {
        this.id = id;
      }
    }
    let objReadonly = new ExemploReadonly(123);
    // objReadonly.id = 456; // Erro: Cannot assign to 'id' because it is a read-only property.

