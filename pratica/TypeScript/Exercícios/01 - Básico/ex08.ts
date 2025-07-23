// Exercício 8: Type Alias: Crie um type Status = 'ativo' | 'inativo' e use num objeto.

// Sua solução aqui

type Status = 'ativo' | 'inativo';

interface ObjetoComStatus {
  id: number;
  nome: string;
  status: Status;
}

const meuObjeto: ObjetoComStatus = {
  id: 1,
  nome: "Exemplo",
  status: 'ativo'
};

console.log(meuObjeto);
