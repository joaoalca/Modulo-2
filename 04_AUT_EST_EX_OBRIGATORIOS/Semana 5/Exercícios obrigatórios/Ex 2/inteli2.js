function butt(){
    
    document.getElementById("resp").innerHTML =""
    let valorInicial = document.getElementById("number").value;
    Calc100(valorInicial);
    
};

function Calc100(valorInicial){
    
    let div100 = parseInt(valorInicial / 100);
    var resto1 = parseInt(valorInicial % 100);
    Calc50(resto1);
    document.getElementById("resp").innerHTML += "<br>" + div100 + " notas de 100 R$"

};

function Calc50(resto1){
    let div50 = parseInt(resto1 / 50);
    var resto2 = parseInt(resto1 % 50);
    Calc20(resto2);
    document.getElementById("resp").innerHTML += "<br>" + div50 + " notas de 50 R$"

};

function Calc20(resto2){
    let div20 = parseInt(resto2 / 20);
    var resto3 = parseInt(resto2 % 20);
    Calc10(resto3);
    document.getElementById("resp").innerHTML += "<br>" + div20 + " notas de 20 R$"
};

function Calc10(resto3){
    let div10 = parseInt(resto3 / 10);
    var resto4 = parseInt(resto3 % 10);
    Calc5(resto4);
    document.getElementById("resp").innerHTML += "<br>" + div10 + " notas de 10 R$"
};

function Calc5(resto4){
    let div5 = parseInt(resto4 / 5);
    var resto5 = parseInt(resto4 % 5);
    Calc2(resto5);
    document.getElementById("resp").innerHTML += "<br>" + div5 + " notas de 5 R$"

};

function Calc2(resto5){
    let div2 = parseInt(resto5 / 2);
    var resto6 = parseInt(resto5 % 2);
    Calc1(resto6);
    document.getElementById("resp").innerHTML += "<br>" + div2 + " notas de 2 R$"
};

function Calc1(resto6){
    let div1 = parseInt(resto6 / 1);
    var resto7 = parseInt(resto6 % 1);
    document.getElementById("resp").innerHTML += "<br>" + div1 + " notas de 1 R$"
};