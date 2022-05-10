window.onload = function() {
    
    let newParag = document.createElement("p");
    let textParag = document.createTextNode("Clique no botão abaixo para ver as imagens:");
    newParag.appendChild(textParag);
    let divAdd = document.getElementById("textojs");
    divAdd.appendChild(newParag);

}

$(document).ready(function(){  

    $("img").hide()

});

$("button.highL").click(function() {

    $("div.marca").css("background-color", "yellow").show("fast");
    //$("img").slideDown("slow");

});

$("button.unhighL").click(function() {

    $("div.marca").css("background-color", "").show("fast");
    //$("img").slideUp("slow");

});

$("button.showImg").click(function() {

    $("img").slideDown("slow");

});