const nota = 8;
const bomComportamento = false;
if (nota >= 7 && bomComportamento)
    console.log('aprovado!');

if (nota < 7 || !bomComportamento)  // já que pode reprovar, coloca uma negação (!)
    console.log("reprovado");

console.log('fim')