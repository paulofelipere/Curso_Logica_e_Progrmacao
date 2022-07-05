const hora = 19;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia!';
}
else {
    if (hora < 17.3) {
        saudacao = "Boa Tarde";
    } else {
        if (hora < 22) {
            saudacao = 'Boa noite';
        } else {
            saudacao = 'tarde demais, eu já segui meu caminho';
        }
    }
}

console.log(saudacao)