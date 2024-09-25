const readline = require('readline');
const calcularHorasTrabalhadas = require('./calculadora_horas');

const interfaceLeitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fazerPergunta(pergunta) {
    return new Promise(resolver => interfaceLeitura.question(pergunta, resolver));
}

async function iniciar() {
    try {
        const horarioInicio = await fazerPergunta('Por favor, insira o horário de início (HH:mm, H:mm ou HHmm): ');
        const horarioTermino = await fazerPergunta('Por favor, insira o horário de término (HH:mm, H:mm ou HHmm): ');
        const duracaoIntervalo = await fazerPergunta('Por favor, insira a duração do intervalo (HH:mm, H:mm ou HHmm), ou pressione Enter para 00:00: ');

        const horasTrabalhadas = calcularHorasTrabalhadas(horarioInicio, horarioTermino, duracaoIntervalo || '00:00');

        console.log(`Total de horas trabalhadas: ${horasTrabalhadas.toFixed(2)} horas`);

    } catch (erro) {
        console.error(`Ocorreu um erro: ${erro.message}`);
    } finally {
        interfaceLeitura.close();
    }
}

iniciar();
