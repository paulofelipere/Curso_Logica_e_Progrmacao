let temDinheiro = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = '(AND)Vai para o shopping? '
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "(OU)#2 vai para o shopping? "
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);


console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log('Not true: ' + !true); //operador unário (aula 60, no final)//
console.log('Not false: ' + !false);  //tbm//



