function alunos(){
    var stud = Number(document.getElementById("qntStudents").value);
    var tx = "";
    for (let i = 1 ; i < stud + 1 ; i++){ //for que cria inputs de acordo com o numero de alunos
        tx += '<input type = "number" placeholder = "trablho" id = "trabalho' + i + '"></input><input id = "prova' + i +  '" type="number" placeholder = "prova"></input></br>'
    }
    $("#main").append(tx)   
}

function media(){
    var stud = Number(document.getElementById("qntStudents").value);
    let arrProva = [];
    let arrTrabalho = [];
    let arrMediaAluno = [];
    var mediaGeral = 0;
    var mediaProva = 0;
    var mediaTrabalho = 0;
    var provaMinMax = [9999999999, -1];
    var trabalhoMinMax = [999999999, -1];
    
    for (let i = 1 ; i <= stud ; i++){
        
        let notaProva = document.getElementById('prova' + i).value; //pega nota da prova e joga no array das notas das provas
        arrProva.push(notaProva);
        
        let notaTrabalho = document.getElementById('trabalho' + i).value; //pega nota dos trabalho e joga no array das notas trabalho
        arrTrabalho.push(notaTrabalho)
        
        let notaAluno = (Number(arrProva[i - 1]*2) + Number(arrTrabalho[i - 1]*3))/5; // pega as notas de cada a aluno, cria media individual e joga no array de medias individuais
        arrMediaAluno.push(notaAluno);

        mediaGeral += Number(arrMediaAluno[i -1]); // adciona as medias dos alunos

        mediaProva += Number(arrProva[i - 1]); // adciona as notas das provas
        
        mediaTrabalho += Number(arrTrabalho[i - 1]); // adciona as notas do trabalho

        provaMinMax[0] = Math.min(provaMinMax[0],notaProva); // compara as notas para achar o minimo (prova)

        provaMinMax[1] = Math.max(provaMinMax[1],notaProva); // compara as notas para achar o maximo (prova)

        trabalhoMinMax[0] = Math.min(provaMinMax[0],notaTrabalho); // compara as notas para achar o minimo (trabalho)

        trabalhoMinMax[1] = Math.max(provaMinMax[1],notaTrabalho); // compara as notas para achar o maximo (trabalho)
    }
    // testes
    console.log(arrMediaAluno); // 1
    console.log(mediaGeral/stud); // 2
    console.log(mediaProva/stud); // 3
    console.log(mediaTrabalho/stud); // 4
    console.log(provaMinMax[0],provaMinMax[1]); // 5
    console.log(trabalhoMinMax[0],trabalhoMinMax[1]); // 6

    // prints
    for (let i = 0 ; i < arrMediaAluno.length ; i++) {// for para enviar as medias individuais de cada aluno
        document.getElementById("1").innerHTML += " " + arrMediaAluno[i] + " ; ";
    }
    document.getElementById("2").innerHTML += Number(mediaGeral/stud); // /stud para dividir pelo numero de alunos e calcular as medias
    document.getElementById("3").innerHTML += Number(mediaProva/stud);
    document.getElementById("4").innerHTML += Number(mediaTrabalho/stud);
    document.getElementById("5").innerHTML += "A menor nota é " + provaMinMax[0] + " e a maior nota de é " + provaMinMax[1];
    document.getElementById("6").innerHTML += "A menor nota é " + trabalhoMinMax[0] + " e a maior notas de é " + trabalhoMinMax[1];
}

