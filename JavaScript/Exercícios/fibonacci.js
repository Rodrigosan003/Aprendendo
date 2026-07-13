function generateFibonaccis(n) {
  let fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}

let fib = generateFibonaccis(20);
console.log(fib.join(" "));
