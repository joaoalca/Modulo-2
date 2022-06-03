
function sumButton(){
    var n = Number(document.getElementById("number").value);//get value from "number"
    n += 1;//sum 1 to the value
    document.getElementById("number").value = n;//return the value to "number"
};

function subButton(){
    var n = Number(document.getElementById("number").value);
    n -= 1;//subtract 1 of the value
    document.getElementById("number").value = n;
};