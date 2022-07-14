function retornaUmaFuncao (){
    function bomDia(){
    return 'Bom dia';
}
return bomDia(); //chama a função|
}                            //  |
console.log(retornaUmaFuncao);      //   |
console.log(retornaUmaFuncao()); //--------------> consequentimente, validando essa função
console.log(retornaUmaFuncao()()); // só chama a função se "return bomDia" estiver sem a função ser chamada


const umaFuncao = retornaUmaFuncao;
console.log(retornaUmaFuncao())