// escrever série de Fibonacci até o enésimo termo (n > 0)

function fibonacci(){
    document.getElementById("resultado").innerHTML = "";	//limpa o resultado
    let termo = document.getElementById("numero").value;
    if (termo > 0) {
        var serie = [];
        serie[0] = 1;
        serie[1] = 1;
        for (var i = 2; i < termo; i++) {
            serie[i] = serie[i - 2] + serie[i - 1];
        }
    }
    document.getElementById("resultado").innerHTML = 'A série de Fibonacci até o enésimo termo é: ' + serie;
}