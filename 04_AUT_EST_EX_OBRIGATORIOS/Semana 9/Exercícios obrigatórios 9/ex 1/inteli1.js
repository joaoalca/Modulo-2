function check(){
    let numero = document.getElementById("numero").value;
    let arrNumero = numero.split("");
    if (arrNumero[0] % 2 == 0) {
        document.getElementById("resultado").innerHTML = "O dígito da centena é par";
    }
    else {
        document.getElementById("resultado").innerHTML = "O dígito da centena é impar";
    }
}