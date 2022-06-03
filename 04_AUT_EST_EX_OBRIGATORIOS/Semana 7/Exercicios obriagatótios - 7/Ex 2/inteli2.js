
// function changeValue(){
//     var x = document.getElementById("first").value;
//     var y = document.getElementById("second").value;
//     document.getElementById("second").value = x;
//     document.getElementById("first").value = y;
// }

function changeValue(){//simple swap of the values of "first" and "second"
    let x = document.getElementById("first").value;
    document.getElementById("first").value = document.getElementById("second").value;
    document.getElementById("second").value = x;
}