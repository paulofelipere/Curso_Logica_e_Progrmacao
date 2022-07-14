const nota1 = 7.8;
const nota2 = 7.2;
const nota3 = 5;

function minimo(n1, n2) {
    return  n1 <= n2 ? n1 : n2
}
function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));
    if (menorNota === n1) {
        return (n2 + n2) / 2;
    } else if (menorNota === n2) {
        return (n1 + n3) / 2;
    } else (menorNota === n3)
    return (n1 + n2) / 2

}

function mediaComStatus (media) {
    if (media => 7) {
        return "Aprovado";
    } else if (media <= 4){
        return "Em recuperação";
    } else (media < 4) 
        return "Reprovado!";
        
    }
   
const mediaFinal = media(nota1,nota2,nota3);
const statusFinal = mediaComStatus(mediaFinal);
console.log (`O status do aluno é: ${statusFinal}`)



