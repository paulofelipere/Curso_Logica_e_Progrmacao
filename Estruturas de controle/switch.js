let nota = 6

switch (Math.ceil(nota)) {
    case 3:
        console.log('reprovado');
    case 6:
        console.log('parabens');


}
console.log('Fim');

{
    let nota2 = 15

    switch (Math.ceil(nota2)) {
        default:
            console.log("invalid. Error 102");
            break;                                                                               // erro 102 = dado inválido
        case 10:
        case 9:
        case 8:
        case 7:
        case 6:
            console.log('parabens');
            break;
        case 5:
            console.log('Recuperação, precisa de nota  > 7.0 para ser aprovado');
            break
        case 4:
            console.log('Recuperação, precisa de nota > 8.0 para ser aprovado');
            break;
        case 3:
        case 2:
            console.log('reprovado');
            break;
        case 1:
            console.log('muito reprovado');

    }
    console.log('Fim');
}