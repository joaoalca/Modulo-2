

function calculo() {
    document.getElementById("resultado").innerHTML = ""; 
    let numero = document.getElementById("numero").value;
    let arrNumero = numero.split("");
    let soma = 0;
    for (let i = 0; i < arrNumero.length; i++) {
        if (Number(arrNumero[i]) >= 0 && Number(arrNumero[i]) <= 9) {
            soma += Number(arrNumero[i]);
        }
    }
    document.getElementById("resultado").innerHTML +="A soma dos dígitos é: " + soma;
}