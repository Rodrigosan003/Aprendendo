Para criar uma interface em TypeScript, utiliza-se a palavra-chave 
interface, seguida do nome da interface e de um bloco de código 
delimitado por chaves {}. Dentro desse bloco, definem-se as 
propriedades e seus tipos. As interfaces servem para descrever a 
forma de um objeto, permitindo a criação de contratos que garantem a 
consistência e a segurança do tipo de dados em seu código. 


interface Usuario {
  nome: string;
  idade: number;
  email?: string; // Propriedade opcional
  readonly id: number; // Propriedade somente leitura
  [propName: string]: any; // Permite propriedades adicionais com qualquer nome e tipo
}

const usuario: Usuario = {
  nome: "João",
  idade: 30,
  id: 123,
  endereco: "Rua A, 123",
};

console.log(usuario.nome);