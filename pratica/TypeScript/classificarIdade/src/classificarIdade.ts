// src/classificarIdade.ts

export function classificarIdade(idade: number): string {
  if (idade < 18) {
    return "Menor de idade!";
  } else if (idade >= 60 && idade <= 100) {
    return "Idoso!";
  } else if (idade >= 18 && idade < 60) {
    return "Maior de idade!";
  } else {
    return "Você está vivo ainda?";
  }
}
