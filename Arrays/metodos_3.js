const num = [1,2,3,4,5,6];

//for (let i = 0; i < num.length; i++) {   // percorre os numeros do array
   // console.log(num[i]);   
//}

//for(let n of num){          // percorre os numeros do array
 //   console.log(n)
//}

num.forEach(function(){
console.log("dentro do ForEach")            // executa a função, conforme a quantidade de elementos que tiverem no array
});

function paraCadaElemento(elemento,indice,array){
    console.log(elemento,indice,array);
};
num.forEach(paraCadaElemento);

num.forEach(function(el,array){
    console.log(el,array);
});

num.forEach(function(_,i){
    console.log(_,i);     
})
