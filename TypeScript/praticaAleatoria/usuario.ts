interface User {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
  profile?: { // Propriedade opcional
    firstName: string;
    lastName: string;
  };
}

// Exemplo de uso:
const currentUser: User = {
  id: 1,
  username: "johndoe",
  email: "john@example.com",
  isActive: true,
  profile: {
    firstName: "John",
    lastName: "Doe"
  }
};

const guestUser: User = {
  id: 2,
  username: "guest",
  email: "guest@example.com",
  isActive: false
  // profile é opcional, então não precisamos incluí-lo aqui.
};
