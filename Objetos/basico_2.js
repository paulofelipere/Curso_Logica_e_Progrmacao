

const produto ={
    nome : 'iPad',     // usa-se ',' e não ';'
    preço: 5600,
    desconto: 0.7,
    precoFinal: function(){
        return this.preço * (1 - this.desconto);
    }

};
console.log(produto.nome);
console.log(produto.precoFinal())