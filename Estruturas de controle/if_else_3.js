const hora = 19;
let saudacao;

if (hora < 12) {
    saudacao = 'Bom dia!';
}
else {
    if (hora < 17.3) {
        saudacao = "Boa Tarde"
    }
    else {
        saudacao = 'Boa noite'
    }

}
console.log(saudacao)

{
    const hora = 16;
    let saudacao;

    if (hora < 13) {
        saudacao = 'Bom diaa!'
    }
    else {
        if (hora < 17) {
            saudacao = "boa tardee!"
        }
        else {
            saudacao = 'Boa noitee!'
        }
    }
    console.log(saudacao)
}

{
    const nota = 10;
    let app;
    if (nota > 70) {
        app = "aprovado"
    } else {
        if (nota < 10.5) {
            app = 'reprovado'
        } else app = 'pode ser'
    }
    console.log(app)
}
{
    const nivelQualidade = 90
     ;
    let quali;
if(nivelQualidade > 50  ) { quali = 'Aprovado!'
}else {
    if(nivelQualidade <25  ) { 
        quali = 'Reprovado'
    }else {qual = 'Talvez'
    }
    
}console.log(quali)}