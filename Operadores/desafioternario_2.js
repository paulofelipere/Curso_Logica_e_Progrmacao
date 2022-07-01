const a = 2; 
const b = 5;

const operacao = '+'

const result = operacao === '-' ? a + b :
            operacao === '/' ? a - b :
            operacao === '*' ? a * b: a/b;
console.log(result);
        
{const a = 2; 
    const b = 5;
    const c = 10;
    const d = 8
    
    const operacao = '+'
    
    const result = operacao === '+' ? a + b + c + d :
                operacao === '-' ? a - b -c - d :
                operacao === '*' ? a / b + c + d : a/b/c/d ;
    console.log(result);
            
    }