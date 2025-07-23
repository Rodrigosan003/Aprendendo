// Exercício 1: Interface com propriedades opcionais e readonly.

// Sua solução aqui

interface User {
  id: number;
  name: string;
  email?: string; // Propriedade opcional
  readonly nickname: string; // Propriedade somente leitura
}

const user1: User = {
  id: 1,
  name: "Alice",
  nickname: "ali",
};

user1.email = "alice@example.com"; // Ok
// user1.nickname = "new_alias"; // Erro: Cannot assign to 'nickname' because it is a read-only property.
