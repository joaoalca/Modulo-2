function cousin(){
    let val1 = Number(document.getElementById("valor1").value);
    let val2 = Number(document.getElementById("valor2").value);
    console.log('teste') //val1 e val2 são os valores dos inputs
    for (let i = val1; i <= val2; i++) {
        let alert = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
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