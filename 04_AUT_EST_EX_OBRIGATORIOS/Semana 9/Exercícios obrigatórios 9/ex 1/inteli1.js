function check(){
    let numero = document.getElementById("numero").value;
    let arrNumero = numero.split(""); //divide o numero em um array
    if (arrNumero[0] % 2 == 0) {
        document.getElementById("resultado").innerHTML = "O dígito da centena é par"; //se o numero da centena for divisivel por 2 e restar 0, então é par
    }
    else {
        document.getElementById("resultado").innerHTML = "O dígito da centena é impar"; //se o numero da centena for divisivel por 2 e restar != de 0, então é impar
    }
}