function changeValue(){
    let number = document.getElementById("val").value;//get value of "val"
    let pattern = /^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}$/;// regex pattern
    if (number.match(pattern)) {//test if the value match the pattern
       alert("Está certo");
    }
    else {
        alert("Siga o formato (XX)XXXXX-XXXX");
    }
}
