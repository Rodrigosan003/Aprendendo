let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 5;

console.log(typeof uvalor);

nvalor = <number>uvalor; // Type assertion to number
