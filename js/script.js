/** Adiciona Evento ao Botão */
const botao = document.getElementById("btn")
botao.addEventListener("click", calcular)

function calcular() {
    /** Seleciona os Dados de Entrada */
    const diametro = Number.parseFloat(document.getElementById("diametro").value.replace(",", "."));
    const curso = Number.parseFloat(document.getElementById("curso").value.replace(",", "."));
    const nCilindros = Number(document.getElementById("cilindros").value.replace(",", "."));
    const cabecote = Number.parseFloat(document.getElementById("cabecote").value.replace(",", "."));
    const compressaoDesejada = Number.parseFloat(document.getElementById("compressao-desejada").value.replace(",", "."));
    const compressaoAtual = Number.parseFloat(document.getElementById("compressao-atual").value.replace(",", "."));

    /** Seleciona os Dados de Saída */
    const resultadoCilindrada = document.querySelector("#resultado-cilindrada");
    const resultadoCompressaoAtual = document.querySelector("#resultado-compressao-atual");
    const resultadoCompressaoDesejada = document.querySelector("#resultado-compressao-desejada");
    const resultadoCabecote = document.querySelector("#resultado-cabeçote");

    /** Faz o Calculo */
    const raioPistao = diametro / 2;
    const pi = 31.4159
    const volPistao = raioPistao ** 2 * curso * pi / 1000;
    const cilindrada = Number(volPistao * nCilindros).toFixed(2);
    const cabecoteCorrigido = cabecote / 10;
    const volumeMorto1 = volPistao / (compressaoDesejada - 1);
    const volumeMorto2 = volPistao / (compressaoAtual - 1);
    const volCameraDesejada = volumeMorto1 - cabecoteCorrigido;
    const volCameraAtual = volumeMorto2 - cabecoteCorrigido;
    const cameraAtual = Math.cbrt(volCameraAtual);
    const cameraDesejada = Math.cbrt(volCameraDesejada);
    const passeCabecote = Number((cameraAtual - cameraDesejada) * 10 ).toFixed(3);

    /** Teste */
    console.log("A Cilindrada e: " + cilindrada);
    console.log("A Taxa de Compressão Atual é: " + compressaoAtual);
    console.log("A Taxa de Compressão Desejada é: " + compressaoDesejada);
    console.log("Rebaixe o cabeçote em: " + passeCabecote + " mm");

    /** Escreve no HTML */
    resultadoCilindrada.innerHTML = "A Cilindrada é: " + cilindrada + " cm3";
    resultadoCompressaoAtual.innerHTML = "A Compressão Atual é: " + compressaoAtual;
    resultadoCompressaoDesejada.innerHTML = "A Compressão Desejada é: " + compressaoDesejada;
    resultadoCabecote.innerHTML = "Rebaixe o cabeçote em: " + passeCabecote + " mm";
}
