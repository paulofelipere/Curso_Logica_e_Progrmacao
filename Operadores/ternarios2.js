const hora = 8;
const saudacao = 
         hora <=12
            ? "Boa dia" : 
               (hora <= 17
                 ? "Bom tarde"
                 : "Boa noite");
console.log(saudacao)