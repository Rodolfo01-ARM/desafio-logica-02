function somarTresNumeros(valor1, valor2, valor3) {
    const resultado = valor1 + valor2 + valor3;
    return resultado;
}

function calcularMediaDeTresNumeros(valor1, valor2, valor3) {
    // 1. Soma todos os valores
    const resultadoSomaDeTresValores = somarTresNumeros(valor1, valor2, valor3);

    // 2. Divide pela quantidade de números passados
    const resultadoDaMediaDeTresValores = resultadoSomaDeTresValores /3;

    // 3. Exibe o resultado
    return resultadoDaMediaDeTresValores;
}

module.exports = {
    somarTresNumeros
}