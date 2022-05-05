
function buttFunc(){
    
    let vInicial = parseFloat(document.querySelector('#number').value);
    
    const gravity = 10;
    
    let tempTotal = vInicial / gravity;
    
    let altMax = (vInicial ** 2) / (gravity * 2);
    
    document.getElementById("tempo").innerHTML = "O tempo total de subida do objeto é de " + tempTotal + " segundos e a altura máxima é de " + altMax + " metros.";
    
    document.getElementById("number").value = ""
    
}