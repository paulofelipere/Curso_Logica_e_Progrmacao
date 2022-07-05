const futuro = Date.now() + 10000;  // Date baseia-se na data de criação do Unix
let quantidade = 0;
while (Date.now() < futuro) {
    quantidade++;
}
console.log('Fim');