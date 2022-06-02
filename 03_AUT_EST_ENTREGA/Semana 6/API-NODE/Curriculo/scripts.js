

$(document).ready(function(){
    $.get("http://127.0.0.1:3000/projeto", function(resultado){
        var objeto = resultado;
        console.log(objeto);
        console.log(Object.keys(objeto).length);
        $("#tabela").append(
            
            `<table>
            <tr>
                <th>Cliente</th>
                <th>Proposta</th>
                <th>Carga horária</th>
            </tr>
            <tr>
                <td>` + objeto[0].cliente + `</td>
                <td>` + objeto[0].proposta + `</td>
                <td>` + objeto[0].carga + `</td>
            </tr>
            <tr>
                <td>` + objeto[1].cliente + `</td>
                <td>`+ objeto[1].proposta + `</td>
                <td>` + objeto[1].carga + `</td>
            </tr>`
        )
    })
});





// $(document).ready(function(){  

//     let newParag = document.createElement("p");
//     let textParag = document.createTextNode("Clique no botão abaixo para ver as imagens:");
//     newParag.appendChild(textParag);
//     let divAdd = document.getElementById("textojs");
//     divAdd.appendChild(newParag);

// });

$(document).ready(function(){  

    $("img").hide()

});

$("button.highL").click(function() {

    $("div.marca").css("background-color", "yellow").show("fast");
    
});

$("button.unhighL").click(function() {

    $("div.marca").css("background-color", "").show("fast");

});

$("button.showImg").click(function() {

    $("img").slideDown("slow");

});