function soma(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}

console.log(soma(2, 3)); // Output: 5

function novoUser(user: string, pass: string, nome?: string): void {
  console.log(`Usuário: ${user}, Senha: ${pass}, Nome: ${nome}`);
}

novoUser("joao", "123456");
novoUser("maria", "abcdef", "Maria Silva"); // Nome é opcional
