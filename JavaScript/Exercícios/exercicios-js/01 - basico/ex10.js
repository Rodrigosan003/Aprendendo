// 10 - Escreva um programa que imprima os números de 1 a 100, com "Fizz", "Buzz" e "FizzBuzz" (exercício clássico).

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 2 === 0) output += "FizBuzz";
  if (i % 3 === 0) output += "Fiz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}
