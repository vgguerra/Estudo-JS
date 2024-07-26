function somar(){

    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    n1 = parseFloat(n1);
    n2 = parseFloat(n2)

    let soma = n1 + n2;

    document.getElementById("resultado").innerText = soma
}

function subtrair(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2)

    let res = n1 - n2;

    document.getElementById("resultado").innerText = res
}

function multiplicar(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2)

    let res = n1 * n2;

    document.getElementById("resultado").innerText = res
}

function dividir(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2)

    let res = n1 / n2;

    document.getElementById("resultado").innerText = res
}

function potencia(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2)

    let res = n1 ** n2;

    document.getElementById("resultado").innerText = res
}