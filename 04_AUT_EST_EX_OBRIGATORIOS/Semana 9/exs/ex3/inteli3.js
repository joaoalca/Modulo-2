function ordena(){
    document.getElementById("resultado").innerHTML = "";	//limpa o resultado
    let nomes = document.getElementById("nomes").value;
    let arrNomes = nomes.split(";");
    let sort = arrNomes.sort(); //ordena o array em ordem alfabética
    console.log(sort);
    document.getElementById("resultado").innerHTML = sort;
}