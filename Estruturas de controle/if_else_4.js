const hora = 17.35;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia!';
}
else if (hora < 17.3) {
    saudacao = "Boa Tarde"
} else if (hora < 22) {
    saudacao = "Boa noie"
} else {
    saudacao = 'muito tarde'
}
console.log(saudacao)