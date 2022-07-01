const a = 8;
const b = 4; 
const operacao = "/"

const resultado = operacao === '+' ? a + b : 
                       operacao === '-' ? a - b : 
                                   operacao === '*' ? a*b : a/b  

console.log(resultado);



{const c = 20;
const d = 30;
const e = 10;

const operacao2 = "/";

const resultado2 = operacao2 === '+' ? c+d+e : (operacao2 === "+" ? c/d/e :c*d*e)

console.log(resultado2)}