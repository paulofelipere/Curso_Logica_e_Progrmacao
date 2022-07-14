function executar(fn,n1,n2){
    if(typeof fn === 'function'){
        console.log(fn(n1,n2)); //<---- Parte central da aula(invoca o parametro a ser função)
    }}
function somar (a,b) {
    return a + b; 
}
function subtrair(a,b){
    return a-b;
}
function multilipicar(a,b){
    return a*b;
}
function raiz(a,b){
    return(Math.sqrt(a));
}
function div(a,b){
    return a/b;
}
executar(somar,50,40);
executar(subtrair,10,5);
executar(multilipicar,100,0);
executar(raiz,9);
executar(div,10,2.5)