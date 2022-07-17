const numeros = [1,2,3,4,5];

numeros.push(6);       //adiciona numero ao array
numeros[0]=100;      //substitui numero
console.log(numeros.join(',') );       //junta os elementos do array
console.log(numeros.join(' - ') );
const  numeros2 =numeros.concat(7,8,9); //concatena numeros(adiciona ao array)
console.log(numeros.includes(10));      //informa se o elemeto está no array, ou não, respondendo como true ou false
console.log(numeros.indexOf(4));        // determina qual é o indice de determinado elemento
console.log(numeros.indexOf(3));     
console.log(numeros.indexOf(3,3));  




console.log(numeros) 
console.log(numeros2)
