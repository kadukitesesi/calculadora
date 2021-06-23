function calc(){

    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    var operacao = document.getElementById('operacao').value;


    switch(operacao){
        case 'soma':
            document.getElementById('resultado').innerHTML = parseInt(n1) + parseInt(n2);
            break;
        case 'sub':
            document.getElementById('resultado').innerHTML = n1 - n2;
            break;
        case 'mult':
            document.getElementById('resultado').innerHTML = n1 * n2;
            break;
        case 'div':
            document.getElementById('resultado').innerHTML = n1 / n2;
            break;
        case 'poten':
            document.getElementById('resultado').innerHTML = n1 ** n2;
            break; 
    }
}