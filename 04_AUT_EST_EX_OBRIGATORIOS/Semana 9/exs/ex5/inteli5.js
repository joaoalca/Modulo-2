function cousin(){
    document.getElementById("resultado").innerHTML = "";
    let val1 = Number(document.getElementById("valor1").value);
    let val2 = Number(document.getElementById("valor2").value);
    console.log('teste') //val1 e val2 são os valores dos inputs
    for (let i = val1; i <= val2; i++) { //loop começando do valor 1 até o valor 2
        let alert = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) { //se o numero for divisivel por algum numero maior que 1 e menor que o proprio numero
                alert += 1;	//alerta se o número é divisível por algum número entre 2 e o número que está sendo verificado
                break;
            }
        }
        if (alert == 0 && i > 1) {
            console.log(i);
            document.getElementById("resultado").innerHTML += i + '<br>';
        }
    }
}