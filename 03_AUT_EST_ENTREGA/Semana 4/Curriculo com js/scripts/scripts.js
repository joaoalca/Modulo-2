window.onload = function() {
    let newParag = document.createElement("p");
    let textParag = document.createTextNode("Segue as fotos abaixo:");
    newParag.appendChild(textParag);
    let divAdd = document.getElementById("textojs");
    divAdd.appendChild(newParag);
};