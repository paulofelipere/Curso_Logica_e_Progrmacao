 function semRetorna1(){
    return 1;
}

function textoOuNumero(retornaTexto) {
    if(retornaTexto) {   //true
        return  'Eu sou um texto';
    } else{               //false
        return 'Não sou um texto';
    }
}
function textoOuNumero(retornaTexto) {    return retornaTexto ? 'Eu sou um texto' :'Não sou um texto'; }
   
let texto = textoOuNumero(false);
console.log(texto)

let valor = semRetorna1() + 999;
console.log(valor);