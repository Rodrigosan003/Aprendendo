function logar(user: string, pass: string): void {
  // void indica que a função não retorna nada.
  console.log(`User: ${user} - Pass: ${pass}`);
}

logar("admin", "1234");
logar("user", "abcd");

function somar(n1: number, n2: number): number {
  // number indica que a função retorna um número.
  return n1 + n2;
}

console.log(somar(10, 20));
console.log(somar(5, 7));
