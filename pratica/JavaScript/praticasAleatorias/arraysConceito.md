Arrays são uma das coisas mais usadas em JavaScript, então vale muito entender bem 👍

## 🧠 O que é um Array (bem simples)

Um **array** é basicamente uma **lista de valores**.

Imagina uma caixa com vários itens dentro:

```js
let frutas = ["maçã", "banana", "uva"];
```

Aqui você tem:

* Uma variável (`frutas`)
* Guardando vários valores ao mesmo tempo

---

## 🔢 Como acessar os valores

Cada item tem uma **posição (índice)**, começando do **0**:

```js
console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"
console.log(frutas[2]); // "uva"
```

👉 Sempre começa do 0, não do 1.

---

## ➕ Adicionando itens

```js
frutas.push("laranja"); // adiciona no final
```

Agora:

```js
["maçã", "banana", "uva", "laranja"]
```

---

## ➖ Removendo itens

```js
frutas.pop(); // remove o último
```

---

## 🔁 Percorrendo um array (muito importante)

Você pode passar por todos os itens:

```js
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

Ou de forma mais moderna:

```js
frutas.forEach(fruta => {
  console.log(fruta);
});
```

---

## 💡 Exemplos práticos

### 1. Lista de tarefas (tipo checklist)

```js
let tarefas = ["Estudar", "Treinar", "Ler"];

tarefas.push("Programar");

console.log(tarefas);
```

---

### 2. Soma de números

```js
let numeros = [10, 20, 30];
let soma = 0;

numeros.forEach(num => {
  soma += num;
});

console.log(soma); // 60
```

---

### 3. Filtrar dados

```js
let idades = [12, 18, 25, 15];

let maiores = idades.filter(idade => idade >= 18);

console.log(maiores); // [18, 25]
```

---

### 4. Transformar dados

```js
let numeros = [1, 2, 3];

let dobrados = numeros.map(n => n * 2);

console.log(dobrados); // [2, 4, 6]
```

---

## 🧩 Resumindo

* Array = lista de valores
* Começa no índice 0
* Pode guardar qualquer tipo de dado
* Tem vários métodos úteis (`push`, `pop`, `map`, `filter`, etc.)

---
