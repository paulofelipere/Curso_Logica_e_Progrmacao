const notas = [7,8,3,5,9,8,5,10];

let valores=" ";
//foreach
for(let nota of notas){
    console.log(nota)
}

for(let nota of notas){
    valores += nota + " ";
}
console.log(valores);

let indices=" indices ";
for (let indice in notas){
    indices += indice + '';
}console.log(indices)