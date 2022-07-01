const nota = 6;

if (nota >= 9 && nota <= 10) {
    console.log("Aprovado! Conceito A");
    console.log("Parabens");
}

if (nota >= 7 && nota < 8.9) {
    console.log("Aprovado! Conceito B");
    console.log("Parabens");
}

if (nota >= 5 && nota < 6.9) {
    console.log("Aprovado! Conceito C");
    console.log("Parabens");
}

if (nota >= 4.5 && nota < 4.9) {
    console.log("Aprovado! Conceito D");
    console.log("Parabens");
}

if (nota <= 4.5) {
    console.log("Reprovado! Conceito E");
    console.log("Parabens");
}
console.log("Fim");

const nota2 = 9;

if (nota2 < 10 && nota2 <= 10)
    console.log("Aprovado! Conceito A");

if (nota2 < 8.9 && nota2 < 7)
    console.log("Aprovado! Conceito B");

if (nota2 < 6.9 && nota2 >= 5)
    console.log("Aprovado! Conceito C");

if (nota2 < 4.9 && nota2 >= 4.5)
    console.log("Aprovado! Conceito D");

if (nota2 < 4.5)
    console.log("Reprovado! Conceito E");

console.log("Fim");