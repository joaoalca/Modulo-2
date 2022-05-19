
function CalcAndShow(number1,number2){
    
    let val1 = parseInt(document.getElementById("number1").value);
    
    let val2 = parseInt(document.getElementById("number2").value);
    
    let op = document.getElementById("op").value;
    
    var result = Calcu(val1, val2, op);

    document.getElementById("resp").innerHTML = result;


}

function Calcu(x, y, op){
    let result;
    result = eval(x + op + y); // eval transforma um string em código javascript
    return result;
};
   
    
