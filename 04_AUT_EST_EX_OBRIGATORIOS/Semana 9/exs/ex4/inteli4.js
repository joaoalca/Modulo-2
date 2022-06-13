// escrever série de Fibonacci até o enésimo termo (n > 0)

function fibonacci(){
    document.getElementById("resultado").innerHTML = "";	//limpa o resultado
    let termo = document.getElementById("numero").value;
    if (termo > 0) { //se o termo for maior que 0
        var serie = [];
        serie[0] = 1;
        serie[1] = 1;
        for (var i = 2; i < termo; i++) { //loop para calcular a série de fibonacci
            serie[i] = serie[i - 2] + serie[i - 1]; // o numero da posição i é a soma do numero da posição dois 2 valores anteriores
        }
    }
    document.getElementById("resultado").innerHTML = 'A série de Fibonacci até o enésimo termo é: ' + serie;
}