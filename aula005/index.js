var anoAtual = new Date().getFullYear();

function calcIdade(){
    var anoNasc
    console.log(anoAtual)
    let idade = document.getElementById("idade").value 
    idade = parseFloat(idade)
    anoAtual = parseFloat(anoAtual)
    console.log(idade)
    anoNasc = anoAtual - idade

    document.getElementById("resultado").innerText = anoNasc;
    
}