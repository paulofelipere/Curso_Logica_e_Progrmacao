function executar(funcao){
    if(typeof funcao === 'function'){
        console.log(funcao()); //<---- Parte central da aula(invoca o parametro a ser função)
    }
}

function bomDia(){
    return 'Bom dia';
}

executar(3);
executar(bomDia); //<---- Parte central da aula( indica a função(???))

const x = bomDia
const y = bomDia() // invoca a função

console.log(x());   // invoca a função
console.log(y);   
