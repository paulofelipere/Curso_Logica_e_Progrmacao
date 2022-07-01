const t1 = false;
const t2 = true;


console.log('vai comprar a tv de 50"? ', t1 &&  t2, '!!!!!');  // And   resultados iguais ex.: v,v ou f,f
console.log('vai comprar a tv de 32"? ', t1 !==  t2, '!!!!!'); //xor   

let sorvete = t1 || t2
console.log('vamos comprar sorvete"? ', sorvete, '!!!!!');  // or resultados diferentes ex.: v,f (true) ; f,v (true); v,v (false)

let ficarEmCasa = sorvete;

console.log('vamos ficar em casa? ', !ficarEmCasa); // not     resultados contrarios ex.: v,f (true) ; f,v (true); v,v (false)

let comprarTV50 =  t1 && t2; //and

console.log('vai comprar TV 50"? ', comprarTV50);

let comprarTV32 = t1 != t2; //xor

console.log( 'vai comprar tv 32"?', comprarTV32);
