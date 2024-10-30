function calcularIMC() {
    console.log("Função calcularIMC chamada");
    const peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    const resultadoMensagem = document.getElementById("result-message");

    // Verifica se os valores de peso e altura são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoMensagem.textContent = "Por favor, insira valores válidos para peso e altura.";
        resultadoMensagem.style.display = "block";
        resultadoMensagem.className = "";
        console.log("Valores inválidos detectados.");
        return;
    }

    // Converte altura para metros se for maior que 10
    if (altura > 10) {
        altura = altura / 100;
        console.log("Altura convertida para metros:", altura);
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);
    console.log("IMC calculado:", imc);

    // Define a categoria do IMC com base na classificação da OMS
    let categoria = "";
    if (imc < 18.5) {
        categoria = "Baixo peso";
        resultadoMensagem.className = "baixo-peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
        resultadoMensagem.className = "peso-normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
        resultadoMensagem.className = "sobrepeso";
    } else {
        categoria = "Obesidade";
        resultadoMensagem.className = "obesidade";
    }

    // Exibe o IMC e a categoria
    resultadoMensagem.innerHTML = `Seu IMC é <strong>${imc.toFixed(1)}</strong> - ${categoria}`;
    resultadoMensagem.style.display = "block";
    console.log("Resultado exibido com sucesso.");
}
