function sortArr(){
    let plz = document.getElementById("number2").value; //valor foco
	let valu = document.getElementById("number1").value; //valores entre virgulas
    let valuArr = valu.split(","); // array
    let arraia = sortItems(valuArr);
    console.log(arraia); //teste da ordenação
	console.log(search(plz,valuArr)); //teste da busca
	let posicao = search(plz,valuArr) + 1 //var criada para que não haja poosição 0 no print
	document.getElementById("resp").innerHTML = "O valor foco: " + plz + " está na " + posicao + "o posição!"
};

function sortItems(valuArr) { //bubble sort
	for (let i = 0; i < valuArr.length; i++) {
	for (let j = 0; j < valuArr.length; j++) {
			if (Number(valuArr[j]) > Number(valuArr[j + 1])) {
				let troca = valuArr[j];
				valuArr[j] = valuArr[j + 1];
				valuArr[j + 1] = troca;
			};
		};
	};
	return valuArr;
    
};

function search(val,arr) { //busca linear
	// for (let i = 0; i < arr.length; i++) {
	// 	if ( val == arr[i]) {
	// 		return i;
	// 	}
	// }
	// return -1;
	let menor = 0; //busca binária
	let maior = arr.length - 1;
	while (menor <= maior) {
		console.log("try")//teste para saber quantas tentativas precisou para achar o resultado
		let meio = menor + Math.floor((maior-menor)/2);
		if (val == arr[meio]) {
			return meio;
		}
		if (val < arr[meio]) {
			maior = meio -1;
		}
		else {
			menor = meio + 1;
		}
	}
	return -1;
};


