

function calculo() {
    document.getElementById("resultado").innerHTML = ""; 
    let numero = document.getElementById("numero").value;
    let arrNumero = numero.split("");
    let soma = 0;
    for (let i = 0; i < arrNumero.length; i++) {
        if (Number(arrNumero[i]) >= 0 && Number(arrNumero[i]) <= 9) { //se o numero for maior ou igual a 0 e menor ou igual a 9
            soma += Number(arrNumero[i]); //soma o numero
        }
    }
    document.getElementById("resultado").innerHTML +="A soma dos dígitos é: " + soma;
}