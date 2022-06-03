function calcValue(){
    var people = document.getElementById("number").value;
    var time = document.getElementById("day").value;
    if (time == "diurno"){//if "time" equals "diurno" the price is 200 and in case of people >= 50, they get a discount of 40%
        var price = 200;
        if (people >= 50){
            price = (200*(40/100))
            document.getElementById("resp").innerHTML = "O valor da passagem será de " + price + " reais por pessoa."
        }
        else {
            document.getElementById("resp").innerHTML = "O valor da passagem será de " + price + " reais por pessoa."
        }
    }
    else {//if "time" is not equal to "diurno" the price is 100 and in case of people >= 50, they get a discount of 20%
        var priceNoturn = 100;
        if (people >= 50){
            priceNoturn = (100*(20/100))
            document.getElementById("resp").innerHTML = "O valor da passagem será de " + priceNoturn + " reais por pessoa."
        }
        else {
            document.getElementById("resp").innerHTML = "O valor da passagem será de " + priceNoturn + " reais por pessoa."
        }
    };
};