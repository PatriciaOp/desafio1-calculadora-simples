const readline = require('readline');

// Cria a interface para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal da calculadora
function calculadora() {
    rl.question('Digite o primeiro número: ', (num1) => {
        const numero1 = parseFloat(num1);

        rl.question('Digite o segundo número: ', (num2) => {
            const numero2 = parseFloat(num2);

            if (isNaN(numero1) || isNaN(numero2) || numero1 === 0 || numero2 === 0) {
                console.log('Por favor, digite números válidos e diferentes de zero!\n');
                return repetirOuSair();
            }

       
       
                     // Faz as operações
                     let soma = numero1 + numero2;
                     let subtracao = numero1 - numero2;
                     let multiplicacao = numero1 * numero2;                   
                     let divisao = numero1 / numero2;
       
             
            // Exibe os resultados
            console.log(`\nResultado: ${numero1} + ${numero2} = ${soma}`);
            console.log(`Resultado: ${numero1} - ${numero2} = ${subtracao}`);
            console.log(`Resultado: ${numero1} x ${numero2} = ${multiplicacao}`);
            console.log(`Resultado: ${numero1} / ${numero2} = ${(divisao).toFixed(2)}`);

            repetirOuSair();
        });
    });
}

// Função para perguntar se o usuário quer repetir o cálculo
function repetirOuSair() {
    rl.question('\nDeseja fazer um novo cálculo? (s/n): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
            calculadora(); // Reinicia a calculadora
        } else {
            console.log('Até mais!');
            rl.close(); // Fecha o terminal
        }
    });
}

// Inicia a calculadora pela primeira vez
calculadora();
