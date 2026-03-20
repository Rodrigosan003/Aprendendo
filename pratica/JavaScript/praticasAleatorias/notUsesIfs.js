// function isColor(data) {
//     // return data === 'red' || data === 'blue' || data === 'green';
//     if(data == "red") {
//         return "vermelho";
//     } else if(data == "blue") {
//         return "azul";
//     } else if(data == "green") {
//         return "verde";
//     } else {
//         return "cor desconhecida";
//     }

// }

// console.log(isColor("red"));    // Output: vermelho

function isColor(data) {
    const result = {
        red: "vermelho",
        blue: "azul",
        green: "verde"
    };
    return result[data] || "cor desconhecida";
}

console.log(isColor("red"));    // Output: vermelho